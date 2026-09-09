import {
	onMount,
	onUnMount,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls, uuid } from '../../utils';
import {
	getClosestDialogId,
	removeDialogAriaLabelledBy,
	resolveClosestDialog,
	setDialogAriaLabelledBy
} from '../../utils/dialog';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBDrawerHeaderProps, DBDrawerHeaderState } from './model';

useMetadata({});

useDefaultProps<DBDrawerHeaderProps>({
	closeButtonText: DEFAULT_CLOSE_BUTTON
});

export default function DBDrawerHeader(props: DBDrawerHeaderProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	const state = useStore<DBDrawerHeaderState>({
		// Left undefined at init so the uuid() runs only on the client (in
		// onMount, via _resolveDialog), not during SSR. Generating it at render
		// time would produce different server/client ids, and after hydration
		// aria-labelledby would point at the stale server id -> no accessible name.
		_headingId: undefined,
		_dialogId: '',
		// Declared in the store so Mitosis emits it as state (otherwise a member
		// only assigned later, never initialized, is undeclared in the Vue output).
		_dialog: undefined,
		// Links the heading to the dialog and captures its id as the close button elements command target.
		_resolveDialog() {
			const dialog = resolveClosestDialog(_ref);
			state._dialogId = getClosestDialogId(_ref) ?? '';
			// Generate the heading id and wire aria-labelledby together, both on
			// the client, so the heading element and the dialog reference stay in sync.
			state._headingId = 'db-drawer-header-heading-' + uuid();
			// Hold the element itself for cleanup: the drawer may have no `id`,
			// in which case _dialogId is empty but aria-labelledby is still set.
			state._dialog = dialog;
			setDialogAriaLabelledBy(dialog, state._headingId);
		},
		removeAriaLabelledBy() {
			removeDialogAriaLabelledBy(state._dialog, state._headingId);
		}
	});

	onMount(() => {
		state._resolveDialog();
	});

	onUnMount(() => {
		state.removeAriaLabelledBy();
	});

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-drawer-header', props.className)}>
			<Slot name="startSlot" />
			<div id={state._headingId} class="db-drawer-header-content">
				<Show when={props.text} else={props.children}>
					<h2>{props.text}</h2>
				</Show>
			</div>
			<Slot name="endSlot" />
			<DBButton
				commandfor={state._dialogId}
				command="request-close"
				id={props.closeButtonId}
				icon="cross"
				variant="ghost"
				type="button"
				noText>
				{props.closeButtonText}
				<DBTooltip>{props.closeButtonText}</DBTooltip>
			</DBButton>
		</div>
	);
}
