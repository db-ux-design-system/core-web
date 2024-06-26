import {
	onMount,
	onUpdate,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls, handleDataOutside, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTooltip(props: DBTooltipProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		_id: DEFAULT_ID,
		initialized: false,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		},
		handleAutoPlacement: () => {
			if (ref) handleDataOutside(ref);
		}
	});

	onMount(() => {
		state._id = props.id || 'tooltip-' + uuid();
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			let parent = ref.parentElement;

			if (parent && parent.localName.includes('tooltip')) {
				// Angular workaround
				parent = parent.parentElement;
			}

			if (parent) {
				['mouseenter', 'focus'].forEach((event) => {
					parent.addEventListener(event, () =>
						state.handleAutoPlacement()
					);
				});
				parent.setAttribute('data-has-tooltip', 'true');
				parent.setAttribute('aria-describedby', state._id);
			}

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
			id={state._id}
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
