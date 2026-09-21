import {
	onUnMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import type { GeneralEvent } from '../../shared/model';
import {
	cls,
	getBoolean,
	getBooleanAsString,
	delay as utilsDelay
} from '../../utils';
import { DocumentClickListener } from '../../utils/document-click-listener';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';
import { handleFixedPopover } from '../../utils/floating-components';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
import type {
	DBBreadcrumbTruncationItemProps,
	DBBreadcrumbTruncationItemState
} from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbTruncationItemProps>({
	label: 'Show more breadcrumbs'
});

export default function DBBreadcrumbTruncationItem(
	props: DBBreadcrumbTruncationItemProps
) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const detailsRef = useRef<HTMLDetailsElement | any>(null);

	const state = useStore<DBBreadcrumbTruncationItemState>({
		_documentClickListenerCallbackId: undefined,
		_documentScrollListenerCallbackId: undefined,
		_resizeObserverCallbackId: undefined,
		handleToggle: (event: GeneralEvent<HTMLDetailsElement>) => {
			if (
				event.target instanceof HTMLDetailsElement &&
				event.target.open
			) {
				// Popover opened: close on outside click, reposition on
				// scroll/resize, and place it within the viewport.
				state._documentClickListenerCallbackId =
					new DocumentClickListener().addCallback((closeEvent) =>
						state.handleDocumentClose(closeEvent)
					);
				state._documentScrollListenerCallbackId =
					new DocumentScrollListener().addCallback(() =>
						state.handleAutoPlacement()
					);
				state._resizeObserverCallbackId =
					new ResizeObserverListener().observe(
						document.documentElement,
						() => state.handleAutoPlacement()
					);
				state.handleAutoPlacement();
			} else {
				state.removeListeners();
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleDocumentClose: (event: any) => {
			if (event) {
				// stencil wraps the pointer event into a custom event detail
				const target = useTarget({
					stencil:
						typeof event.detail === 'number'
							? event.target
							: event.detail?.target,
					default: event.target
				});

				if (detailsRef?.open && !detailsRef.contains(target)) {
					detailsRef.open = false;
				}
			}
		},
		handleAutoPlacement: () => {
			if (detailsRef) {
				const popover = detailsRef.querySelector(
					'.db-breadcrumb-truncation-item-popover'
				);
				if (popover) {
					// Workaround so the DOM has settled (needed for Angular).
					void utilsDelay(() => {
						if (detailsRef) {
							handleFixedPopover({
								element: popover,
								parent: detailsRef,
								placement: props.placement ?? 'bottom',
								forceAbsolute: getBoolean(
									props.forceAbsolute,
									'forceAbsolute'
								)
							});
						}
					}, 1);
				}
			}
		},
		removeListeners: () => {
			if (state._documentClickListenerCallbackId) {
				new DocumentClickListener().removeCallback(
					state._documentClickListenerCallbackId!
				);
				state._documentClickListenerCallbackId = undefined;
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
		}
	});

	onUnMount(() => {
		state.removeListeners();
	});

	return (
		<li
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-breadcrumb-truncation-item', props.className)}>
			<details
				ref={detailsRef}
				/* @ts-expect-error details has a native onToggle event */
				onToggle={(event: GeneralEvent<HTMLDetailsElement>) =>
					state.handleToggle(event)
				}>
				{/* We cannot wrap summary for Angular, so it is a direct child. */}
				{/* The ellipsis is written as a JS escape so the source stays ASCII. */}
				<summary
					class="db-breadcrumb-truncation-item-toggle"
					aria-label={props.label}>
					<span aria-hidden="true">{'\u2026'}</span>
				</summary>
				<ol
					class="db-breadcrumb-truncation-item-popover"
					data-placement={props.placement ?? 'bottom'}
					data-animation={getBooleanAsString(
						props.animation ?? true,
						'animation'
					)}
					data-delay={props.delay}
					data-width={props.width}>
					{props.children}
				</ol>
			</details>
		</li>
	);
}
