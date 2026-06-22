import {
	onMount,
	onUnMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	uuid
} from '../../utils';
import { IntersectionObserverListener } from '../../utils/intersection-observer-listener';
import {
	handleSubNavigationPosition,
	NavigationItemSafeTriangle
} from '../../utils/navigation';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
import DBButton from '../button/button.lite';
import {
	DBControlPanelNavigationItemGroupProps,
	DBControlPanelNavigationItemGroupState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelNavigationItemGroupProps>({});

export default function DBControlPanelNavigationItemGroup(
	props: DBControlPanelNavigationItemGroupProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement | any>(undefined);
	const _menuRef = useRef<HTMLElement | any>(undefined);
	const _buttonRef = useRef<HTMLButtonElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelNavigationItemGroupState>({
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		autoClose: false,
		hasPopup: false,
		initialized: false,
		_itemGroupMenuId:
			'db-control-panel-navigation-item-group-menu-' + uuid(),
		_intersectionObserverCallbackId: undefined,
		_resizeObserverCallbackId: undefined,
		navigationItemSafeTriangle: undefined,
		onScroll: () => {
			if (state.hasPopup && _menuRef) {
				handleSubNavigationPosition(_menuRef);
			}
		},
		handleNavigationItemClick: (event: any) => {
			if (event?.target?.nodeName === 'A') {
				state.forceClose();
			}
		},
		forceClose: () => {
			state.autoClose = true;
			void delay(() => {
				state.autoClose = false;
			}, 300);
		},
		handleClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			if (props.onClick) {
				event.stopPropagation();
				props.onClick(event);
			}
		},
		handleBackClick: (event: ClickEvent<HTMLButtonElement> | any) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		},
		handleEscape: (event: any) => {
			if (!event || event.key === 'Escape') {
				state.forceClose();
				_buttonRef.blur();
			}
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		state.initialized = true;
	});

	onUnMount(() => {
		if (state._intersectionObserverCallbackId) {
			new IntersectionObserverListener().unobserve(
				state._intersectionObserverCallbackId!
			);
			state._intersectionObserverCallbackId = undefined;
		}

		if (state._resizeObserverCallbackId) {
			new ResizeObserverListener().unobserve(
				state._resizeObserverCallbackId!
			);
			state._resizeObserverCallbackId = undefined;
		}
	});

	onUpdate(() => {
		if (props.expanded !== undefined) {
			state.isSubNavigationExpanded = !!getBoolean(
				props.expanded,
				'subNavigationExpanded'
			);
		}
	}, [props.expanded]);

	onUpdate(() => {
		if (_ref && state.initialized) {
			state.initialized = false;
			// We delay this because the navigation variant check is delayed as well
			void delay(() => {
				const element = _ref as HTMLLIElement;
				if (element) {
					const nav = element.closest<HTMLElement>(
						'.db-control-panel-navigation'
					);

					state.hasPopup =
						!nav ||
						!nav.dataset['variant'] ||
						nav.dataset['variant'] === 'popover';
				}
			}, 200);
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (
			_ref &&
			_buttonRef &&
			_menuRef &&
			state.hasPopup &&
			!state.navigationItemSafeTriangle
		) {
			void delay(() => {
				state.navigationItemSafeTriangle =
					new NavigationItemSafeTriangle(_ref, _menuRef);
			}, 1);

			['mouseenter', 'focusin'].forEach((event) => {
				_ref.addEventListener(event, () => {
					if (_menuRef) {
						handleSubNavigationPosition(_menuRef);
					}
				});
			});

			_ref.addEventListener('focusin', () => {
				state.isSubNavigationExpanded = true;
			});

			_ref.addEventListener('focusout', (event: any) => {
				const relatedTarget = event.relatedTarget as HTMLElement | null;
				if (
					!relatedTarget ||
					!(_ref as HTMLElement).contains(relatedTarget)
				) {
					state.isSubNavigationExpanded = false;
				}
			});

			_ref.addEventListener('mouseenter', () => {
				state.isSubNavigationExpanded = true;
			});

			_ref.addEventListener('mouseleave', () => {
				state.isSubNavigationExpanded = false;
			});

			state._intersectionObserverCallbackId =
				new IntersectionObserverListener().observe(
					_buttonRef,
					(entry) => {
						if (!entry.isIntersecting) {
							state.forceClose();
						}
					}
				);

			// Re-position the sub-navigation popover on viewport resize
			// (e.g. orientation change), because placement depends on the
			// viewport dimensions.
			state._resizeObserverCallbackId =
				new ResizeObserverListener().observe(
					document.documentElement,
					() => {
						if (_menuRef) {
							handleSubNavigationPosition(_menuRef);
						}
					}
				);
		}
	}, [_ref, _menuRef, _buttonRef, state.hasPopup]);

	return (
		<li
			ref={_ref}
			id={props.id}
			onMouseOver={() => state.navigationItemSafeTriangle?.enableFollow()}
			onMouseLeave={() =>
				state.navigationItemSafeTriangle?.disableFollow()
			}
			onMouseMove={(event: any) =>
				state.navigationItemSafeTriangle?.followByMouseEvent(event)
			}
			onKeyDown={(event) => state.handleEscape(event)}
			class={cls(
				'db-control-panel-navigation-item-group',
				props.className
			)}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-active={props.active}
			aria-disabled={getBooleanAsString(props.disabled, 'disabled')}>
			<button
				ref={_buttonRef}
				type="button"
				aria-haspopup={getBooleanAsString(
					state.hasPopup ? true : undefined
				)}
				aria-owns={
					state.hasPopup
						? undefined
						: (props.menuId ?? state._itemGroupMenuId)
				}
				aria-expanded={getBooleanAsString(
					state.isSubNavigationExpanded
				)}
				class="db-control-panel-navigation-item-group-expand-button"
				disabled={getBoolean(props.disabled, 'disabled')}
				onClick={(event: ClickEvent<HTMLButtonElement>) =>
					state.handleClick(event)
				}>
				<Slot name="startSlot"></Slot>
				{props.text}
				<Slot name="endSlot"></Slot>
			</button>

			<menu
				ref={_menuRef}
				class="db-control-panel-navigation-item-group-menu"
				data-force-close={getBooleanAsString(state.autoClose)}
				id={props.menuId ?? state._itemGroupMenuId}
				onScroll={() => state.onScroll()}
				onClick={(event) => state.handleNavigationItemClick(event)}>
				<li class="db-control-panel-navigation-item-group-back-button">
					<DBButton
						id={props.backButtonId}
						icon="arrow_left"
						variant="ghost"
						onClick={(event: ClickEvent<HTMLButtonElement>) =>
							state.handleBackClick(event)
						}>
						{props.backButtonText ?? DEFAULT_BACK}
					</DBButton>
				</li>
				{props.children}
			</menu>
		</li>
	);
}
