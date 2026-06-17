import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants';
import { cls } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBDrawerHeaderProps } from './model';

useMetadata({});

useDefaultProps<DBDrawerHeaderProps>({});

export default function DBDrawerHeader(props: DBDrawerHeaderProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	return (
		<header
			ref={_ref}
			id={props.id}
			class={cls('db-drawer-header', props.className)}>
			<div class="db-drawer-header-container">
				<Slot name="startSlot" />
				<Show when={props.text}>{props.text}</Show>
				{props.children}
			</div>
			<Slot name="endSlot" />
			<DBButton
				data-action="close"
				id={props.closeButtonId}
				icon="cross"
				variant="ghost"
				type="button"
				noText>
				{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				<DBTooltip>
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBTooltip>
			</DBButton>
		</header>
	);
}
