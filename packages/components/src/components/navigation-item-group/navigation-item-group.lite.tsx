import {
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBNavigationItemGroupProps,
	DBNavigationItemGroupState
} from './model';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	uuid
} from '../../utils';
import { ClickEvent } from '../../shared/model';
import DBButton from '../button/button.lite';
import { DEFAULT_BACK } from '../../shared/constants';
import {
	handleSubNavigationPosition,
	NavigationItemSafeTriangle
} from '../../utils/navigation';

useMetadata({});

useDefaultProps<DBNavigationItemGroupProps>({});

export default function DBNavigationItemGroup(
	props: DBNavigationItemGroupProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBNavigationItemGroupState>({
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		autoClose: false,
		subNavigationId: 'db-navigation-item-group-menu-' + uuid(),
		navigationItemSafeTriangle: undefined,
		handleNavigationItemClick: (event: any) => {
			if (event?.target?.nodeName === 'A') {
				state.autoClose = true;
				delay(() => {
					state.autoClose = false;
				}, 100);
			}
		},
		handleClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			if (props.onClick) {
				event.stopPropagation();
				props.onClick(event);
			}

			state.isSubNavigationExpanded = true;
		},
		handleBackClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!getBoolean(
				props.subNavigationExpanded,
				'subNavigationExpanded'
			);
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		if (_ref) {
			const subNavigationSlot = _ref.querySelector('menu');

			if (subNavigationSlot) {
				if (!state.navigationItemSafeTriangle) {
					state.navigationItemSafeTriangle =
						new NavigationItemSafeTriangle(_ref, subNavigationSlot);
				}
			}
		}
	}, [_ref]);

	return (
		<li
			ref={_ref}
			id={props.id}
			onMouseOver={() => state.navigationItemSafeTriangle?.enableFollow()}
			onMouseLeave={() =>
				state.navigationItemSafeTriangle?.disableFollow()
			}
			onMouseMove={(event: MouseEvent) =>
				state.navigationItemSafeTriangle?.followByMouseEvent(event)
			}
			class={cls('db-navigation-item-group', props.className)}
			data-width={props.width}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-active={props.active}
			data-wrap={getBooleanAsString(props.wrap)}
			aria-disabled={getBooleanAsString(props.disabled)}>
			<button
				aria-haspopup="true"
				aria-expanded={state.isSubNavigationExpanded}
				class="db-navigation-item-group-expand-button"
				disabled={getBoolean(props.disabled, 'disabled')}
				onClick={(event: ClickEvent<HTMLButtonElement>) =>
					state.handleClick(event)
				}>
				{props.groupTitle}
			</button>

			<menu
				class="db-navigation-item-group-menu"
				data-force-close={state.autoClose}
				id={state.subNavigationId}
				onScroll={() => {
					handleSubNavigationPosition(_ref);
				}}
				onClick={(event) => state.handleNavigationItemClick(event)}>
				<div class="db-navigation-item-group-back-button">
					<DBButton
						id={props.backButtonId}
						icon="arrow_left"
						variant="ghost"
						onClick={(event: ClickEvent<HTMLButtonElement>) =>
							state.handleBackClick(event)
						}>
						{props.backButtonText ?? DEFAULT_BACK}
					</DBButton>
				</div>
				{props.children}
			</menu>
		</li>
	);
}
