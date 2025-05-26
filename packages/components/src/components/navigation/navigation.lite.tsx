import {
	onMount,
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
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;

			state.showScrollLeft = needsScroll && tList.scrollLeft > 1;
			state.showScrollRight =
				needsScroll &&
				tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
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
			handleSubNavigationPosition(menuRef);
			state.evaluateScrollButtons(menuRef);
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (menuRef && state.initialized) {
			handleSubNavigationPosition(menuRef);
			state.evaluateScrollButtons(menuRef);
		}
	}, [menuRef, state.initialized]);

	return (
		<nav
			ref={_ref}
			id={props.id}
			aria-labelledby={props.labelledBy}
			class={cls('db-navigation', props.className)}>
			<Show when={state.showScrollLeft}>
				<DBButton
					class="overflow-scroll-left-button"
					variant="ghost"
					icon="chevron_left"
					type="button"
					noText
					onClick={() => state.scroll(true)}>
					Scroll left
				</DBButton>
			</Show>
			<menu
				ref={menuRef}
				onScroll={() => {
					state.onScroll();
				}}>
				{props.children}
			</menu>
			<Show when={state.showScrollRight}>
				<DBButton
					class="overflow-scroll-right-button"
					variant="ghost"
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
