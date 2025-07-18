import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import { cls, delay, getBoolean, getBooleanAsString, uuid } from '../../utils';
import { NavigationItemSafeTriangle } from '../../utils/navigation';
import DBButton from '../button/button.lite';
import { DBNavigationItemProps, DBNavigationItemState } from './model';

useMetadata({});

useDefaultProps<DBNavigationItemProps>({});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	// jscpd:ignore-start
	const state = useStore<DBNavigationItemState>({
		initialized: false,
		hasAreaPopup: false,
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		autoClose: false,
		subNavigationId: 'sub-navigation-' + uuid(),
		navigationItemSafeTriangle: undefined,
		handleNavigationItemClick: (event: any) => {
			if (event?.target?.nodeName === 'A') {
				state.autoClose = true;
				void delay(() => {
					state.autoClose = false;
				}, 1000);
			}
		},
		handleClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			if (props.onClick) {
				event.stopPropagation();
				props.onClick(event);
			}

			if (state.hasAreaPopup) {
				state.isSubNavigationExpanded = true;
			}
		},
		handleBackClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!getBoolean(
				props.subNavigationExpanded,
				'subNavigationExpanded'
			);
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		if (state.initialized && _ref) {
			const subNavigationSlot = _ref.querySelector('menu');

			if (subNavigationSlot) {
				if (subNavigationSlot.children?.length > 0) {
					state.hasAreaPopup = true;

					if (!state.navigationItemSafeTriangle) {
						state.navigationItemSafeTriangle =
							new NavigationItemSafeTriangle(
								_ref,
								subNavigationSlot
							);
					}
				} else {
					state.hasSubNavigation = false;
				}
			}
		}
	}, [state.initialized, _ref]);
	// jscpd:ignore-end

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
			class={cls('db-navigation-item', props.className)}
			data-width={props.width}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}
			data-active={props.active}
			data-wrap={getBooleanAsString(props.wrap)}
			aria-disabled={getBooleanAsString(props.disabled)}>
			<Show when={!state.hasSubNavigation}>
				<Show when={props.text} else={props.children}>
					{props.text}
				</Show>
			</Show>

			<Show when={state.hasSubNavigation}>
				<button
					aria-haspopup={state.hasAreaPopup}
					aria-expanded={state.isSubNavigationExpanded}
					class="db-navigation-item-expand-button"
					disabled={getBoolean(props.disabled, 'disabled')}
					onClick={(event: ClickEvent<HTMLButtonElement>) =>
						state.handleClick(event)
					}>
					<Show when={props.text} else={props.children}>
						{props.text}
					</Show>
				</button>

				{/* TODO: Consider using popover here */}
				<menu
					class="db-sub-navigation"
					data-force-close={state.autoClose}
					id={state.subNavigationId}
					onClick={(event) => state.handleNavigationItemClick(event)}>
					<Show when={state.hasAreaPopup}>
						<div class="db-mobile-navigation-back">
							<DBButton
								id={props.backButtonId}
								icon="arrow_left"
								variant="ghost"
								onClick={(
									event: ClickEvent<HTMLButtonElement>
								) => state.handleBackClick(event)}>
								{props.backButtonText ?? DEFAULT_BACK}
							</DBButton>
						</div>
					</Show>
					<Slot name="subNavigation"></Slot>
				</menu>
			</Show>
		</li>
	);
}
