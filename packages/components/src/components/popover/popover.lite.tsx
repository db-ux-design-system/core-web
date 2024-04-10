import {
	onMount,
	onUpdate,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBPopoverProps, DBPopoverState } from './model';
import { cls, handleDataOutside } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPopover(props: DBPopoverProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		initialized: false,
		handleAutoPlacement: () => {
			if (!ref) return;
			const article = ref.querySelector('article');
			if (!article) return;
			handleDataOutside(article);
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			const children: Element[] = Array.from(ref.children);
			if (children.length >= 2) {
				children[0].ariaHasPopup = 'true';
			}
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-popover', props.className)}
			onFocus={() => state.handleAutoPlacement()}
			onMouseEnter={() => state.handleAutoPlacement()}>
			<Slot name="trigger" />
			<article
				class="db-popover-content"
				data-spacing={props.spacing}
				data-gap={props.gap}
				data-animation={props.animation}
				data-open={props.open}
				data-delay={props.delay}
				data-width={props.width}
				data-placement={props.placement}>
				{props.children}
			</article>
		</div>
	);
}
