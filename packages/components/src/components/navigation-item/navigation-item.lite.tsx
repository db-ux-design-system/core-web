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
import { DBNavigationItemProps, DBNavigationItemState } from './model';
import DBButton from '../button/button.lite';
import { cls, delay, getBooleanAsString, getHideProp, uuid } from '../../utils';
import {
	isEventTargetNavigationItem,
	NavigationItemSafeTriangle
} from '../../utils/navigation';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';

useMetadata({});

useDefaultProps<DBNavigationItemProps>({
	backButtonText: DEFAULT_BACK
});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const _ref = useRef<HTMLLIElement | null>(null);

	// jscpd:ignore-start
	const state = useStore<DBNavigationItemState>({
		initialized: false,
		hasAreaPopup: false,
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		autoClose: false,
		subNavigationId: 'sub-navigation-' + uuid(),
		navigationItemSafeTriangle: undefined,
		handleNavigationItemClick: (event: unknown) => {
			if (isEventTargetNavigationItem(event)) {
				state.autoClose = true;
				delay(() => {
					state.autoClose = false;
				}, 300);
			}
		},
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}

			if (state.hasAreaPopup) {
				state.isSubNavigationExpanded = true;
			}
		},
		handleBackClick: (event: ClickEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		},
		updateSubNavigationState: () => {
			if (state.initialized && document && state.subNavigationId) {
				const subNavigationSlot = document?.getElementById(
					state.subNavigationId
				) as HTMLMenuElement;

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
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!props.subNavigationExpanded;
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		state.updateSubNavigationState();
	}, [state.initialized]);
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
			data-hide-icon={getHideProp(props.showIcon)}
			data-active={props.active}
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
					disabled={props.disabled}
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
					data-auto-close={state.autoClose}
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
								{props.backButtonText}
							</DBButton>
						</div>
					</Show>
					<Slot name="subNavigation"></Slot>
				</menu>
			</Show>
		</li>
	);
}
