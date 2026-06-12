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
		_id: DEFAULT_ID,
		initialized: false,
		_documentScrollListenerCallbackId: undefined,
		_observer: undefined,
		_listenersAttached: false,
		_attachedParent: null,
		_enterListener: undefined,
		_leaveListener: undefined,
		_keyDownListener: undefined,
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
			if (state._documentScrollListenerCallbackId) {
				new DocumentScrollListener().removeCallback(
					state._documentScrollListenerCallbackId!
				);
			}

			state._observer?.unobserve(state.getParent());
		},
		handleEnter(parent?: HTMLElement): void {
			state._documentScrollListenerCallbackId =
				new DocumentScrollListener().addCallback((event) =>
					state.handleDocumentScroll(event, parent)
				);
			state.handleAutoPlacement(parent);
			state._observer?.observe(state.getParent());
		},
		resetIds: () => {
			state._id =
				props.id ?? props.propOverrides?.id ?? 'tooltip-' + uuid();
		},

		// Detaches listeners/observers/data attributes added by this tooltip from its parent. Used by onUnMount and when re-attaching to a different parent.
		_detachListeners: () => {
			const parent = state._attachedParent;

			if (state._documentScrollListenerCallbackId) {
				new DocumentScrollListener().removeCallback(
					state._documentScrollListenerCallbackId
				);
				state._documentScrollListenerCallbackId = undefined;
			}

			state._observer?.disconnect();
			state._observer = undefined;

			if (parent && state._listenersAttached) {
				const enter = state._enterListener;
				const leave = state._leaveListener;
				const keyDown = state._keyDownListener;
				if (enter) {
					parent.removeEventListener('mouseenter', enter);
					parent.removeEventListener('focusin', enter);
				}
				if (leave) {
					parent.removeEventListener('mouseleave', leave);
					parent.removeEventListener('focusout', leave);
				}
				if (keyDown) {
					parent.removeEventListener('keydown', keyDown);
				}

				if (parent.dataset['hasTooltip']) {
					delete parent.dataset['hasTooltip'];
				}
				if (state._id) {
					if (parent.getAttribute('aria-labelledby') === state._id) {
						parent.removeAttribute('aria-labelledby');
					}
					if (parent.getAttribute('aria-describedby') === state._id) {
						parent.removeAttribute('aria-describedby');
					}
				}
			}

			state._enterListener = undefined;
			state._leaveListener = undefined;
			state._keyDownListener = undefined;
			state._attachedParent = null;
			state._listenersAttached = false;
		}
	});

	onMount(() => {
		state.resetIds();
		state.initialized = true;
	});

	onUpdate(() => {
		if (props.id ?? props.propOverrides?.id) {
			state.resetIds();
		}
	}, [props.id, props.propOverrides?.id]);

	onUpdate(() => {
		if (_ref && state.initialized && state._id) {
			const parent = state.getParent();
			if (parent) {
				if (
					state._listenersAttached &&
					state._attachedParent !== parent
				) {
					state._detachListeners();
				}

				if (!state._listenersAttached) {
					const enterListener = () => state.handleEnter(parent);
					const leaveListener = () => state.handleLeave();
					const keyDownListener = (event: any) =>
						state.handleEscape(event);

					state._enterListener = enterListener;
					state._leaveListener = leaveListener;
					state._keyDownListener = keyDownListener;
					state._attachedParent = parent;
					state._listenersAttached = true;

					parent.addEventListener('mouseenter', enterListener);
					parent.addEventListener('focusin', enterListener);
					parent.addEventListener('keydown', keyDownListener);
					parent.addEventListener('mouseleave', leaveListener);
					parent.addEventListener('focusout', leaveListener);
				}

				state.handleAutoPlacement(parent);
				parent.dataset['hasTooltip'] = 'true';

				if (props.variant === 'label') {
					parent.setAttribute('aria-labelledby', state._id);
				} else {
					parent.setAttribute('aria-describedby', state._id);
				}
			}

			if (
				typeof window !== 'undefined' &&
				'IntersectionObserver' in window &&
				!state._observer
			) {
				state._observer = new IntersectionObserver((payload) => {
					const entry = payload.find(
						({ target }) => target === state.getParent()
					);
					if (entry && !entry.isIntersecting) {
						state.handleEscape(false);
					}
				});
			}

			state.initialized = false;
		}
	}, [_ref, state.initialized, state._id]);

	// Remove parent listeners/observers on unmount so stale closures don't fire after the tooltip is gone.
	onUnMount(() => {
		state._detachListeners();
	});

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
			data-wrap={getBooleanAsString(props.wrap, 'wrap')}
			data-animation={getBooleanAsString(
				props.animation ?? true,
				'animation'
			)}
			data-delay={props.delay}
			data-width={props.width}
			data-show-arrow={getBooleanAsString(
				props.showArrow ?? true,
				'showArrow'
			)}
			data-placement={props.placement}
			// TODO: clarify this attribute and we need to set it statically
			data-gap="true"
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</i>
	);
}
