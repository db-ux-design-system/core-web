import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBDrawerState, DBDrawerProps } from './model';
import { DBButton } from '../button';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: [{ name: 'open', type: 'TwoOptions' }]
	}
});

export default function DBDrawer(props: DBDrawerProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const dialogContainerRef = useRef<HTMLDivElement>(null);
	const state = useStore<DBDrawerState>({
		handleClose: (event: any) => {
			if (
				event === 'close' ||
				(event.target.nodeName === 'DIALOG' && !props.noBackdrop)
			) {
				if (props.onClose) {
					props.onClose();
				}
			}
		},
		handleDialogOpen: () => {
			if (dialogRef) {
				if (props.open && !dialogRef.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = false;
					}
					if (props.noBackdrop) {
						dialogRef.show();
					} else {
						dialogRef.showModal();
					}
				}
				if (!props.open && dialogRef.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = true;
					}
					setTimeout(() => {
						if (dialogContainerRef) {
							dialogContainerRef.hidden = false;
						}
						dialogRef?.close();
					}, 401);
				}
			}
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
		state.handleDialogOpen();
	});

	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	return (
		<dialog
			ref={dialogRef}
			class="db-drawer"
			onClick={(event) => {
				state.handleClose(event);
			}}
			data-backdrop={!props.noBackdrop}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<article
				ref={dialogContainerRef}
				class={
					'db-drawer-container' +
					(props.className ? ' ' + props.className : '')
				}
				data-size={props.size}
				data-width={props.width}
				data-direction={props.direction}
				data-rounded={props.rounded}>
				<header class="db-drawer-header">
					<Slot name="drawer-header" />
					<Show when={props.withCloseButton}>
						<DBButton
							className="button-close-drawer"
							id="button-close-drawer"
							icon="close"
							variant="transparent"
							onClick={() => state.handleClose('close')}>
							Close Drawer
						</DBButton>
					</Show>
				</header>
				<div class="db-drawer-content">{props.children}</div>
			</article>
		</dialog>
	);
}
