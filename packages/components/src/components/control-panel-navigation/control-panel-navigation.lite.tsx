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
import { cls, delay, getBooleanAsString } from '../../utils';
import { handleSubNavigationPosition } from '../../utils/navigation';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
import DBButton from '../button/button.lite';
import {
	DBControlPanelNavigationProps,
	DBControlPanelNavigationState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelNavigationProps>({});

export default function DBControlPanelNavigation(
	props: DBControlPanelNavigationProps
) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const menuRef = useRef<HTMLMenuElement | any>(null);

	const state = useStore<DBControlPanelNavigationState>({
		showScrollLeft: false,
		showScrollRight: false,
		_shellDesktopPosition: undefined,
		_subNavigationDesktopPosition: undefined,
		_variant: undefined,
		initialized: false,
		_isSubNavigation: false,
		_resizeObserverCallbackId: undefined,
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
			if (state._variant !== 'tree' || !menuRef) return;

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
								return;
							}
						}
					}
				} else {
					// Not inside a group, try moving to parent
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
							return;
						}
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
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			void delay(() => {
				const element = _ref as HTMLElement;

				if (!element) return;

				let endVariant = props.variant ?? 'popover';

				const parentClassList =
					element.parentElement?.nodeName.startsWith('DB')
						? element.parentElement?.parentElement?.classList
						: element.parentElement?.classList;

				const shell = element.closest('.db-shell');
				const shellDesktopPosition = shell?.getAttribute(
					'data-control-panel-desktop-position'
				);
				const shellSubNaviDesktopPosition = shell?.getAttribute(
					'data-sub-navigation-desktop-position'
				);
				state._shellDesktopPosition = shellDesktopPosition;
				state._subNavigationDesktopPosition =
					shellSubNaviDesktopPosition;
				const isSubNavigation = parentClassList?.contains(
					'db-shell-sub-navigation'
				);
				state._isSubNavigation = isSubNavigation;
				const requiresPopover =
					(shellDesktopPosition === 'top' &&
						parentClassList?.contains(
							'db-control-panel-desktop-scroll-container'
						)) ||
					((shellSubNaviDesktopPosition === 'top' ||
						shellDesktopPosition === 'left') &&
						isSubNavigation);

				if (requiresPopover) {
					endVariant = 'popover';
				}

				state._variant = endVariant;
			}, 1);
		}
	}, [_ref, props.variant, state.initialized]);

	onUpdate(() => {
		if (menuRef && state._variant) {
			if (!state._variant || state._variant === 'popover') {
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
			} else if (state._variant === 'tree') {
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
			}

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
	}, [menuRef, state._variant, state._shellDesktopPosition]);

	return (
		<nav
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-variant={state._variant}
			data-show-tree-line={getBooleanAsString(
				props.showTreeLine ?? 'true'
			)}
			onScroll={() => state.onScroll()}
			class={cls('db-control-panel-navigation', props.className)}>
			<Show when={state.showScrollLeft}>
				<DBButton
					class="overflow-scroll-left-button"
					variant="filled"
					icon="chevron_left"
					type="button"
					noText
					onClick={() => state.scroll(true)}>
					Scroll left
				</DBButton>
			</Show>
			<menu
				role={state._variant === 'tree' ? 'tree' : undefined}
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
					Scroll right
				</DBButton>
			</Show>
		</nav>
	);
}
