import {
	onMount,
	onUnMount,
	onUpdate,
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
import { DBDialogHeaderProps, DBDialogHeaderState } from './model';

useMetadata({});

useDefaultProps<DBDialogHeaderProps>({
	closeButtonText: DEFAULT_CLOSE_BUTTON
});

export default function DBDialogHeader(props: DBDialogHeaderProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	// jscpd:ignore-start
	const state = useStore<DBDialogHeaderState>({
		// Left undefined at init so the uuid() runs only on the client (in
		// onMount, via _resolveDialog), not during SSR. Generating it at render
		// time would produce different server/client ids, and after hydration
		// aria-labelledby would point at the stale server id -> no accessible name.
		_headingId: undefined,
		_dialogId: '',
		// Declared in the store so Mitosis emits it as state (otherwise a member
		// only assigned later, never initialized, is undeclared in the Vue output).
		_dialog: undefined,
		// Watches the dialog aria-labelledby so a cleared consumer label is restored.
		_ariaObserver: undefined,
		// Links the heading to the dialog and captures its id as the close button command target.
		_resolveDialog() {
			const dialog = resolveClosestDialog(_ref);
			state._dialogId = getClosestDialogId(_ref) ?? '';
			// Generate the heading id and wire aria-labelledby together, both on
			// the client, so the heading element and the dialog reference stay in
			// sync. Use a local const for the id: a state setter is async in the
			// React output, so reading state._headingId right after assigning it
			// would still see the old (undefined) value.
			const headingId = 'db-dialog-header-heading-' + uuid();
			state._headingId = headingId;
			// Hold the element itself for cleanup, independent of the `id` used
			// for the close button `commandfor`.
			state._dialog = dialog;
			setDialogAriaLabelledBy(dialog, headingId);
		},
		removeAriaLabelledBy() {
			removeDialogAriaLabelledBy(state._dialog, state._headingId);
		}
	});

	onMount(() => {
		state._resolveDialog();
	});

	// The dialog's aria-labelledby is a consumer-forwarded (framework-controlled)
	// attribute, so a re-render can drop our heading id. Observe it and re-add our
	// token when missing; setDialogAriaLabelledBy is idempotent (only writes when
	// the token is absent), so it composes with consumer ids and never loops.
	// Guarded so it attaches once, after the dialog is resolved in onMount.
	onUpdate(() => {
		if (!state._dialog || state._ariaObserver) {
			return;
		}
		const observer = new MutationObserver(() => {
			setDialogAriaLabelledBy(state._dialog, state._headingId);
		});
		observer.observe(state._dialog, {
			attributes: true,
			attributeFilter: ['aria-labelledby']
		});
		state._ariaObserver = observer;
	}, [state._dialog]);

	onUnMount(() => {
		state._ariaObserver?.disconnect();
		state._ariaObserver = undefined;
		state.removeAriaLabelledBy();
	});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-dialog-header', props.className)}>
			<Slot name="startSlot" />
			<div id={state._headingId} class="db-dialog-header-content">
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
