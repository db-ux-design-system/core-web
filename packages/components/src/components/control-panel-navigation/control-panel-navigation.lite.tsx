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
import { cls, getBooleanAsString, hasCssFlag } from '../../utils';
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
		_shellDesktopPosition: undefined,
		initialized: false,
		_resizeObserverCallbackId: undefined,
		_singleBehaviorObserver: undefined,
		_attachSingleBehaviorObserver() {
			// Disconnect any previous observer
			state._singleBehaviorObserver?.disconnect();
			state._singleBehaviorObserver = undefined;

			if (!menuRef) return;

			const observer = new MutationObserver((mutations) => {
				for (const mutation of mutations) {
					if (
						mutation.type === 'attributes' &&
						mutation.attributeName === 'aria-expanded'
					) {
						const target = mutation.target as HTMLElement;
						if (target.getAttribute('aria-expanded') === 'true') {
							// Collapse sibling groups at the same level
							const parentGroup = target.closest(
								'.db-control-panel-navigation-item-group'
							);
							const parentContainer = parentGroup?.parentElement;
							if (parentContainer) {
								const siblingButtons =
									parentContainer.querySelectorAll(
										':scope > .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button'
									);
								for (const sibling of Array.from(
									siblingButtons
								)) {
									if (
										sibling !== target &&
										sibling.getAttribute(
											'aria-expanded'
										) === 'true'
									) {
										(sibling as HTMLElement).click();
									}
								}
							}
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
					attributeFilter: ['aria-expanded']
				});
			}

			state._singleBehaviorObserver = observer;
		},
		evaluateScrollButtons(tList: Element) {
			if (!tList) return;
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
			state.evaluateScrollButtons(menuRef);
			state._handleSubNavigation();
		},
		_handleSubNavigation() {
			handleSubNavigationPosition(
				menuRef,
				0,
				state._shellDesktopPosition === 'top'
			);
		},
		_handleTreeKeyDown(event: any) {
			if (!menuRef) return;

			if (props.variant === 'tree') {
				state._handleTreeKeys(event);
			} else if (props.variant === 'popover') {
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
			const ITEM_SELECTOR =
				':scope > .db-control-panel-navigation-item > a, :scope > .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button, :scope > db-control-panel-navigation-item > .db-control-panel-navigation-item > a, :scope > db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group-expand-button';

			// Determine if we are at the top level or inside a sub-menu
			const parentGroupMenu = activeElement.closest(
				'.db-control-panel-navigation-item-group-menu'
			);
			const isTopLevel = !parentGroupMenu;

			// Top level is horizontal only when shell position is top
			const isHorizontal =
				isTopLevel && state._shellDesktopPosition === 'top';

			// Get sibling items at the current level
			const container = isTopLevel ? menuElement : parentGroupMenu;
			const items: HTMLElement[] = Array.from(
				container!.querySelectorAll(ITEM_SELECTOR)
			);
			const currentIndex = items.indexOf(activeElement);

			// Determine navigation keys based on orientation
			// Horizontal: Left/Right = prev/next, Down = open sub
			// Vertical: Up/Down = prev/next, Right = open sub
			const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
			const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
			const openKey = isHorizontal ? 'ArrowDown' : 'ArrowRight';
			const closeKey = isHorizontal ? 'ArrowUp' : 'ArrowLeft';

			if (key === nextKey) {
				event.preventDefault();
				if (currentIndex < items.length - 1) {
					items[currentIndex + 1]?.focus();
				} else if (!isTopLevel) {
					state._closeSubMenuAndReturnToParent(parentGroupMenu!);
				} else {
					// Wrap at top level
					items[0]?.focus();
				}
			} else if (key === prevKey) {
				event.preventDefault();
				if (currentIndex > 0) {
					items[currentIndex - 1]?.focus();
				} else if (!isTopLevel) {
					state._closeSubMenuAndReturnToParent(parentGroupMenu!);
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
							ITEM_SELECTOR
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
				const groupMenu = item.closest(
					'.db-control-panel-navigation-item-group-menu'
				);
				if (!groupMenu) return true;
				const group = groupMenu.closest(
					'.db-control-panel-navigation-item-group'
				);
				const expandButton = group?.querySelector(
					':scope > .db-control-panel-navigation-item-group-expand-button'
				);
				return expandButton?.getAttribute('aria-expanded') === 'true';
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

		state._singleBehaviorObserver?.disconnect();
		state._singleBehaviorObserver = undefined;
	});

	onUpdate(() => {
		if (_ref) {
			state._shellDesktopPosition = hasCssFlag(
				_ref,
				'--db-control-panel-navigation-horizontal'
			)
				? 'top'
				: 'left';
		}
	}, [_ref]);

	onUpdate(() => {
		if (menuRef) {
			if (!props.variant || props.variant === 'popover') {
				// Clean up tree roles if switching from tree to popover
				for (const menu of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
						'.db-control-panel-navigation-item-group-menu[role="group"]'
					)
				)) {
					(menu as HTMLElement).removeAttribute('role');
				}

				for (const navItem of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
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

				state._handleSubNavigation();
			} else if (props.variant === 'tree') {
				for (const menu of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
						'.db-control-panel-navigation-item-group-menu'
					)
				)) {
					(menu as HTMLElement).style.position = '';
					(menu as HTMLElement).setAttribute('role', 'group');
				}

				const allTreeItems: HTMLElement[] = [];
				for (const navItem of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
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
				}
			}
		}
	}, [menuRef, props.variant, state._shellDesktopPosition, props.behavior]);

	onUpdate(() => {
		if (state._shellDesktopPosition) {
			state._handleSubNavigation();
			state.evaluateScrollButtons(menuRef);

			// Re-evaluate scroll buttons and re-position the sub-navigation on
			// container resize (e.g. orientation change). A container-specific
			// ResizeObserver provides more accurate detection than global
			// window resize events.
			if (!state._resizeObserverCallbackId) {
				state._resizeObserverCallbackId =
					new ResizeObserverListener().observe(menuRef, () => {
						state.evaluateScrollButtons(menuRef);
						state._handleSubNavigation();
					});
			}
		}
	}, [menuRef, state._shellDesktopPosition]);

	return (
		<nav
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-variant={props.variant}
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
				role={props.variant === 'tree' ? 'tree' : undefined}
				ref={menuRef}
				onScroll={() => state.onScroll()}
				onKeyDown={(event: any) => state._handleTreeKeyDown(event)}>
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
