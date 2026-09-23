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
		// Declared in the store so Mitosis emits it as state (otherwise a member
		// only assigned later, never initialized, is undeclared in the Vue output).
		_dialog: undefined,
		// Links the heading to the dialog via aria-labelledby.
		_resolveDialog() {
			const dialog = resolveClosestDialog(_ref);
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
			// but aria-labelledby is still set on it.
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

	onUnMount(() => {
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
