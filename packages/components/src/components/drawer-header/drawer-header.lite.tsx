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
		setAriaLabelledBy() {
			if (_ref) {
				const dialog = (_ref as HTMLElement).closest('dialog');
				if (dialog) {
					dialog.setAttribute('aria-labelledby', state._headingId);
				}
			}
		},
		removeAriaLabelledBy() {
			if (_ref) {
				const dialog = (_ref as HTMLElement).closest('dialog');
				if (
					dialog &&
					dialog.getAttribute('aria-labelledby') === state._headingId
				) {
					dialog.removeAttribute('aria-labelledby');
				}
			}
		}
	});

	onMount(() => {
		state.setAriaLabelledBy();
	});

	onUnMount(() => {
		state.removeAriaLabelledBy();
	});

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-drawer-header', props.className)}>
			<header id={state._headingId} class="db-drawer-header-container">
				<Slot name="startSlot" />
				<Show when={props.text} else={props.children}>
					<h2>{props.text}</h2>
				</Show>
			</header>
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
