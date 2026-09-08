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
		_headingId: 'db-drawer-header-heading-' + uuid(),
		_dialogId: '',
		// Links the heading to the dialog
		_resolveDialog() {
			const dialog = resolveClosestDialog(_ref);
			state._dialogId = getClosestDialogId(_ref) ?? '';
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
				data-action="close"
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
