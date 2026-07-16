import {
	onMount,
	onUnMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ClickEvent, GeneralKeyboardEvent } from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	isKeyboardEvent
} from '../../utils';
import { DBDrawerProps, DBDrawerState } from './model';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const dialogContainerRef = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBDrawerState>({
		initialized: false,
		backdropPointerDown: false,
		_closeTimeoutId: undefined as number | undefined,
		isNotModal: () => {
			return (
				props.position === 'absolute' ||
				props.backdrop === 'none' ||
				props.variant === 'inside'
			);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleBackdropPointerDown: (event: any) => {
			// Remember whether the pointer interaction started on the backdrop
			// (the DIALOG element itself) so we only close on a real backdrop
			// click and not when a drag started inside the content and ended
			// on the backdrop.
			state.backdropPointerDown =
				(event?.target as any)?.nodeName === 'DIALOG';
		},
		/**
		 * Handles close events from multiple sources:
		 * - Escape key
		 * - Backdrop click (when backdrop is enabled)
		 * - Any element inside the drawer with `[data-action="close"]` attribute
		 *   (e.g. the close button rendered by `DBDrawerHeader`)
		 * - Direct forceClose calls
		 *
		 * CONTRACT: The `DBDrawerHeader` component must render its close button
		 * with `data-action="close"` for this detection to work.
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (
			event?:
				| ClickEvent<HTMLButtonElement | HTMLDialogElement>
				| GeneralKeyboardEvent<HTMLDialogElement>
				| void,
			forceClose?: boolean
		) => {
			if (!event) return;

			if (isKeyboardEvent<HTMLButtonElement | HTMLDialogElement>(event)) {
				if (event.key === 'Escape') {
					event.preventDefault();

					if (props.onClose) {
						props.onClose(event);
					}
				}
			} else {
				if (forceClose) {
					event.stopPropagation();

					if (props.onClose) {
						props.onClose(event);
					}
				}

				const isBackdrop =
					(event.target as any)?.nodeName === 'DIALOG' &&
					event.type === 'click' &&
					props.backdrop !== 'none' &&
					state.backdropPointerDown;
				const isCloseButton = Boolean(
					(event.target as HTMLElement)?.closest?.(
						'[data-action="close"]'
					)
				);

				if (isBackdrop || isCloseButton) {
					if (props.onClose) {
						props.onClose(event);
					}
				}

				// Reset after handling the click so the next interaction
				// starts from a clean state.
				state.backdropPointerDown = false;
			}
		},
		handleDialogOpen: () => {
			if (_ref) {
				const dialogOpen = getBoolean(props.open, 'open');
				if (dialogOpen && state._closeTimeoutId !== undefined) {
					// Cancel any pending close timeout when reopening to prevent
					// a stale timer from closing the dialog after it was reopened.
					clearTimeout(state._closeTimeoutId);
					state._closeTimeoutId = undefined;
					// Restore the open transition state since the close was cancelled
					if (dialogContainerRef) {
						(dialogContainerRef as HTMLDivElement).dataset[
							'transition'
						] = 'open';
					}
				}
				if (dialogOpen && !_ref.open) {
					if (dialogContainerRef) {
						(dialogContainerRef as HTMLDivElement).removeAttribute(
							'data-transition'
						);
					}
					if (state.isNotModal()) {
						_ref.show();
					} else {
						_ref.showModal();
					}
					void delay(() => {
						if (dialogContainerRef) {
							(dialogContainerRef as HTMLDivElement).dataset[
								'transition'
							] = 'open';
						}
					}, 1);
				}
				if (!dialogOpen && _ref.open) {
					if (dialogContainerRef) {
						(dialogContainerRef as HTMLDivElement).dataset[
							'transition'
						] = 'close';
					}
					// Cancel any previously scheduled close to prevent double-close on rapid toggling
					if (state._closeTimeoutId !== undefined) {
						clearTimeout(state._closeTimeoutId);
					}

					// Read close delay from CSS (already accounts for prefers-reduced-motion)
					let closeDelay = 0;
					if (dialogContainerRef) {
						const durationStr = getComputedStyle(
							dialogContainerRef as HTMLDivElement
						)
							.getPropertyValue('--db-drawer-close-delay')
							.trim();
						const seconds = parseFloat(durationStr);
						if (seconds > 0) {
							closeDelay = seconds * 1000 + 1;
						}
					}

					state._closeTimeoutId = window.setTimeout(() => {
						_ref?.close();
						state._closeTimeoutId = undefined;
					}, closeDelay);
				}
			}
		}
	});

	onMount(() => {
		state.handleDialogOpen();
		state.initialized = true;
	});

	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	onUpdate(() => {
		if (_ref && state.initialized && props.position === 'absolute') {
			const refElement = _ref as HTMLDialogElement;
			const parent = refElement.parentElement;
			if (parent) {
				parent.style.position = 'relative';
			}
		}
	}, [_ref, state.initialized, props.position]);

	onUnMount(() => {
		// Cancel any pending close timeout to prevent stale references
		if (state._closeTimeoutId !== undefined) {
			clearTimeout(state._closeTimeoutId);
		}
		if (_ref && props.position === 'absolute') {
			const refElement = _ref as HTMLDialogElement;
			const parent = refElement.parentElement;
			if (parent) {
				parent.style.position = '';
			}
		}
	});

	return (
		<dialog
			id={props.id ?? props.propOverrides?.id}
			ref={_ref}
			class="db-drawer"
			onClick={(event) => state.handleClose(event)}
			onMouseDown={(event) => state.handleBackdropPointerDown(event)}
			onKeyDown={(event) => state.handleClose(event)}
			data-position={props.position}
			data-backdrop={props.backdrop}
			data-direction={props.direction}
			data-variant={props.variant}>
			<article
				ref={dialogContainerRef}
				class={cls('db-drawer-container', props.className)}
				data-container-size={props.containerSize}
				data-show-spacing={getBooleanAsString(
					props.showSpacing ?? true,
					'showSpacing'
				)}
				data-direction={props.direction}
				data-rounded={getBooleanAsString(props.rounded, 'rounded')}>
				<Slot name="header" />
				<div class="db-drawer-content">{props.children}</div>
				<Slot name="footer" />
			</article>
		</dialog>
	);
}
