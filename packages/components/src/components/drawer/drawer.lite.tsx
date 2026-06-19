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
				const isCloseButton =
					(event.target as any)?.nodeName === 'BUTTON' &&
					(event.target as any)?.dataset?.action === 'close';

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
				if (dialogOpen && !_ref.open) {
					if (dialogContainerRef) {
						(dialogContainerRef as HTMLDivElement).removeAttribute(
							'data-transition'
						);
					}
					if (state.isNotModal()) {
						_ref.show();
					} else {
						// Set the closedby attribute imperatively: the JSX
						// dialog type does not know this attribute yet, and it
						// only applies to modal dialogs. "any" enables native
						// light dismiss (backdrop click / Esc).
						_ref.setAttribute('closedby', 'any');
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
					void delay(() => {
						_ref?.close();
					}, 401);
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
				data-width={props.width}
				data-direction={props.direction}
				data-rounded={getBooleanAsString(props.rounded, 'rounded')}>
				<Slot name="header" />
				<div class="db-drawer-content">{props.children}</div>
				<Slot name="footer" />
			</article>
		</dialog>
	);
}
