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
				state._shellDesktopPosition === 'left' ||
					(state._shellDesktopPosition === 'top' &&
						state._subNavigationDesktopPosition === 'left' &&
						state._isSubNavigation)
					? 1
					: 0
			);
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
				state._handleSubNavigation();
			} else if (state._variant === 'tree') {
				for (const menu of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
						'.db-control-panel-navigation-item-group-menu'
					)
				)) {
					(menu as HTMLElement).style.position = '';
				}

				for (const navItem of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
						'.db-control-panel-navigation-item, .db-control-panel-navigation-item-group'
					)
				)) {
					// TODO: Add keyboard navigation support
					navItem.setAttribute('role', 'none');
					navItem
						.querySelector('a, button')
						?.setAttribute('role', 'treeitem');
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
				onScroll={() => state.onScroll()}>
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
