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
import { ClickEvent } from '../../shared/model';
import {
	cls,
	getBooleanAsString,
	delay as utilsDelay,
	uuid
} from '../../utils';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';
import { handleFixedPopover } from '../../utils/floating-components';
import { IntersectionObserverListener } from '../../utils/intersection-observer-listener';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
import { DBTooltipProps, DBTooltipState } from './model';

useMetadata({});
useDefaultProps<DBTooltipProps>({});

export default function DBTooltip(props: DBTooltipProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		_id: undefined,
		initialized: false,
		_documentScrollListenerCallbackId: undefined,
		_intersectionObserverCallbackId: undefined,
		_resizeObserverCallbackId: undefined,
		_attachedParent: undefined,
		_attachedId: undefined,
		_activeTriggerCount: 0,
		_boundListeners: [],
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
						handleFixedPopover(_ref, parent);
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
			// Multiple triggers (hover + focus) can be active at once. Only tear
			// down the shared scroll callback/observer once the last one leaves.
			state._activeTriggerCount = Math.max(
				(state._activeTriggerCount ?? 0) - 1,
				0
			);
			if ((state._activeTriggerCount ?? 0) > 0) {
				return;
			}

			if (state._documentScrollListenerCallbackId) {
				new DocumentScrollListener().removeCallback(
					state._documentScrollListenerCallbackId!
				);
				state._documentScrollListenerCallbackId = undefined;
			}

			if (state._resizeObserverCallbackId) {
				new ResizeObserverListener().unobserve(
					state._resizeObserverCallbackId!
				);
				state._resizeObserverCallbackId = undefined;
			}

			if (state._intersectionObserverCallbackId) {
				new IntersectionObserverListener().unobserve(
					state._intersectionObserverCallbackId!
				);
				state._intersectionObserverCallbackId = undefined;
			}
		},
		handleEnter(parent?: HTMLElement): void {
			// Register the shared scroll callback only for the first active
			// trigger; a second enter (e.g. focusin after mouseenter) must not
			// orphan the first callback.
			state._activeTriggerCount = (state._activeTriggerCount ?? 0) + 1;
			if (state._activeTriggerCount === 1) {
				state._documentScrollListenerCallbackId =
					new DocumentScrollListener().addCallback((event) =>
						state.handleDocumentScroll(event, parent)
					);
				state._resizeObserverCallbackId =
					new ResizeObserverListener().observe(
						document.documentElement,
						() => state.handleAutoPlacement(parent)
					);
				state._intersectionObserverCallbackId =
					new IntersectionObserverListener().observe(
						state.getParent(),
						(entry) => {
							if (!entry.isIntersecting) {
								state.handleEscape(false);
							}
						}
					);
			}
			state.handleAutoPlacement(parent);
		},
		resetIds: () => {
			state._id =
				props.id ?? props.propOverrides?.id ?? 'tooltip-' + uuid();
		},

		// Detaches all listeners/observers added by this tooltip. Used by onUnMount to avoid stale closures firing after the tooltip is gone.
		_detachListeners: () => {
			const callbackId = state._documentScrollListenerCallbackId;
			if (callbackId) {
				new DocumentScrollListener().removeCallback(callbackId);
				state._documentScrollListenerCallbackId = undefined;
			}

			if (state._resizeObserverCallbackId) {
				new ResizeObserverListener().unobserve(
					state._resizeObserverCallbackId!
				);
				state._resizeObserverCallbackId = undefined;
			}

			if (state._intersectionObserverCallbackId) {
				new IntersectionObserverListener().unobserve(
					state._intersectionObserverCallbackId!
				);
				state._intersectionObserverCallbackId = undefined;
			}

			state._activeTriggerCount = 0;

			const bound = state._boundListeners ?? [];
			bound.forEach((entry) => {
				entry.parent.removeEventListener(entry.type, entry.fn);
			});
			state._boundListeners = [];

			// Remove attributes this tooltip set on its parent, but only while
			// they still belong to this tooltip (avoid clobbering another one).
			const parent = state._attachedParent;
			if (parent) {
				const attachedId = state._attachedId ?? state._id;
				// Only remove data-has-tooltip when no other .db-tooltip
				// siblings remain inside the same parent.
				const remainingTooltips =
					parent.querySelectorAll('.db-tooltip');
				const otherTooltipsExist = Array.from(remainingTooltips).some(
					(el) => el !== _ref
				);
				if (
					parent.dataset['hasTooltip'] === 'true' &&
					!otherTooltipsExist
				) {
					delete parent.dataset['hasTooltip'];
				}
				if (parent.getAttribute('aria-labelledby') === attachedId) {
					parent.removeAttribute('aria-labelledby');
				}
				if (parent.getAttribute('aria-describedby') === attachedId) {
					parent.removeAttribute('aria-describedby');
				}
				state._attachedParent = undefined;
				state._attachedId = undefined;
			}
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
				state.handleAutoPlacement(parent);

				const enterListener = () => state.handleEnter(parent);
				const leaveListener = () => state.handleLeave();
				const keyDownListener = (event: any) =>
					state.handleEscape(event);

				parent.addEventListener('mouseenter', enterListener);
				parent.addEventListener('focusin', enterListener);
				parent.addEventListener('keydown', keyDownListener);
				parent.addEventListener('mouseleave', leaveListener);
				parent.addEventListener('focusout', leaveListener);

				state._boundListeners = [
					...(state._boundListeners ?? []),
					{ parent, type: 'mouseenter', fn: enterListener },
					{ parent, type: 'focusin', fn: enterListener },
					{ parent, type: 'keydown', fn: keyDownListener },
					{ parent, type: 'mouseleave', fn: leaveListener },
					{ parent, type: 'focusout', fn: leaveListener }
				];

				parent.dataset['hasTooltip'] = 'true';

				if (props.variant === 'label') {
					parent.setAttribute('aria-labelledby', state._id);
				} else {
					parent.setAttribute('aria-describedby', state._id);
				}

				state._attachedParent = parent;
				state._attachedId = state._id;
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
