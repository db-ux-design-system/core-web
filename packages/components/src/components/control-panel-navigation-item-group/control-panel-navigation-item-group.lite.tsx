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
import DBTooltip from '../tooltip/tooltip.lite';
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
		isSubNavigationExpanded: false,
		autoClose: false,
		_isPopover: false,
		initialized: false,
		_isDrilldown: false,
		_role: undefined,
		_attributeObserver: undefined,
		_itemGroupMenuId:
			'db-control-panel-navigation-item-group-menu-' + uuid(),
		_intersectionObserverCallbackId: undefined,
		_resizeObserverCallbackId: undefined,
		_popoverListenersAttached: false,
		navigationItemSafeTriangle: undefined,
		_getDrilldownFlag() {
			return hasCssFlag(
				_menuRef,
				'--db-control-panel-navigation-item-group-menu-drilldown'
			);
		},
		_getPopoverFlag() {
			return hasCssFlag(
				_menuRef,
				'--db-control-panel-navigation-item-group-menu-popover'
			);
		},
		_handleSubNavigation() {
			handleSubNavigationPosition(_menuRef);
		},
		_handleCSSFlags() {
			if (!_menuRef) return;
			state._isPopover = state._getPopoverFlag();
			state._isDrilldown = state._getDrilldownFlag();
		},
		_handleFocusIn: () => {
			if (!state._isPopover) return;
			state.isSubNavigationExpanded = true;
		},
		_handleFocusOut: (event: any) => {
			if (!state._isPopover || !event) return;
			const relatedTarget = event.relatedTarget as HTMLElement | null;
			if (
				!relatedTarget ||
				!(_ref as HTMLElement).contains(relatedTarget)
			) {
				state.isSubNavigationExpanded = false;
			}
		},
		_handleMouseEnter: () => {
			if (!state._isPopover) return;
			state.isSubNavigationExpanded = true;
			// Compute a precise pixel-based transform to keep the
			// menu within the viewport (replaces the CSS -200% shift).
			adjustNestedSubNavigationPosition(_menuRef);
			// Check if the menu overflows the viewport and set
			// data-outside-vy / data-outside-vx for CSS flipping.
			// visibility:hidden elements report correct layout via
			// getBoundingClientRect, so we can measure immediately.
			handleDataOutside(_menuRef);
		},
		_handleMouseLeave: () => {
			if (!state._isPopover) return;
			state.isSubNavigationExpanded = false;
		},
		_setSiblingsInert: (inert: boolean) => {
			if (!_ref || !_menuRef) return;

			// 1. Mark sibling items within the closest parent <menu> as inert.
			// In frameworks like Angular and Stencil, custom element hosts
			// wrap the <li>, so parentElement is the host, not the <menu>.
			// Walk up to the nearest ancestor <menu> and mark its children.
			const closestMenu = (_ref as HTMLElement).closest('menu');
			if (closestMenu) {
				const siblings = closestMenu.children;
				for (let i = 0; i < siblings.length; i++) {
					const sibling = siblings[i] as HTMLElement;
					// Skip the element that contains our _ref
					if (
						sibling === (_ref as HTMLElement) ||
						sibling.contains(_ref as HTMLElement)
					) {
						continue;
					}
					if (inert) {
						sibling.setAttribute('inert', '');
					} else {
						sibling.removeAttribute('inert');
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
				const children = scrollContainer.children;
				for (let i = 0; i < children.length; i++) {
					const child = children[i] as HTMLElement;
					// Skip the child that contains our _ref (the navigation)
					if (child.contains(_ref as HTMLElement)) {
						continue;
					}
					if (inert) {
						child.setAttribute('inert', '');
					} else {
						child.removeAttribute('inert');
					}
				}
			}
		},
		_attachPopoverListeners: () => {
			if (state._popoverListenersAttached || !_ref) return;

			const mouseEnter = () => {
				state._handleMouseEnter();
			};
			const mouseLeave = () => {
				state._handleMouseLeave();
			};
			const focusIn = () => {
				state._handleFocusIn();
			};
			const focusOut = (event: any) => {
				state._handleFocusOut(event);
			};

			// Store listener references on the DOM element to avoid
			// framework-specific state issues (React useState interprets
			// function values as updater functions, triggering the handler
			// immediately instead of storing it).
			(_ref as any).__popoverListeners = {
				mouseEnter,
				mouseLeave,
				focusIn,
				focusOut
			};

			_ref.addEventListener('mouseenter', mouseEnter);
			_ref.addEventListener('mouseleave', mouseLeave);
			_ref.addEventListener('focusin', focusIn);
			_ref.addEventListener('focusout', focusOut);
			state._popoverListenersAttached = true;
		},
		_detachPopoverListeners: () => {
			if (!state._popoverListenersAttached || !_ref) return;

			const listeners = (_ref as any).__popoverListeners;
			if (listeners) {
				_ref.removeEventListener('mouseenter', listeners.mouseEnter);
				_ref.removeEventListener('mouseleave', listeners.mouseLeave);
				_ref.removeEventListener('focusin', listeners.focusIn);
				_ref.removeEventListener('focusout', listeners.focusOut);
				(_ref as any).__popoverListeners = undefined;
			}

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
			if (state._isPopover && _menuRef) {
				state._handleSubNavigation();
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
			if (!state._isPopover) {
				state.isSubNavigationExpanded = !state.isSubNavigationExpanded;
			}

			// When triggered programmatically by the single-behavior observer,
			// clean up the collapsing marker and stop bubbling so parent
			// handlers (e.g. control-panel-mobile) are not triggered.
			if (
				_buttonRef &&
				(_buttonRef as HTMLElement).dataset['isCollapsing'] === 'true'
			) {
				(_buttonRef as HTMLElement).removeAttribute(
					'data-is-collapsing'
				);
				event.stopPropagation();
				return;
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
				event?.stopPropagation();
				state.forceClose();
				// Return focus to expand button instead of blurring
				if (_buttonRef) {
					(_buttonRef as HTMLElement).focus();
				}
			}
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		state.initialized = true;
		state._handleCSSFlags();
		requestAnimationFrame(() => {
			state._handleCSSFlags();
		});
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
		if (_ref && _menuRef && state.initialized) {
			state._handleCSSFlags();
		}
	}, [_ref, _menuRef, state.initialized]);

	// When a sub-navigation is expanded in drilldown mode, mark sibling
	// navigation items as inert so screenreader/keyboard focus cannot
	// escape the visible overlay (resolves #5883).
	onUpdate(() => {
		if (state._getDrilldownFlag() && state.isSubNavigationExpanded) {
			state._setSiblingsInert(true);

			// Move focus to the first navigation item link inside the sub-menu.
			// Second selector arm: WC (Stencil) host wrapper pattern.
			// No `:scope >` on the custom element tag — it already scopes itself.
			if (_menuRef) {
				const firstLink = (_menuRef as HTMLElement).querySelector(
					':scope > .db-control-panel-navigation-item a, :scope > db-control-panel-navigation-item > .db-control-panel-navigation-item a'
				) as HTMLElement | null;
				if (firstLink) {
					firstLink.focus();
				}
			}
		} else {
			state._setSiblingsInert(false);
		}

		state._handleSubNavigation();
	}, [state.isSubNavigationExpanded]);

	onUpdate(() => {
		if (_ref && _buttonRef && _menuRef && state._isPopover) {
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
								state._handleSubNavigation();
							}
						}
					);
			}
		}

		if (!state._isPopover) {
			state._teardownPopover();
		}
	}, [_ref, _menuRef, _buttonRef, state._isPopover]);

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
					state._isPopover ? true : undefined
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
				data-initialized={getBooleanAsString(state.initialized)}
				data-force-close={getBooleanAsString(state.autoClose)}
				id={props.menuId ?? state._itemGroupMenuId}
				onScroll={() => state.onScroll()}
				onClick={(event) => state.handleNavigationItemClick(event)}>
				<li class="db-control-panel-navigation-item-group-back-button">
					<DBButton
						id={props.backButtonId}
						icon="arrow_left"
						variant="ghost"
						noText
						onClick={(event: ClickEvent<HTMLButtonElement>) =>
							state.handleBackClick(event)
						}>
						{props.backButtonText ?? DEFAULT_BACK}
						<DBTooltip forceAbsolute placement="bottom-start">
							{props.backButtonText ?? DEFAULT_BACK}
						</DBTooltip>
					</DBButton>
					<span>{props.text}</span>
				</li>
				{props.children}
			</menu>
		</li>
	);
}
