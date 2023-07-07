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
import { DEFAULT_CLOSE_BUTTON, DEFAULT_ID } from '../../shared/constants';
import classNames from 'classnames';
import { uuid } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: [{ name: 'open', type: 'TwoOptions' }]
	}
});

export default function DBDrawer(props: DBDrawerProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const dialogContainerRef = useRef<HTMLDivElement>(null);
	const state = useStore<DBDrawerState>({
		_id: DEFAULT_ID,
		handleClose: (event: any) => {
			if (event.key === 'Escape') {
				event.preventDefault();
			}

			if (
				event === 'close' ||
				event.key === 'Escape' ||
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
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		state._id = props.id || 'drawer-' + uuid();
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
			id={state._id}
			ref={dialogRef}
			class="db-drawer"
			onClick={(event) => {
				state.handleClose(event);
			}}
			onKeyDown={(event) => state.handleClose(event)}
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
				data-spacing={props.spacing}
				data-width={props.width}
				data-direction={props.direction}
				data-rounded={props.rounded}>
				<header class="db-drawer-header">
					<Slot name="drawer-header" />
					<Show when={props.withCloseButton}>
						<DBButton
							className="button-close-drawer"
							id={props.closeButtonId}
							icon="close"
							variant="text"
							noText
							onClick={() => state.handleClose('close')}>
							{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
						</DBButton>
					</Show>
				</header>
				<div class="db-drawer-content">{props.children}</div>
			</article>
		</dialog>
	);
}
