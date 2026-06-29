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
	hasCssFlag,
	uuid
} from '../../utils';
import { handleDataOutside } from '../../utils/floating-components';
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
	const _ref = useRef<HTMLLIElement | any>(null);
	const _menuRef = useRef<HTMLElement | any>(null);
	const _buttonRef = useRef<HTMLButtonElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelNavigationItemGroupState>({
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		autoClose: false,
		hasPopup: false,
		initialized: false,
		_role: undefined,
		_attributeObserver: undefined,
		_itemGroupMenuId:
			'db-control-panel-navigation-item-group-menu-' + uuid(),
		_intersectionObserverCallbackId: undefined,
		_resizeObserverCallbackId: undefined,
		_popoverListenersAttached: false,
		navigationItemSafeTriangle: undefined,
		_handleFocusIn: () => {
			if (!state.hasPopup) return;
			state.isSubNavigationExpanded = true;
		},
		_handleFocusOut: (event: any) => {
			if (!state.hasPopup) return;
			const relatedTarget = event.relatedTarget as HTMLElement | null;
			if (
				!relatedTarget ||
				!(_ref as HTMLElement).contains(relatedTarget)
			) {
				state.isSubNavigationExpanded = false;
			}
		},
		_handleMouseEnter: () => {
			if (!state.hasPopup) return;
			if (_menuRef) {
				handleSubNavigationPosition(_menuRef);
				// Check if the menu overflows the viewport and set
				// data-outside-vy / data-outside-vx for CSS flipping.
				// visibility:hidden elements report correct layout via
				// getBoundingClientRect, so we can measure immediately.
				handleDataOutside(_menuRef);
			}
			state.isSubNavigationExpanded = true;
		},
		_handleMouseLeave: () => {
			if (!state.hasPopup) return;
			state.isSubNavigationExpanded = false;
		},
		_attachPopoverListeners: () => {
			if (state._popoverListenersAttached || !_ref) return;

			_ref.addEventListener('mouseenter', state._handleMouseEnter);
			_ref.addEventListener('mouseleave', state._handleMouseLeave);
			_ref.addEventListener('focusin', state._handleFocusIn);
			_ref.addEventListener('focusout', state._handleFocusOut);
			state._popoverListenersAttached = true;
		},
		_detachPopoverListeners: () => {
			if (!state._popoverListenersAttached || !_ref) return;

			_ref.removeEventListener('mouseenter', state._handleMouseEnter);
			_ref.removeEventListener('mouseleave', state._handleMouseLeave);
			_ref.removeEventListener('focusin', state._handleFocusIn);
			_ref.removeEventListener('focusout', state._handleFocusOut);

			state.isSubNavigationExpanded = false;
			state._popoverListenersAttached = false;
		},
		_teardownPopover: () => {
			state._detachPopoverListeners();
			state.navigationItemSafeTriangle = undefined;

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
		},
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
			if (!state.hasPopup) {
				state.isSubNavigationExpanded = !state.isSubNavigationExpanded;
			}

			if (props.onClick) {
				// Prevent click from bubbling to the control-panel-mobile
				// handleNavigationItemClick which would close the drawer.
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

		// Observe role attribute set imperatively by the parent navigation
		// and persist it in state so frameworks re-apply it after reconciliation.
		if (_ref) {
			const observer = new MutationObserver((mutations) => {
				for (const mutation of mutations) {
					if (mutation.attributeName === 'role') {
						const newRole =
							(_ref as HTMLElement).getAttribute('role') ??
							undefined;
						if (newRole !== state._role) {
							state._role = newRole;
						}
					}
				}
			});
			observer.observe(_ref, {
				attributes: true,
				attributeFilter: ['role']
			});
			state._attributeObserver = observer;
		}
	});

	onUnMount(() => {
		state._teardownPopover();

		state._attributeObserver?.disconnect();
		state._attributeObserver = undefined;
	});

	onUpdate(() => {
		if (props.expanded !== undefined) {
			state.isSubNavigationExpanded = !!getBoolean(
				props.expanded,
				'expanded'
			);
		}
	}, [props.expanded]);

	onUpdate(() => {
		if (_ref && state.initialized) {
			state.initialized = false;

			state.hasPopup = hasCssFlag(
				_ref,
				'--db-control-panel-navigation-item-group-menu-popover'
			);
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (_ref && _buttonRef && _menuRef && state.hasPopup) {
			if (!state.navigationItemSafeTriangle) {
				state.navigationItemSafeTriangle =
					new NavigationItemSafeTriangle(_ref, _menuRef);
			}

			state._attachPopoverListeners();

			if (!state._intersectionObserverCallbackId) {
				state._intersectionObserverCallbackId =
					new IntersectionObserverListener().observe(
						_buttonRef,
						(entry) => {
							if (!entry.isIntersecting) {
								state.forceClose();
							}
						}
					);
			}

			// Re-position the sub-navigation popover on viewport resize
			// (e.g. orientation change), because placement depends on the
			// viewport dimensions.
			if (!state._resizeObserverCallbackId) {
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
		}

		if (!state.hasPopup) {
			state._teardownPopover();
		}
	}, [_ref, _menuRef, _buttonRef, state.hasPopup]);

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			role={state._role}
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
			data-show-icon={getBooleanAsString(props.showIcon, 'showIcon')}
			data-active={getBooleanAsString(props.active, 'active')}
			aria-disabled={getBooleanAsString(props.disabled, 'disabled')}>
			<button
				ref={_buttonRef}
				type="button"
				aria-haspopup={getBooleanAsString(
					state.hasPopup ? true : undefined
				)}
				aria-controls={props.menuId ?? state._itemGroupMenuId}
				aria-expanded={getBooleanAsString(
					state.isSubNavigationExpanded
				)}
				class="db-control-panel-navigation-item-group-expand-button"
				disabled={getBoolean(props.disabled, 'disabled')}
				onClick={(event: ClickEvent<HTMLButtonElement>) =>
					state.handleClick(event)
				}>
				{props.text}

				<div class="db-control-panel-navigation-item-group-expand-button-end-slot-container">
					<Slot name="endSlot"></Slot>
				</div>
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
