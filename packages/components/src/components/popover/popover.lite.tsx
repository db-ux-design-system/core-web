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
		isExpanded: false,
		handleAutoPlacement: () => {
			state.isExpanded = true;
			if (!ref) return;
			const article = ref.querySelector('article');
			if (!article) return;
			handleDataOutside(article);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleLeave: (event: any) => {
			const element = event.target as HTMLElement;
			const parent = element.parentNode;
			if (
				!parent ||
				(element.parentNode.querySelector(':focus') !== element &&
					element.parentNode.querySelector(':focus-within') !==
						element &&
					element.parentNode.querySelector(':hover') !== element)
			) {
				state.isExpanded = false;
			}
		},
		getTrigger: () => {
			if (ref) {
				const children: Element[] = Array.from(ref.children);
				if (children.length >= 2) {
					const firstChild = children[0];
					if (firstChild.tagName.includes('-')) {
						// this is a workaround for custom angular components
						return firstChild.children?.length > 0
							? firstChild.children[0]
							: undefined;
					} else {
						return firstChild;
					}
				}
			}

			return undefined;
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			const child = state.getTrigger();
			if (child) {
				child.ariaHasPopup = 'true';
			}
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	onUpdate(() => {
		if (ref) {
			const child = state.getTrigger();
			if (child) {
				child.ariaExpanded = state.isExpanded.toString();
			}
		}
	}, [ref, state.isExpanded]);

	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-popover', props.className)}
			onFocus={() => state.handleAutoPlacement()}
			onBlur={(event: FocusEvent) => state.handleLeave(event)}
			onMouseEnter={() => state.handleAutoPlacement()}
			onMouseLeave={(event: MouseEvent) => state.handleLeave(event)}>
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
