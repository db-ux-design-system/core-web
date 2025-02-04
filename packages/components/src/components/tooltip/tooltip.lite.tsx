import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls, getBooleanAsString, handleDataOutside, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});
useDefaultProps<DBTooltipProps>({});

export default function DBTooltip(props: DBTooltipProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		_id: DEFAULT_ID,
		initialized: false,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		},
		handleAutoPlacement: () => {
			if (_ref) handleDataOutside(_ref);
		}
	});

	onMount(() => {
		state._id = props.id || 'tooltip-' + uuid();
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized && state._id) {
			let parent = _ref.parentElement;

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
	}, [_ref, state.initialized]);

	// jscpd:ignore-end

	// TODO: Shall we check if only <span>, <p> or direct text was passed as children?
	return (
		<i
			role="tooltip"
			aria-hidden="true"
			ref={_ref}
			class={cls('db-tooltip', props.className)}
			id={state._id}
			data-emphasis={props.emphasis}
			data-animation={getBooleanAsString(props.animation ?? true)}
			data-delay={props.delay}
			data-width={props.width}
			data-show-arrow={getBooleanAsString(props.showArrow ?? true)}
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
