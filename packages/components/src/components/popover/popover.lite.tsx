import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, delay as utilsDelay } from '../../utils';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';
import { handleFixedPopover } from '../../utils/floating-components';
import { DBPopoverProps, DBPopoverState } from './model';

useMetadata({});
useDefaultProps<DBPopoverProps>({});

export default function DBPopover(props: DBPopoverProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		initialized: false,
		isExpanded: false,
		_documentScrollListenerCallbackId: undefined,
		_observer: undefined,
		handleEscape: (event: any) => {
			if (!event || event.key === 'Escape') {
				// TODO: Recursive for any child
				for (const child of Array.from(_ref.children)) {
					(child as HTMLElement).blur();
				}
			}
		},
		handleAutoPlacement: () => {
			if (!_ref) return;
			const article = _ref.querySelector('article');
			if (article) {
				// This is a workaround for angular
				utilsDelay(() => {
					handleFixedPopover(article, _ref);
				}, 1);
			}
		},
		handleDocumentScroll: (event: any) => {
			if (event?.target?.contains && event?.target?.contains(_ref)) {
				state.handleAutoPlacement();
			}
		},
		handleEnter(): void {
			state.isExpanded = true;
			state._documentScrollListenerCallbackId =
				new DocumentScrollListener().addCallback((event) =>
					state.handleDocumentScroll(event)
				);
			state.handleAutoPlacement();
			const child = state.getTrigger();
			if (child) {
				state._observer?.observe(child);
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleLeave: (event?: any) => {
			const element = event?.target as HTMLElement;
			const parent = element?.parentNode;
			if (
				!parent ||
				(element.parentNode.querySelector(':focus') !== element &&
					element.parentNode.querySelector(':focus-within') !==
						element &&
					element.parentNode.querySelector(':hover') !== element)
			) {
				state.isExpanded = false;

				if (state._documentScrollListenerCallbackId) {
					new DocumentScrollListener().removeCallback(
						state._documentScrollListenerCallbackId!
					);
				}

				const child = state.getTrigger();
				if (child) {
					state._observer?.unobserve(child);
				}
			}
		},
		getTrigger: (): Element | null => {
			if (_ref) {
				const children: Element[] = Array.from(_ref.children);
				if (children.length >= 2) {
					const firstChild = children[0];
					if (firstChild.tagName.includes('-')) {
						// this is a workaround for custom angular components
						return firstChild.children?.length > 0
							? firstChild.children[0]
							: null;
					} else {
						return firstChild;
					}
				}
			}

			return null;
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			state.initialized = false;
			const child = state.getTrigger();
			if (child) {
				child.ariaHasPopup = 'true';
			}
			state.handleAutoPlacement();

			_ref.addEventListener('keydown', (event: any) =>
				state.handleEscape(event)
			);
			['mouseenter', 'focusin'].forEach((event) => {
				_ref.addEventListener(event, () => state.handleEnter());
			});
			['mouseleave', 'focusout'].forEach((event) => {
				_ref.addEventListener(event, () => state.handleLeave());
			});

			if (
				typeof window !== 'undefined' &&
				'IntersectionObserver' in window
			) {
				state._observer = new IntersectionObserver((payload) => {
					const entry = payload.find(
						({ target }) => target === state.getTrigger()
					);
					if (entry && !entry.isIntersecting) {
						state.handleEscape(false);
					}
				});
			}
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (_ref) {
			const child = state.getTrigger();
			if (child) {
				child.ariaExpanded = Boolean(state.isExpanded).toString();
			}
		}
	}, [_ref, state.isExpanded]);

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-popover', props.className)}>
			<Slot name="trigger" />
			<article
				class="db-popover-content"
				data-spacing={props.spacing}
				data-gap={getBooleanAsString(props.gap)}
				data-animation={getBooleanAsString(props.animation ?? true)}
				data-open={getBooleanAsString(props.open)}
				data-delay={props.delay}
				data-width={props.width}
				data-placement={props.placement}>
				{props.children}
			</article>
		</div>
	);
}
