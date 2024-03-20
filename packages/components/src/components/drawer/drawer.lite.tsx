import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBDrawerProps, DBDrawerState } from './model';
import { DBButton } from '../button';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: [{ name: 'open', type: 'TwoOptions' }]
	}
});

export default function DBDrawer(props: DBDrawerProps) {
	const ref = useRef<HTMLDialogElement>(null);
	const dialogContainerRef = useRef<HTMLDivElement>(null);
	const state = useStore<DBDrawerState>({
		handleClose: (event: any) => {
			if (event.key === 'Escape') {
				event.preventDefault();
			}

			if (
				event === 'close' ||
				event.key === 'Escape' ||
				(event.target.nodeName === 'DIALOG' &&
					props.backdrop !== 'none')
			) {
				if (props.onClose) {
					props.onClose();
				}
			}
		},
		handleDialogOpen: () => {
			if (ref) {
				if (props.open && !ref.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = false;
					}
					if (props.backdrop === 'none') {
						ref.show();
					} else {
						ref.showModal();
					}
				}
				if (!props.open && ref.open) {
					if (dialogContainerRef) {
						dialogContainerRef.hidden = true;
					}
					setTimeout(() => {
						if (dialogContainerRef) {
							dialogContainerRef.hidden = false;
						}
						ref?.close();
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
			ref={ref}
			class="db-drawer"
			onClick={(event) => {
				state.handleClose(event);
			}}
			onKeyDown={(event) => state.handleClose(event)}
			data-backdrop={props.backdrop}>
			<article
				ref={dialogContainerRef}
				class={cls('db-drawer-container', props.className)}
				data-spacing={props.spacing}
				data-width={props.width}
				data-direction={props.direction}
				data-rounded={props.rounded}>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text">
						<Slot name="drawer-header" />
					</div>
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
