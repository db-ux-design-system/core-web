import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_ID } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import {
	cls,
	getBooleanAsString,
	delay as utilsDelay,
	uuid
} from '../../utils';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';
import { handleFixedPopover } from '../../utils/floating-components';
import { DBTooltipProps, DBTooltipState } from './model';

useMetadata({});
useDefaultProps<DBTooltipProps>({});

export default function DBTooltip(props: DBTooltipProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		mId: DEFAULT_ID,
		mInitialized: false,
		mDocumentScrollListenerCallbackId: undefined,
		mObserver: undefined,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		},
		handleEscape: (event: any) => {
			if (
				(!event || event.key === 'Escape') &&
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
				// This is a workaround for angular
				void utilsDelay(() => {
					// Due to race conditions we need to check for _ref again
					if (_ref) {
						handleFixedPopover(
							_ref,
							parent,
							(props.placement as unknown as string) ?? 'bottom'
						);
					}
				}, 1);
			}
		},
		handleDocumentScroll: (event: any, parent?: HTMLElement) => {
			if (event?.target?.contains && event?.target?.contains(_ref)) {
				state.handleAutoPlacement(parent);
			}
		},
		handleLeave(): void {
			if (state.mDocumentScrollListenerCallbackId) {
				new DocumentScrollListener().removeCallback(
					state.mDocumentScrollListenerCallbackId!
				);
			}

			state.mObserver?.unobserve(state.getParent());
		},
		handleEnter(parent?: HTMLElement): void {
			state.mDocumentScrollListenerCallbackId =
				new DocumentScrollListener().addCallback((event) =>
					state.handleDocumentScroll(event, parent)
				);
			state.handleAutoPlacement(parent);
			state.mObserver?.observe(state.getParent());
		}
	});

	onMount(() => {
		state.mId = props.id ?? props._id ?? 'tooltip-' + uuid();
		state.mInitialized = true;
	});

	onUpdate(() => {
		if (props.id || props._id) {
			state.mId = props.id ?? props._id;
		}
	}, [props.id, props._id]);

	onUpdate(() => {
		if (_ref && state.mInitialized && state.mId) {
			const parent = state.getParent();
			if (parent) {
				state.handleAutoPlacement(parent);
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
				parent.dataset['hasTooltip'] = 'true';

				if (props.variant === 'label') {
					parent.setAttribute('aria-labelledby', state.mId);
				} else {
					parent.setAttribute('aria-describedby', state.mId);
				}
			}

			if (
				typeof window !== 'undefined' &&
				'IntersectionObserver' in window
			) {
				state.mObserver = new IntersectionObserver((payload) => {
					const entry = payload.find(
						({ target }) => target === state.getParent()
					);
					if (entry && !entry.isIntersecting) {
						state.handleEscape(false);
					}
				});
			}

			state.mInitialized = false;
		}
	}, [_ref, state.mInitialized, state.mId]);

	// jscpd:ignore-end

	// TODO: Shall we check if only <span>, <p> or direct text was passed as children?
	return (
		<i
			role="tooltip"
			aria-hidden="true"
			ref={_ref}
			class={cls('db-tooltip', props.className)}
			id={state.mId}
			data-emphasis={props.emphasis}
			data-wrap={getBooleanAsString(props.wrap)}
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
