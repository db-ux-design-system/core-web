import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DEFAULT_SCROLL_LEFT,
	DEFAULT_SCROLL_RIGHT
} from '../../shared/constants';
import { NavigationItemGroupVariantType } from '../../shared/model';
import { cls, delay, getBooleanAsString } from '../../utils';
import { handleSubNavigationPosition } from '../../utils/navigation';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
import DBButton from '../button/button.lite';
import {
	DBControlPanelNavigationProps,
	DBControlPanelNavigationState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelNavigationProps>({
	behavior: 'multiple'
});

export default function DBControlPanelNavigation(
	props: DBControlPanelNavigationProps
) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const menuRef = useRef<HTMLMenuElement | any>(null);

	const state = useStore<DBControlPanelNavigationState>({
		showScrollLeft: false,
		showScrollRight: false,
		_variant: undefined,
		initialized: false,
		_resizeObserverCallbackId: undefined,
		_singleBehaviorObserver: undefined,
		_shellObserver: undefined,
		_handleVariantArias: (variant) => {
			if (menuRef) {
				const menuElement = menuRef as HTMLElement;

				if (variant !== 'tree') {
					// Clean up tree roles if switching from tree to popover/drilldown
					for (const menu of Array.from(
						menuElement.querySelectorAll(
							'.db-control-panel-navigation-item-group-menu[role="group"]'
						)
					)) {
						(menu as HTMLElement).removeAttribute('role');
					}

					// Remove forwarded aria-label and role from the <menu> when not in tree variant
					menuElement.removeAttribute('aria-label');
					menuElement.removeAttribute('role');

					for (const navItem of Array.from(
						menuElement.querySelectorAll(
							'.db-control-panel-navigation-item[role="none"], .db-control-panel-navigation-item-group[role="none"]'
						)
					)) {
						navItem.removeAttribute('role');
						const interactive = navItem.querySelector(
							'[role="treeitem"]'
						) as HTMLElement | null;
						if (interactive) {
							interactive.removeAttribute('role');
							interactive.removeAttribute('tabindex');
						}
					}
				} else if (variant === 'tree') {
					for (const menu of Array.from(
						menuElement.querySelectorAll(
							'.db-control-panel-navigation-item-group-menu'
						)
					)) {
						(menu as HTMLElement).style.position = '';
						(menu as HTMLElement).setAttribute('role', 'group');
					}

					// Forward aria-label from the <nav> to the <menu role="tree">
					const navAriaLabel = (_ref as HTMLElement)?.getAttribute(
						'aria-label'
					);
					if (navAriaLabel) {
						menuElement.setAttribute('aria-label', navAriaLabel);
					}

					const allTreeItems: HTMLElement[] = [];
					for (const navItem of Array.from(
						menuElement.querySelectorAll(
							'.db-control-panel-navigation-item, .db-control-panel-navigation-item-group'
						)
					)) {
						navItem.setAttribute('role', 'none');
						const interactive = navItem.querySelector(
							'a, button'
						) as HTMLElement | null;
						if (interactive) {
							interactive.setAttribute('role', 'treeitem');
							interactive.setAttribute('tabindex', '-1');
							allTreeItems.push(interactive);
						}
					}

					// First visible treeitem gets tabindex="0" for initial focus
					if (allTreeItems.length > 0) {
						allTreeItems[0].setAttribute('tabindex', '0');
					}

					// For behavior="single", attach a mutation observer to collapse
					// sibling groups when one is expanded
					if (props.behavior === 'single') {
						state._attachSingleBehaviorObserver();
					} else {
						// Disconnect observer when behavior is not 'single'
						state._disconnectSingleBehaviorObserver();
					}
				}
			}
		},
		_isShellDesktopPositionTop: () => {
			if (!_ref) return false;
			const element = _ref as HTMLElement;
			const shell = element.closest('.db-shell');
			const shellSubNavigation = element.closest(
				'.db-shell-sub-navigation'
			);
			const mobileControlPanel = element.closest(
				'.db-control-panel-mobile'
			);
			const flatIconControlPanel = element.closest(
				'.db-control-panel-flat-icon'
			);
			const isSubNavigationPositionTop =
				shell?.getAttribute('data-sub-navigation-desktop-position') ===
				'top';
			const isMainNavigationPositionTop =
				shell?.getAttribute('data-control-panel-desktop-position') ===
				'top';
			const isMainNavigationPositionLeft =
				shell?.getAttribute('data-control-panel-desktop-position') ===
				'left';

			return (
				!mobileControlPanel &&
				!flatIconControlPanel &&
				((shellSubNavigation &&
					(isSubNavigationPositionTop ||
						isMainNavigationPositionLeft)) ||
					(!shellSubNavigation && isMainNavigationPositionTop))
			);
		},
		_update() {
			if (!_ref) return;
			const shellDesktopPositionTop = state._isShellDesktopPositionTop();

			let mVariant: NavigationItemGroupVariantType | undefined;
			if (shellDesktopPositionTop) {
				mVariant = 'popover';
			} else {
				if (props.variant === 'popover' || !props.variant) {
					mVariant = 'drilldown';
				} else {
					mVariant = props.variant;
				}
			}

			// Only update state and DOM when variant actually changed
			if (state._variant !== mVariant) {
				state._variant = mVariant;
				state._handleVariantArias(mVariant);
			}

			// Scroll buttons and sub-nav position are cheap, always refresh
			if (mVariant === 'popover') {
				void delay(() => {
					state.evaluateScrollButtons(menuRef);
				}, 500);
			} else {
				state.showScrollLeft = false;
				state.showScrollRight = false;
			}
			handleSubNavigationPosition({
				element: menuRef,
				level: 0,
				vertical: shellDesktopPositionTop,
				isPopover: mVariant === 'popover'
			});
		},
		_attachSingleBehaviorObserver() {
			// Disconnect any existing observer stored on the DOM element
			// to avoid Angular signal tracking issues in effects.
			if (menuRef) {
				const prev = (menuRef as any).__singleBehaviorObserver as
					MutationObserver | undefined;
				if (prev) {
					prev.disconnect();
					(menuRef as any).__singleBehaviorObserver = undefined;
				}
			}

			if (!menuRef) return;

			let isProcessing = false;
			const observer = new MutationObserver((mutations) => {
				if (isProcessing) return;
				for (const mutation of mutations) {
					if (
						mutation.type === 'attributes' &&
						mutation.attributeName === 'aria-expanded'
					) {
						const target = mutation.target as HTMLElement;
						const newValue = target.getAttribute('aria-expanded');
						// Only act if the value actually changed to avoid
						// infinite loops when Angular re-applies the same
						// binding value during change detection.
						if (
							newValue === mutation.oldValue ||
							newValue !== 'true'
						) {
							continue;
						}
						// Collapse sibling groups at the same level
						const parentGroup = target.closest(
							'.db-control-panel-navigation-item-group'
						);
						// Navigate to the actual parent container (menu).
						// In Angular/Stencil the parentElement might be a custom element
						// host wrapper, so traverse up until we find the menu container.
						const parentContainer =
							parentGroup?.closest(
								'menu, .db-control-panel-navigation-item-group-menu'
							) ?? parentGroup?.parentElement;
						if (parentContainer) {
							// Second selector arm: WC (Stencil) host wrapper pattern.
							// No `:scope >` on the custom element tag — it already scopes itself.
							const siblingButtons =
								parentContainer.querySelectorAll(
									':scope > .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button, ' +
										'db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button'
								);
							isProcessing = true;
							for (const sibling of Array.from(siblingButtons)) {
								if (
									sibling !== target &&
									sibling.getAttribute('aria-expanded') ===
										'true'
								) {
									const siblingHtml = sibling as HTMLElement;
									if (
										siblingHtml.dataset['isCollapsing'] ===
										'true'
									) {
										siblingHtml.removeAttribute(
											'data-is-collapsing'
										);
									} else {
										siblingHtml.dataset['isCollapsing'] =
											'true';
										siblingHtml.click();
									}
								}
							}
							isProcessing = false;
						}
					}
				}
			});

			// Observe all expand buttons within this navigation
			const expandButtons = (menuRef as HTMLElement).querySelectorAll(
				'.db-control-panel-navigation-item-group-expand-button'
			);
			for (const button of Array.from(expandButtons)) {
				observer.observe(button, {
					attributes: true,
					attributeOldValue: true,
					attributeFilter: ['aria-expanded']
				});
			}

			state._singleBehaviorObserver = observer;
			(menuRef as any).__singleBehaviorObserver = observer;
		},
		_disconnectSingleBehaviorObserver() {
			// Reads from the DOM element instead of state to avoid
			// Angular signal tracking issues in effects.
			if (menuRef) {
				const prev = (menuRef as any).__singleBehaviorObserver as
					MutationObserver | undefined;
				if (prev) {
					prev.disconnect();
					(menuRef as any).__singleBehaviorObserver = undefined;
				}
			}
			state._singleBehaviorObserver = undefined;
		},
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;
			const scrollLeft = Math.ceil(tList.scrollLeft);

			state.showScrollLeft = needsScroll && scrollLeft > 1;
			state.showScrollRight =
				needsScroll &&
				scrollLeft < tList.scrollWidth - tList.clientWidth;
		},
		scroll(left?: boolean) {
			let step = Number(props.arrowScrollDistance) || 100;
			if (left) {
				step *= -1;
			}
			menuRef?.scrollBy({
				top: 0,
				left: step,
				behavior: 'smooth'
			});
		},
		onScroll() {
			if (state._variant === 'popover') {
				state.evaluateScrollButtons(menuRef);
			}
			handleSubNavigationPosition({
				element: menuRef,
				level: 0,
				vertical: state._isShellDesktopPositionTop(),
				isPopover: state._variant === 'popover'
			});
		},
		_handleKeyDown(event: any) {
			if (!menuRef) return;

			if (state._variant === 'tree') {
				state._handleTreeKeys(event);
			} else {
				// TODO: Is this fine for drilldown desktop?
				state._handlePopoverKeys(event);
			}
		},
		_focusParentGroupButton(activeElement: HTMLElement): boolean {
			const parentGroupMenu = activeElement?.closest(
				'.db-control-panel-navigation-item-group-menu'
			);
			const parentGroup = parentGroupMenu?.closest(
				'.db-control-panel-navigation-item-group'
			);
			if (parentGroup) {
				const parentButton = parentGroup.querySelector(
					':scope > .db-control-panel-navigation-item-group-expand-button'
				) as HTMLElement | null;
				if (parentButton) {
					activeElement.setAttribute('tabindex', '-1');
					parentButton.setAttribute('tabindex', '0');
					parentButton.focus();
					return true;
				}
			}
			return false;
		},
		_closeSubMenuAndReturnToParent(parentGroupMenu: Element) {
			const parentGroup = parentGroupMenu.closest(
				'.db-control-panel-navigation-item-group'
			);
			if (parentGroup) {
				const parentButton = parentGroup.querySelector(
					':scope > .db-control-panel-navigation-item-group-expand-button'
				) as HTMLElement | null;
				if (parentButton) {
					parentButton.click();
					parentButton.focus();
				}
			}
		},
		_handlePopoverKeys(event: any) {
			const menuElement = menuRef as HTMLElement;
			const activeElement = document.activeElement as HTMLElement;
			if (!activeElement) return;

			const key = event.key;

			// Determine if we are at the top level or inside a sub-menu
			const parentGroupMenu = activeElement.closest(
				'.db-control-panel-navigation-item-group-menu'
			);
			const isTopLevel = !parentGroupMenu;

			// Top level is horizontal only when shell position is top
			const isHorizontal =
				isTopLevel && state._isShellDesktopPositionTop();

			// Get sibling items at the current level.
			// Use querySelectorAll for the interactive elements and filter
			// to only those whose closest group-menu matches the current
			// container (to exclude items in nested sub-menus).
			const container = isTopLevel ? menuElement : parentGroupMenu;
			const INTERACTIVE_SELECTOR =
				'.db-control-panel-navigation-item > a, .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button';
			const allItems: HTMLElement[] = Array.from(
				container!.querySelectorAll(INTERACTIVE_SELECTOR)
			);
			// Filter to only direct-level items: their closest group-menu
			// must be the same as our container (or null for top-level).
			const items = allItems.filter((item) => {
				const itemGroupMenu = item.closest(
					'.db-control-panel-navigation-item-group-menu'
				);
				return itemGroupMenu === (isTopLevel ? null : parentGroupMenu);
			});
			const currentIndex = items.indexOf(activeElement);

			// Determine navigation keys based on orientation
			// Horizontal: Left/Right = prev/next, Down = open sub
			// Vertical: Up/Down = prev/next, Right = open sub
			const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
			const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
			const openKey = isHorizontal ? 'ArrowDown' : 'ArrowRight';
			const closeKey = isHorizontal ? 'ArrowUp' : 'ArrowLeft';

			// Handle keyboard navigation when focus is on the back button
			// (which is not included in the ITEM_SELECTOR items list).
			const isOnBackButton = activeElement.closest(
				'.db-control-panel-navigation-item-group-back-button'
			);
			if (isOnBackButton && !isTopLevel) {
				if (key === nextKey) {
					event.preventDefault();
					items[0]?.focus();
				} else if (key === prevKey) {
					event.preventDefault();
					items[items.length - 1]?.focus();
				}
				return;
			}

			if (key === nextKey) {
				event.preventDefault();
				if (currentIndex === -1) {
					items[0]?.focus();
				} else if (currentIndex < items.length - 1) {
					items[currentIndex + 1]?.focus();
				} else if (!isTopLevel) {
					// Check if a visible back button exists (mobile).
					// If so, wrap to the back button instead of closing.
					const backButton = parentGroupMenu!.querySelector(
						':scope > .db-control-panel-navigation-item-group-back-button button'
					) as HTMLElement | null;
					if (backButton && backButton.offsetParent !== null) {
						backButton.focus();
					} else {
						state._closeSubMenuAndReturnToParent(parentGroupMenu!);
					}
				} else {
					// Wrap at top level
					items[0]?.focus();
				}
			} else if (key === prevKey) {
				event.preventDefault();
				if (currentIndex > 0) {
					items[currentIndex - 1]?.focus();
				} else if (!isTopLevel) {
					// Check if a visible back button exists in the sub-menu
					// (mobile only). If so, focus it instead of closing.
					const backButton = parentGroupMenu!.querySelector(
						':scope > .db-control-panel-navigation-item-group-back-button button'
					) as HTMLElement | null;
					if (backButton && backButton.offsetParent !== null) {
						backButton.focus();
					} else {
						state._closeSubMenuAndReturnToParent(parentGroupMenu!);
					}
				} else {
					// Wrap at top level
					items[items.length - 1]?.focus();
				}
			} else if (key === openKey) {
				// Open sub-menu if on a group button
				const group = activeElement.closest(
					'.db-control-panel-navigation-item-group'
				);
				if (group) {
					event.preventDefault();
					const expandButton = group.querySelector(
						':scope > .db-control-panel-navigation-item-group-expand-button'
					) as HTMLElement | null;
					if (
						expandButton &&
						expandButton.getAttribute('aria-expanded') !== 'true'
					) {
						expandButton.click();
					}
					const subMenu = group.querySelector(
						':scope > .db-control-panel-navigation-item-group-menu'
					);
					if (subMenu) {
						const firstItem = subMenu.querySelector(
							INTERACTIVE_SELECTOR
						) as HTMLElement | null;
						if (firstItem) {
							firstItem.focus();
						}
					}
				}
			} else if (key === closeKey || key === 'Escape') {
				if (!isTopLevel) {
					// Close sub-menu, return to parent
					event.preventDefault();
					state._closeSubMenuAndReturnToParent(parentGroupMenu!);
				}
			} else if (key === 'Home') {
				event.preventDefault();
				items[0]?.focus();
			} else if (key === 'End') {
				event.preventDefault();
				items[items.length - 1]?.focus();
			}
		},
		_handleTreeKeys(event: any) {
			const menuElement = menuRef as HTMLElement;
			const allTreeItems: HTMLElement[] = Array.from(
				menuElement.querySelectorAll('[role="treeitem"]')
			);
			if (allTreeItems.length === 0) return;

			// Only navigate visible treeitems: skip those inside collapsed groups
			const visibleTreeItems = allTreeItems.filter((item) => {
				// Walk all ancestor group menus and verify each one is expanded
				let current: Element | null = item.closest(
					'.db-control-panel-navigation-item-group-menu'
				);
				while (current) {
					const group = current.closest(
						'.db-control-panel-navigation-item-group'
					);
					const expandButton = group?.querySelector(
						':scope > .db-control-panel-navigation-item-group-expand-button'
					);
					if (
						expandButton?.getAttribute('aria-expanded') !== 'true'
					) {
						return false;
					}
					// Move to the next ancestor group menu (if any)
					const parentGroup = group?.parentElement?.closest(
						'.db-control-panel-navigation-item-group-menu'
					);
					current = parentGroup ?? null;
				}
				return true;
			});

			if (visibleTreeItems.length === 0) return;

			const activeElement = document.activeElement as HTMLElement;
			const currentIndex = visibleTreeItems.indexOf(activeElement);
			const key = event.key;

			let nextIndex = -1;

			if (key === 'ArrowDown') {
				event.preventDefault();
				nextIndex =
					currentIndex < visibleTreeItems.length - 1
						? currentIndex + 1
						: 0;
			} else if (key === 'ArrowUp') {
				event.preventDefault();
				nextIndex =
					currentIndex > 0
						? currentIndex - 1
						: visibleTreeItems.length - 1;
			} else if (key === 'Home') {
				event.preventDefault();
				nextIndex = 0;
			} else if (key === 'End') {
				event.preventDefault();
				nextIndex = visibleTreeItems.length - 1;
			} else if (key === 'ArrowRight') {
				event.preventDefault();
				const group = activeElement?.closest(
					'.db-control-panel-navigation-item-group'
				);
				if (group) {
					const expandButton = group.querySelector(
						':scope > .db-control-panel-navigation-item-group-expand-button'
					) as HTMLElement | null;
					if (
						expandButton === activeElement &&
						expandButton.getAttribute('aria-expanded') !== 'true'
					) {
						expandButton.click();
					} else if (
						expandButton?.getAttribute('aria-expanded') === 'true'
					) {
						const groupMenu = group.querySelector(
							':scope > .db-control-panel-navigation-item-group-menu'
						);
						const childItem = groupMenu?.querySelector(
							'[role="treeitem"]'
						) as HTMLElement | null;
						if (childItem) {
							activeElement.setAttribute('tabindex', '-1');
							childItem.setAttribute('tabindex', '0');
							childItem.focus();
							return;
						}
					}
				}
			} else if (key === 'ArrowLeft') {
				event.preventDefault();
				const currentGroup = activeElement?.closest(
					'.db-control-panel-navigation-item-group'
				);
				if (currentGroup) {
					const expandBtn = currentGroup.querySelector(
						':scope > .db-control-panel-navigation-item-group-expand-button'
					) as HTMLElement | null;
					if (
						expandBtn === activeElement &&
						expandBtn.getAttribute('aria-expanded') === 'true'
					) {
						expandBtn.click();
					} else {
						// Move to parent group button
						if (state._focusParentGroupButton(activeElement)) {
							return;
						}
					}
				} else {
					// Not inside a group, try moving to parent
					if (state._focusParentGroupButton(activeElement)) {
						return;
					}
				}
			} else if (key === 'Escape') {
				event.preventDefault();
				activeElement?.blur();
				return;
			} else {
				return;
			}

			if (nextIndex >= 0 && nextIndex < visibleTreeItems.length) {
				activeElement?.setAttribute('tabindex', '-1');
				visibleTreeItems[nextIndex].setAttribute('tabindex', '0');
				visibleTreeItems[nextIndex].focus();
			}
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUnMount(() => {
		if (state._resizeObserverCallbackId) {
			new ResizeObserverListener().unobserve(
				state._resizeObserverCallbackId!
			);
			state._resizeObserverCallbackId = undefined;
		}

		state._disconnectSingleBehaviorObserver();

		state._shellObserver?.disconnect();
		state._shellObserver = undefined;
	});

	// After init, find the closest DBShell and observe its
	// data-control-panel-desktop-position attribute to derive state
	// without relying on CSS flags (avoids framework race conditions).
	onUpdate(() => {
		if (_ref && menuRef && state.initialized) {
			requestAnimationFrame(() => {
				state._update();

				// Set up ResizeObserver for scroll buttons and sub-nav positioning
				if (!state._resizeObserverCallbackId) {
					state._resizeObserverCallbackId =
						new ResizeObserverListener().observe(menuRef, () => {
							state._update();
						});
				}
			});

			// Observe the closest shell element for attribute changes
			if (!state._shellObserver) {
				const shell = (_ref as HTMLElement).closest('.db-shell');
				if (shell) {
					const observer = new MutationObserver(() => {
						state._update();
					});
					observer.observe(shell, {
						attributes: true,
						attributeFilter: ['data-control-panel-desktop-position']
					});
					state._shellObserver = observer;
				}
			}
		}
	}, [_ref, menuRef, state.initialized]);

	onUpdate(() => {
		if (props.variant) {
			state._update();
		}
	}, [props.variant, props.behavior]);

	return (
		<nav
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-variant={state._variant}
			data-behavior={props.behavior}
			data-show-tree-line={getBooleanAsString(
				props.showTreeLine ?? 'true',
				'showTreeLine'
			)}
			class={cls('db-control-panel-navigation', props.className)}>
			<Show when={state.showScrollLeft}>
				<DBButton
					class="overflow-scroll-left-button"
					variant="filled"
					icon="chevron_left"
					type="button"
					noText
					onClick={() => state.scroll(true)}>
					{props.scrollLeftText ?? DEFAULT_SCROLL_LEFT}
				</DBButton>
			</Show>
			<menu
				role={state._variant === 'tree' ? 'tree' : undefined}
				ref={menuRef}
				onScroll={() => state.onScroll()}
				onKeyDown={(event: any) => state._handleKeyDown(event)}>
				{props.children}
			</menu>
			<Show when={state.showScrollRight}>
				<DBButton
					class="overflow-scroll-right-button"
					variant="filled"
					icon="chevron_right"
					type="button"
					noText
					onClick={() => state.scroll()}>
					{props.scrollRightText ?? DEFAULT_SCROLL_RIGHT}
				</DBButton>
			</Show>
		</nav>
	);
}
