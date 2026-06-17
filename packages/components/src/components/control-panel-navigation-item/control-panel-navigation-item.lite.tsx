import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_LABEL } from '../../shared/constants';
import { cls, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBControlPanelNavigationItemProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelNavigationItemProps>({});

export default function DBControlPanelNavigationItem(
	props: DBControlPanelNavigationItemProps
) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-navigation-item', props.className)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}
			data-active={getBooleanAsString(props.active)}
			aria-disabled={getBooleanAsString(props.disabled)}>
			<Slot name="startSlot"></Slot>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
			<Slot name="endSlot"></Slot>
			<DBTooltip placement="right" delay="slow">
				{props.tooltip ?? DEFAULT_LABEL}
			</DBTooltip>
		</li>
	);
}
