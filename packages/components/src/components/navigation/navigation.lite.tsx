import {
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationProps, DBNavigationState } from './model';
import { cls } from '../../utils';
import { handleSubNavigationPosition } from '../../utils/navigation';
import DBButton from '../button/button.lite';

useMetadata({});

useDefaultProps<DBNavigationProps>({});

export default function DBNavigation(props: DBNavigationProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const menuRef = useRef<HTMLMenuElement | any>(null);

	const state = useStore<DBNavigationState>({
		showScrollLeft: false,
		showScrollRight: false,
		_variant: undefined,
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
			if (!props.variant || props.variant === 'popover') {
				handleSubNavigationPosition(menuRef);
			}
			state.evaluateScrollButtons(menuRef);
		}
	});

	onUpdate(() => {
		if (_ref) {
			const element = _ref as HTMLElement;
			let endVariant = props.variant ?? 'popover';

			const parentClassList = element.parentElement?.classList;
			const shell = element.closest('.db-shell');
			const shellDesktopPosition = shell?.getAttribute(
				'data-control-panel-desktop-position'
			);
			const shellSubNaviDesktopPosition = shell?.getAttribute(
				'data-sub-navigation-desktop-position'
			);
			const requiresPopover =
				(shellDesktopPosition === 'top' &&
					parentClassList?.contains(
						'db-control-panel-desktop-scroll-container'
					)) ||
				(shellSubNaviDesktopPosition === 'top' &&
					parentClassList?.contains('db-sub-navigation-container'));

			if (requiresPopover) {
				endVariant = 'popover';
			}

			state._variant = endVariant;
		}
	}, [_ref, props.variant]);

	onUpdate(() => {
		if (menuRef && state._variant) {
			if (!state._variant || state._variant === 'popover') {
				handleSubNavigationPosition(menuRef);
			} else if (state._variant === 'tree') {
				for (const navItem of Array.from(
					(menuRef as HTMLElement).querySelectorAll(
						'.db-navigation-item, .db-navigation-item-group'
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
		}
	}, [menuRef, state._variant]);

	return (
		<nav
			ref={_ref}
			id={props.id}
			aria-labelledby={props.labelledBy}
			data-variant={state._variant}
			class={cls('db-navigation', props.className)}>
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
