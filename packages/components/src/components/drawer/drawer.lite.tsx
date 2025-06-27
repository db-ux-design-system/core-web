import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { ClickEvent, GeneralKeyboardEvent } from '../../shared/model';
import { cls, delay, getBooleanAsString, isKeyboardEvent } from '../../utils';
import DBButton from '../button/button.lite';
import { DBDrawerProps, DBDrawerState } from './model';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const dialogContainerRef = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBDrawerState>({
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

				if (
					(event.target as any)?.nodeName === 'DIALOG' &&
					event.type === 'click' &&
					props.backdrop !== 'none'
				) {
					if (props.onClose) {
						props.onClose(event);
					}
				}
			}
		},
		handleDialogOpen: () => {
			if (_ref) {
				const open = Boolean(props.open);
				if (open && !_ref.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = false;
					}
					if (
						props.backdrop === 'none' ||
						props.variant === 'inside'
					) {
						_ref.show();
					} else {
						_ref.showModal();
					}
				}
				if (!open && _ref.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = true;
					}
					delay(() => {
						if (dialogContainerRef) {
							dialogContainerRef.hidden = false;
						}
						_ref?.close();
					}, 401);
				}
			}
		}
	});

	onMount(() => {
		state.handleDialogOpen();
	});

	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	return (
		<dialog
			id={props.id}
			ref={_ref}
			class="db-drawer"
			onClick={(event) => state.handleClose(event)}
			onKeyDown={(event) => state.handleClose(event)}
			data-backdrop={props.backdrop}
			data-variant={props.variant}>
			<article
				ref={dialogContainerRef}
				class={cls('db-drawer-container', props.className)}
				data-spacing={props.spacing}
				data-width={props.width}
				data-direction={props.direction}
				data-rounded={getBooleanAsString(props.rounded)}>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text">
						<Slot name="drawerHeader" />
					</div>
					<DBButton
						class="button-close-drawer"
						id={props.closeButtonId}
						icon="cross"
						variant="ghost"
						noText
						onClick={(event) => state.handleClose(event, true)}>
						{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
					</DBButton>
				</header>
				<div class="db-drawer-content">{props.children}</div>
			</article>
		</dialog>
	);
}
