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
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import { connectCloseButton, syncDialogOpenState } from '../../utils/dialog';
// BEGIN: dialog ponyfill
import {
	commandForCloseFallback,
	escapeCloseFallback,
	markClosedByFallback
} from '../../utils/dialog/ponyfill';
import { DocumentKeydownListener } from '../../utils/document-keydown-listener';
// END: dialog ponyfill
import { DBDrawerProps, DBDrawerState } from './model';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const state = useStore<DBDrawerState>({
		initialized: false,
		_id: undefined,
		// BEGIN: dialog ponyfill
		// Id of the document keydown callback (Escape fallback) while open.
		_documentKeydownListenerCallbackId: undefined,
		// END: dialog ponyfill
		resetId: () => {
			state._id =
				props.id ?? props.propOverrides?.id ?? 'db-drawer-' + uuid();
		},
		isNotModal: () => {
			return (
				props.position === 'absolute' ||
				props.backdrop === 'none' ||
				props.variant === 'inside'
			);
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
		// Wires the close button on mount for Vue/Stencil (lazy watchers); see connectCloseButton.
		connectCloseButton(_ref);
		// BEGIN: dialog ponyfill
		markClosedByFallback(_ref);
		// A non-modal drawer does not trap focus, so an Escape can be dispatched to
		// an element outside the drawer and would never reach a listener on the
		// <dialog> itself. Register the Escape fallback at document scope for the
		// mounted lifetime; escapeCloseFallback no-ops while the drawer is closed,
		// modal, or when closedby is supported.
		state._documentKeydownListenerCallbackId =
			new DocumentKeydownListener().addCallback((event) =>
				escapeCloseFallback(event, _ref)
			);
		// END: dialog ponyfill
		state.handleDialogOpen();
		state.initialized = true;
	});

	// BEGIN: dialog ponyfill
	onUnMount(() => {
		if (state._documentKeydownListenerCallbackId) {
			// Non-null assertion: the guard above narrows this, but in the Angular
			// signal output the state getter is re-invoked here and loses the
			// narrowing, so assert to satisfy removeCallback(id: string).
			new DocumentKeydownListener().removeCallback(
				state._documentKeydownListenerCallbackId!
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

	// Observes `open` only: `backdrop` is deliberately excluded (see handleDialogOpen).
	onUpdate(() => {
		state.handleDialogOpen();
	}, [props.open]);

	onUpdate(() => {
		if (_ref && state.initialized && props.position === 'absolute') {
			const refElement = _ref as HTMLDialogElement;
			let parent = refElement.parentElement;
			// Skip host elements with display:contents (Angular/Stencil)
			// which do not create a containing block.
			if (parent && getComputedStyle(parent).display === 'contents') {
				parent = parent.parentElement;
			}
			if (parent) {
				const pos = getComputedStyle(parent).position;
				if (pos === 'static') {
					parent.style.position = 'relative';
				}
			}
		}
	}, [_ref, state.initialized, props.position]);

	return (
		<dialog
			id={props.id ?? props.propOverrides?.id ?? state._id}
			ref={_ref}
			class="db-drawer"
			onCancel={(event: Event) => state.handleCancel(event)}
			onClose={(event) => state.handleClose(event)}
			// BEGIN: dialog ponyfill
			onClick={(event) => state.handleClick(event)}
			// END: dialog ponyfill
			data-position={props.position}
			data-backdrop={props.backdrop}
			data-direction={props.direction}
			data-variant={props.variant}
			closedby={props.backdrop === 'none' ? 'closerequest' : 'any'}>
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
