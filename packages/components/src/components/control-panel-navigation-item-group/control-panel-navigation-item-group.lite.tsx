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
	adjustNestedSubNavigationPosition,
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
		_isMobile: false,
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
				// Compute a precise pixel-based transform to keep the
				// menu within the viewport (replaces the CSS -200% shift).
				adjustNestedSubNavigationPosition(_menuRef);
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
		_setSiblingsInert: (inert: boolean) => {
			if (!_ref || !_menuRef) return;

			// 1. Mark sibling <li> elements within the parent <menu> as inert
			const parentMenu = (_ref as HTMLElement).parentElement;
			if (parentMenu) {
				const siblings = parentMenu.children;
				for (let i = 0; i < siblings.length; i++) {
					const sibling = siblings[i] as HTMLElement;
					if (sibling !== (_ref as HTMLElement)) {
						if (inert) {
							sibling.setAttribute('inert', '');
						} else {
							sibling.removeAttribute('inert');
						}
					}
				}
			}

			// 2. Mark the expand button as inert when the sub-menu
			// overlay is open, since it is visually behind the overlay.
			if (_buttonRef) {
				if (inert) {
					(_buttonRef as HTMLElement).setAttribute('inert', '');
				} else {
					(_buttonRef as HTMLElement).removeAttribute('inert');
				}
			}

			// 3. Mark other sections in the drawer scroll container as inert
			// (e.g. meta navigation), but NOT the <nav> ancestor of this item.
			const scrollContainer = (_ref as HTMLElement).closest(
				'.db-control-panel-mobile-drawer-scroll-container'
			);
			if (scrollContainer) {
				const navAncestor = (_ref as HTMLElement).closest(
					'.db-control-panel-navigation'
				);
				const children = scrollContainer.children;
				for (let i = 0; i < children.length; i++) {
					const child = children[i] as HTMLElement;
					if (child !== navAncestor) {
						if (inert) {
							child.setAttribute('inert', '');
						} else {
							child.removeAttribute('inert');
						}
					}
				}
			}
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

			// Return focus to the expand button after closing the sub-menu.
			// Use a delay to ensure the inert attribute has been removed first.
			void delay(() => {
				if (_buttonRef) {
					(_buttonRef as HTMLElement).focus();
				}
			}, 1);
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

	// Observe role attribute set imperatively by the parent navigation
	// and persist it in state so frameworks re-apply it after reconciliation.
	onUpdate(() => {
		if (!state.initialized || !_ref || state._attributeObserver) return;

		// Read initial role value synchronously in case parent set it before mount
		const initialRole =
			(_ref as HTMLElement).getAttribute('role') ?? undefined;
		if (initialRole !== state._role) {
			state._role = initialRole;
		}

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.attributeName === 'role') {
					const newRole =
						(_ref as HTMLElement).getAttribute('role') ?? undefined;
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
	}, [_ref, state.initialized]);

	onUnMount(() => {
		state._teardownPopover();
		state._setSiblingsInert(false);

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

			if (_menuRef) {
				state._isMobile = hasCssFlag(
					_menuRef,
					'--db-control-panel-navigation-item-group-menu-mobile'
				);
			}
		}
	}, [_ref, state.initialized]);

	// When a sub-navigation is expanded in mobile mode, mark sibling
	// navigation items as inert so screenreader/keyboard focus cannot
	// escape the visible overlay (resolves #5883).
	onUpdate(() => {
		if (state._isMobile && state.isSubNavigationExpanded) {
			state._setSiblingsInert(true);

			// Move focus to the first navigation item link inside the sub-menu
			if (_menuRef) {
				const firstLink = (_menuRef as HTMLElement).querySelector(
					'.db-control-panel-navigation-item a'
				) as HTMLElement | null;
				if (firstLink) {
					firstLink.focus();
				}
			}
		} else {
			state._setSiblingsInert(false);
		}
	}, [state._isMobile, state.isSubNavigationExpanded]);

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
