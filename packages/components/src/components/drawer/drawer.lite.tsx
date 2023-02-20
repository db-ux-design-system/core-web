import {
	onMount,
	onUpdate,
	Show,
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
	const state = useStore<DBDrawerState>({
		handleClose: (event: any) => {
			if (event === 'close' || event.target.nodeName === 'DIALOG') {
				if (props.onClose) {
					props.onClose();
				}
			}
		},
		handleDialogOpen: () => {
			if (dialogRef) {
				if (props.open && !dialogRef.open) {
					dialogRef.showModal();
				}
				if (!props.open && dialogRef.open) {
					dialogRef.close();
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
			}}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<div
				class={
					'db-drawer-container' +
					(props.className ? ' ' + props.className : '')
				}>
				<div class="db-drawer-header">
					<DBButton
						id="button-close-drawer"
						icon="close"
						variant="ghost"
						onClick={() => state.handleClose('close')}>
						Burger Menu
					</DBButton>
				</div>
				<div class="db-drawer-content">{props.children}</div>
			</div>
		</dialog>
	);
}
