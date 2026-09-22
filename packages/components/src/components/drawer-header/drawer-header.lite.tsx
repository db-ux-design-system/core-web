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
		// Watches the dialog aria-labelledby so a cleared consumer label is restored.
		_ariaObserver: undefined,
		// Links the heading to the dialog and captures its id as the close button elements command target.
		_resolveDialog() {
			const dialog = resolveClosestDialog(_ref);
			state._dialogId = getClosestDialogId(_ref) ?? '';
			/*
			 * Derive the heading id from the component own id (the same source as
			 * the wrapper id prop) with a -heading suffix, falling back to a uuid
			 * when none is set. Resolve it on the client (in onMount, via
			 * _resolveDialog): the uuid fallback is non-deterministic, so generating
			 * it at render time would differ between server and client and break
			 * aria-labelledby after hydration. Use a local const: a state setter is
			 * async in the React output, so reading state._headingId right after
			 * assigning would see the old value.
			 */
			const baseId = props.id ?? props.propOverrides?.id;
			const headingId = (baseId || uuid()) + '-heading';
			state._headingId = headingId;
			// Hold the element itself for cleanup: the drawer may have no `id`,
			// in which case _dialogId is empty but aria-labelledby is still set.
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

	// Observe the resolved dialog for consumer-driven attribute changes:
	// - aria-labelledby: it is framework-controlled and a re-render can drop our
	//   heading id, so re-add our token (setDialogAriaLabelledBy is idempotent -
	//   only writes when the token is absent - so it composes and never loops).
	// - aria-label: it is a naming override that beats aria-labelledby, so
	//   setDialogAriaLabelledBy skips our token while it is present; re-run when it
	//   toggles so our token is added back once the override is removed.
	// - id: the close button targets it via commandfor, so a changed dialog id
	//   must resync _dialogId, otherwise the button keeps a stale target and could
	//   resolve to a different dialog that reused the old id.
	// Guarded so it attaches once, after the dialog is resolved in onMount.
	onUpdate(() => {
		const dialog = state._dialog;
		if (!dialog || state._ariaObserver) {
			return;
		}
		const observer = new MutationObserver(() => {
			setDialogAriaLabelledBy(dialog, state._headingId);
			// Only assign when the id actually changed. The aria-labelledby branch
			// fires this observer (including our own token appends), and an
			// unconditional state assignment would re-render and reassert the
			// framework-controlled aria-labelledby, thrashing with the append.
			const nextDialogId = dialog.id ?? '';
			if (nextDialogId !== state._dialogId) {
				state._dialogId = nextDialogId;
			}
		});
		observer.observe(dialog, {
			attributes: true,
			attributeFilter: ['aria-labelledby', 'aria-label', 'id']
		});
		state._ariaObserver = observer;
	}, [state._dialog]);

	onUnMount(() => {
		state._ariaObserver?.disconnect();
		state._ariaObserver = undefined;
		state.removeAriaLabelledBy();
	});

	return (
		<header
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
		</header>
	);
}
