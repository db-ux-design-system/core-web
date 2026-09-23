import {
	onMount,
	onUnMount,
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
	commandForCloseFallback,
	escapeCloseFallback,
	markClosedByFallback
} from '../../utils/dialog/ponyfill';
import { DocumentKeydownListener } from '../../utils/document-keydown-listener';
// END: dialog ponyfill
import { DBDialogProps, DBDialogState } from './model';

useMetadata({});

useDefaultProps<DBDialogProps>({});

export default function DBDialog(props: DBDialogProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const state = useStore<DBDialogState>({
		// Left undefined at init so the uuid() fallback runs only on the client
		// (in onMount, via resetId), not during SSR. Generating it at render time
		// would produce different server/client ids and force a hydration mismatch
		// (React warns and may keep stale server markup). Matches the id handling
		// in the other components and in DBDialogHeader.
		_id: undefined,
		// BEGIN: dialog ponyfill
		// Id of the document keydown callback (Escape fallback) while open.
		_documentKeydownListenerCallbackId: undefined,
		// END: dialog ponyfill
		resetId: () => {
			state._id =
				props.id ?? props.propOverrides?.id ?? 'db-dialog-' + uuid();
		},
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClick: (event: ClickEvent<HTMLDialogElement> | any) => {
			if (props.onClick) {
				props.onClick(event);
			}
			commandForCloseFallback(event, _ref);
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
		state.resetId();
		connectCloseButton(_ref);
		// BEGIN: dialog ponyfill
		markClosedByFallback(_ref);
		// A non-modal dialog does not trap focus, so an Escape can be dispatched to
		// an element outside the dialog and would never reach a listener on the
		// <dialog> itself. Register the Escape fallback at document scope for the
		// mounted lifetime; escapeCloseFallback no-ops while the dialog is closed,
		// modal, or when closedby is supported.
		state._documentKeydownListenerCallbackId =
			new DocumentKeydownListener().addCallback((event) =>
				escapeCloseFallback(event, _ref)
			);
		// END: dialog ponyfill
		state.handleDialogOpen();
	});

	// BEGIN: dialog ponyfill
	onUnMount(() => {
		if (state._documentKeydownListenerCallbackId) {
			new DocumentKeydownListener().removeCallback(
				state._documentKeydownListenerCallbackId
			);
			state._documentKeydownListenerCallbackId = undefined;
		}
	});
	// END: dialog ponyfill

	// Re-run on every id-dependency change, unguarded: resetId() falls back to
	// the generated id when the consumer clears an explicit one, so state._id
	// never stays pinned to a stale consumer id (which would leave a duplicate
	// id in the document and let commandfor resolve to the wrong element).
	onUpdate(() => {
		state.resetId();
	}, [props.id, props.propOverrides?.id]);

	// Wire the close button's commandfor once the (possibly generated) id has
	// landed on the <dialog>. Runs here rather than from the header because the
	// header mounts before this id is set.
	onUpdate(() => {
		connectCloseButton(_ref);
	}, [state._id]);

	// Intentionally observes `open` only, not `backdrop`. Modality (showModal
	// vs show) is an open-time decision of the native <dialog>; there is no way
	// to switch it while open without close()+reopen, which would flicker,
	// reset focus and fire an extra close/cancel. So a `backdrop` change on an
	// open dialog updates only its appearance, and the modality applied at open
	// time stays until the consumer closes and reopens.
	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	return (
		<dialog
			id={props.id ?? props.propOverrides?.id ?? state._id}
			ref={_ref}
			class={cls('db-dialog', props.className)}
			onCancel={(event: Event) => state.handleCancel(event)}
			onClose={(event) => state.handleClose(event)}
			// BEGIN: dialog ponyfill
			onClick={(event) => state.handleClick(event)}
			// END: dialog ponyfill
			data-backdrop={props.backdrop}
			data-container-size={props.containerSize}
			closedby={props.backdrop === 'none' ? 'closerequest' : 'any'}>
			<Slot name="header" />
			<div class="db-dialog-content">{props.children}</div>
			<Slot name="footer" />
		</dialog>
	);
}
