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
import {
	cls,
	getBoolean,
	getBooleanAsString,
	supportsClosedBy,
	supportsCommandFor,
	uuid
} from '../../utils';
import { DBDrawerProps, DBDrawerState } from './model';

useMetadata({});

useDefaultProps<DBDrawerProps>({});

export default function DBDrawer(props: DBDrawerProps) {
	const _ref = useRef<HTMLDialogElement | any>(null);
	const state = useStore<DBDrawerState>({
		initialized: false,
		_id: 'db-drawer-' + uuid(),
		isNotModal: () => {
			return (
				props.position === 'absolute' ||
				props.backdrop === 'none' ||
				props.variant === 'inside'
			);
		},
		// Closes the drawer when the native command cannot do it: no commandfor support, or a target that no longer resolves.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClick: (event: ClickEvent<HTMLDialogElement> | any) => {
			const button = (event?.target as HTMLElement)?.closest?.(
				'[command="request-close"]'
			);
			if (!button) return;

			const target = button.getAttribute('commandfor');
			if (
				!supportsCommandFor() ||
				!target ||
				!document.querySelector('dialog#' + target)
			) {
				(_ref as HTMLDialogElement).requestClose();
			}
		},
		handleDialogOpen: () => {
			if (!_ref) return;

			const dialogOpen = getBoolean(props.open, 'open');
			if (dialogOpen && !_ref.open) {
				if (state.isNotModal()) {
					_ref.show();
				} else {
					_ref.showModal();
				}
			} else if (!dialogOpen && _ref.open) {
				_ref.close();
			}
		},
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
		},
		// Marks the dialog for the CSS backdrop-click fallback, which extends the close button's hit area. Supporting browsers stay clean.
		// TODO: Remove after `closedby` is evergreen regarding our browserlist
		_setClosedByFallback: () => {
			if (_ref && !supportsClosedBy()) {
				(_ref as HTMLDialogElement).dataset['closedby'] =
					'not-supported';
			}
		}
	});

	onMount(() => {
		state._setClosedByFallback();
		state.handleDialogOpen();
		state.initialized = true;
	});

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
			onClick={(event) => state.handleClick(event)}
			onClose={(event) => state.handleClose(event)}
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
