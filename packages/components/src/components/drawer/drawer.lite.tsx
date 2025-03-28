import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBDrawerProps, DBDrawerState } from './model';
import DBButton from '../button/button.lite';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls, delay, getBooleanAsString } from '../../utils';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | null>(null);
	const dialogContainerRef = useRef<HTMLDivElement | null>(null);
	const state = useStore<DBDrawerState>({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event: any) => {
			if (event.key === 'Escape') {
				event.preventDefault();
			}

			if (
				event === 'close' ||
				event.key === 'Escape' ||
				(event.target.nodeName === 'DIALOG' &&
					event.type === 'click' &&
					props.backdrop !== 'none')
			) {
				if (props.onClose) {
					props.onClose(event);
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
			onClick={(event) => {
				state.handleClose(event);
			}}
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
						onClick={() => state.handleClose('close')}>
						{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
					</DBButton>
				</header>
				<div class="db-drawer-content">{props.children}</div>
			</article>
		</dialog>
	);
}
