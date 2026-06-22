import {
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_LABEL } from '../../shared/constants';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import {
	DBControlPanelNavigationItemProps,
	DBControlPanelNavigationItemState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelNavigationItemProps>({});

export default function DBControlPanelNavigationItem(
	props: DBControlPanelNavigationItemProps
) {
	const _ref = useRef<HTMLLIElement | any>(null);

	const state = useStore<DBControlPanelNavigationItemState>({
		_tooltip: undefined
	});

	onUpdate(() => {
		if (props.tooltip) {
			state._tooltip = props.tooltip;
		} else if (props.text) {
			state._tooltip = props.text;
		} else if (_ref) {
			const listElement = _ref as HTMLLIElement;
			const anchor = listElement.querySelector('a');
			if (anchor) {
				state._tooltip = anchor.textContent;
			}
		}
	}, [_ref, props.tooltip, props.text]);

	// Add tabIndex=-1 for anchor element if disabled
	onUpdate(() => {
		if (_ref) {
			const listElement = _ref as HTMLLIElement;
			const anchor = listElement.querySelector('a');
			if (anchor) {
				anchor.setAttribute(
					'tabindex',
					getBoolean(props.disabled, 'disabled') ? '-1' : '0'
				);
			}
		}
	}, [_ref, props.disabled]);

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
				{state._tooltip ?? DEFAULT_LABEL}
			</DBTooltip>
		</li>
	);
}
