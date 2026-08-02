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
					// When closedby is not supported, we set closedby to "none"
					// and must preventDefault to avoid an instant close without
					// exit animation. Our JS fallback handles the close.
					if (!supportsClosedBy()) {
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
			if (!_ref) return;

			const dialogOpen = getBoolean(props.open, 'open');
			if (dialogOpen && !_ref.open) {
				if (state.isNotModal()) {
					_ref.show();
				} else {
					_ref.showModal();
				}
			} else if (!dialogOpen && _ref.open) {
				_ref.close();
			}
		},
		handleCancel: () => {
			if (props.onCancel) {
				props.onCancel();
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
			let parent = refElement.parentElement;
			// Skip custom element hosts (Angular/Stencil) which have
			// display:contents and pass attributes to child elements.
			if (parent && parent.tagName.includes('-')) {
				parent = parent.parentElement;
			}
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
			onCancel={() => state.handleCancel()}
			onClick={(event) => state.handleClose(event)}
			onMouseDown={(event) => state.handleBackdropPointerDown(event)}
			onKeyDown={(event) => state.handleClose(event)}
			data-position={props.position}
			data-backdrop={props.backdrop}
			data-direction={props.direction}
			data-variant={props.variant}
			closedby={
				props.closedby ||
				(props.backdrop === 'none' ? 'closerequest' : 'any')
			}>
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
