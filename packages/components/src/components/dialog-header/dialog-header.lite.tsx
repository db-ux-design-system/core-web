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
		_headingId: 'db-dialog-header-heading-' + uuid(),
		_dialogId: '',
		// Links the heading to the dialog and captures its id as the close button's command target.
		_resolveDialog() {
			state._dialogId = getClosestDialogId(_ref) ?? '';
			setDialogAriaLabelledBy(
				resolveClosestDialog(_ref),
				state._headingId
			);
		},
		removeAriaLabelledBy() {
			removeDialogAriaLabelledBy(state._dialogId, state._headingId);
		}
	});

	onMount(() => {
		state._resolveDialog();
	});

	onUnMount(() => {
		state.removeAriaLabelledBy();
	});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id || props.propOverrides?.id}
			class={cls('db-dialog-header', props.className)}>
			<header id={state._headingId} class="db-dialog-header-container">
				<Slot name="startSlot" />
				<Show when={props.text} else={props.children}>
					<h2>{props.text}</h2>
				</Show>
			</header>
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
