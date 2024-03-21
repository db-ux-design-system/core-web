import {
	onMount,
	onUpdate,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls, isInView } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTooltip(props: DBTooltipProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		initialized: false,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		},
		handleAutoPlacement: () => {
			if (ref) {
				const inView = isInView(ref);
				Object.entries(inView).forEach(([pos, value]) => {
					if (value) {
						ref.setAttribute(
							`data-outside-${pos === 'left' || pos === 'right' ? 'vx' : 'vy'}`,
							pos
						);
					}
				});
			}
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			ref.parentElement.addEventListener('mouseenter', () =>
				state.handleAutoPlacement()
			);
			ref.parentElement.addEventListener('focus', () =>
				state.handleAutoPlacement()
			);

			state.initialized = false;
		}
	}, [ref, state.initialized]);

	// jscpd:ignore-end

	// TODO: Shall we check if only <span>, <p> or direct text was passed as children?
	return (
		<i
			role="tooltip"
			ref={ref}
			className={cls('db-tooltip', props.className)}
			id={props.id}
			data-emphasis={props.emphasis}
			data-animation={props.animation}
			data-delay={props.delay}
			data-width={props.width}
			data-variant={props.variant}
			data-placement={props.placement}
			// TODO: clarify this attribute and we need to set it statically
			data-gap="true"
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</i>
	);
}
