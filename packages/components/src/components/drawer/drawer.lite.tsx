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
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import { syncDialogOpenState } from '../../utils/dialog';
// BEGIN: dialog ponyfill
import {
	markClosedByFallback,
	requestCloseFallback
} from '../../utils/dialog-ponyfill';
// END: dialog ponyfill
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
		// BEGIN: dialog ponyfill
		// Closes the drawer when the native command cannot do it: no commandfor support, or a target that no longer resolves.
		// Shared by DBDialog and DBDrawer.
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClick: (event: ClickEvent<HTMLDialogElement> | any) => {
			requestCloseFallback(event, _ref);
		},
		// END: dialog ponyfill
		handleDialogOpen: () => {
			syncDialogOpenState(
				_ref,
				getBoolean(props.open, 'open'),
				state.isNotModal()
			);
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
		}
	});

	onMount(() => {
		// BEGIN: dialog ponyfill
		markClosedByFallback(_ref);
		// END: dialog ponyfill
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
