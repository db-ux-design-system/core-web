import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ClickEvent } from '../../shared/model';
import {
	cls,
	getBoolean,
	getBooleanAsString,
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
		_id: props.id || props.propOverrides?.id || 'db-drawer-' + uuid(),
		isNotModal: () => {
			return (
				props.position === 'absolute' ||
				props.backdrop === 'none' ||
				props.variant === 'inside'
			);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClick: (event: ClickEvent<HTMLDialogElement>) => {
			if (!event) return;

			const isCloseButton = Boolean(
				(event.target as HTMLElement)?.closest?.(
					'[command="request-close"]'
				)
			);

			if (isCloseButton && !supportsCommandFor()) {
				event.stopPropagation();
				(_ref as HTMLDialogElement).requestClose();
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event?: any) => {
			if (props.onClose) {
				props.onClose(event);
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
				_ref.requestClose();
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleCancel: (event: any) => {
			if (props.onCancel) {
				props.onCancel(event);
			}
		}
	});

	onMount(() => {
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
			id={state._id}
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
