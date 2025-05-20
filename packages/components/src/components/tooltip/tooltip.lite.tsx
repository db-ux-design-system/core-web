import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls, getBooleanAsString, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';
import { handleFixedPopover } from '../../utils/floating-components';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';

useMetadata({});
useDefaultProps<DBTooltipProps>({});

export default function DBTooltip(props: DBTooltipProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		_id: DEFAULT_ID,
		initialized: false,
		_documentScrollListenerCallbackId: undefined,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		},
		handleEscape: (event: any) => {
			if (
				event.key === 'Escape' &&
				_ref &&
				getComputedStyle(_ref).visibility === 'visible'
			) {
				state.getParent().blur();
			}
		},
		getParent(): HTMLElement {
			let parent = _ref.parentElement;

			if (parent && parent.localName.includes('tooltip')) {
				// Angular workaround
				parent = parent.parentElement;
			}

			return parent;
		},
		handleAutoPlacement: (parent?: HTMLElement) => {
			if (!parent) return;
			if (_ref) {
				handleFixedPopover(
					_ref,
					parent,
					(props.placement as unknown as string) ?? 'bottom'
				);
			}
		},
		handleDocumentScroll: (event: any, parent?: HTMLElement) => {
			if (event?.target?.contains && event?.target?.contains(_ref)) {
				state.handleAutoPlacement(parent);
			}
		},
		handleLeave(): void {
			if (state._documentScrollListenerCallbackId) {
				new DocumentScrollListener().removeCallback(
					state._documentScrollListenerCallbackId!
				);
			}
		},
		handleEnter(parent?: HTMLElement): void {
			state._documentScrollListenerCallbackId =
				new DocumentScrollListener().addCallback((event) =>
					state.handleDocumentScroll(event, parent)
				);
			state.handleAutoPlacement(parent);
		}
	});

	onMount(() => {
		state._id = props.id || 'tooltip-' + uuid();
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized && state._id) {
			const parent = state.getParent();
			if (parent) {
				['mouseenter', 'focusin'].forEach((event) => {
					parent.addEventListener(event, () =>
						state.handleEnter(parent)
					);
				});
				parent.addEventListener('keydown', (event) =>
					state.handleEscape(event)
				);
				['mouseleave', 'focusout'].forEach((event) => {
					parent.addEventListener(event, () => state.handleLeave());
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
