import {
	onMount,
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
	getBoolean,
	getBooleanAsString,
	isKeyboardEvent,
	supportsClosedBy
} from '../../utils';
import {
	closeDialogWithTransition,
	supportsAllowDiscreteDisplayAndOverlayTransition
} from '../../utils/allow-discrete-ponyfill';
import { DBDrawerProps, DBDrawerState } from './model';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const state = useStore<DBDrawerState>({
		initialized: false,
		backdropPointerDown: false,
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (
			event?:
				| ClickEvent<HTMLButtonElement | HTMLDialogElement>
				| GeneralKeyboardEvent<HTMLDialogElement>
				| void
		) => {
			if (!event) return;

			if (isKeyboardEvent<HTMLButtonElement | HTMLDialogElement>(event)) {
				if (event.key === 'Escape') {
					// When closedby is not supported or display transitions with
					// allow-discrete are missing (e.g. Firefox), we set closedby
					// to "none" and must preventDefault to avoid an instant close
					// without exit animation. Our JS fallback handles the close.
					if (
						!supportsClosedBy() ||
						!supportsAllowDiscreteDisplayAndOverlayTransition()
					) {
						event.preventDefault();
					}

					if (props.onClose) {
						props.onClose(event);
					}
				}
			} else {
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
					if (isCloseButton) {
						event.stopPropagation();
					}

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
				if (dialogOpen && !_ref.open) {
					if (state.isNotModal()) {
						_ref.show();
					} else {
						_ref.showModal();
					}
				}
				if (dialogOpen && _ref.open) {
					// Cancel any pending ponyfill close if reopened
					delete (_ref as HTMLElement).dataset[
						'closingAllowDiscretePonyfill'
					];
				}
				if (!dialogOpen && _ref.open) {
					closeDialogWithTransition(_ref as HTMLDialogElement);
				}
			}
		},
		handleDisplayTransitionFallback: () => {
			/* Browsers that lack allow-discrete display transitions (e.g. Firefox)
			   would close the dialog instantly without an exit animation. Override
			   closedby to "none" so our JS fallback handles closing. */
			if (_ref && !supportsAllowDiscreteDisplayAndOverlayTransition()) {
				(_ref as HTMLDialogElement).setAttribute('closedby', 'none');
			}
		}
	});

	onMount(() => {
		state.handleDialogOpen();
		state.initialized = true;
		state.handleDisplayTransitionFallback();
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
			data-variant={props.variant}
			closedby="any">
			<article
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
