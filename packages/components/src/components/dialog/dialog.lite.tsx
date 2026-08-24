import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ClickEvent, GeneralEvent } from '../../shared/model';
import { cls, getBoolean, uuid } from '../../utils';
import { syncDialogOpenState } from '../../utils/dialog';
// BEGIN: dialog ponyfill
import {
	markClosedByFallback,
	requestCloseFallback
} from '../../utils/dialog-ponyfill';
// END: dialog ponyfill
import { DBDialogProps, DBDialogState } from './model';

useMetadata({});

useDefaultProps<DBDialogProps>({});

export default function DBDialog(props: DBDialogProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const state = useStore<DBDialogState>({
		_id: 'db-dialog-' + uuid(),
		isNotModal: () => {
			return props.backdrop === 'none';
		},
		handleDialogOpen: () => {
			syncDialogOpenState(
				_ref,
				getBoolean(props.open, 'open'),
				state.isNotModal()
			);
		},
		// BEGIN: dialog ponyfill
		// Closes the drawer when the native command cannot do it: no commandfor support, or a target that no longer resolves.
		// Shared by DBDialog and DBDrawer.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClick: (event: ClickEvent<HTMLDialogElement> | any) => {
			requestCloseFallback(event, _ref);
		},
		// END: dialog ponyfill
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleCancel: (event: GeneralEvent<HTMLDialogElement> | any) => {
			if (props.onCancel) {
				props.onCancel(event);
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event?: any) => {
			if (props.onClose) {
				props.onClose(event);
			}
		}
	});

	onMount(() => {
		// BEGIN: dialog ponyfill
		markClosedByFallback(_ref);
		// END: dialog ponyfill
		state.handleDialogOpen();
	});

	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	return (
		<dialog
			id={props.id || props.propOverrides?.id || state._id}
			ref={_ref}
			class={cls('db-dialog', props.className)}
			onCancel={(event: Event) => state.handleCancel(event)}
			onClick={(event) => state.handleClick(event)}
			onClose={(event) => state.handleClose(event)}
			data-backdrop={props.backdrop}
			data-container-size={props.containerSize}
			closedby={props.backdrop === 'none' ? 'closerequest' : 'any'}>
			<Slot name="header" />
			<div class="db-dialog-content">{props.children}</div>
			<Slot name="footer" />
		</dialog>
	);
}
