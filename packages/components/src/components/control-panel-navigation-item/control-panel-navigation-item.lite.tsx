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
		_tooltip: undefined,
		_savedHref: undefined
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

	// When disabled, remove href from anchor to avoid invalid aria-disabled on
	// an element with implicit role "link". Without href the <a> becomes generic
	// and we can safely use aria-disabled. Restore href when re-enabled.
	onUpdate(() => {
		if (_ref) {
			const listElement = _ref as HTMLLIElement;
			const anchor = listElement.querySelector('a');
			if (anchor) {
				if (getBoolean(props.disabled, 'disabled')) {
					// Save href before removing so we can restore it later
					const currentHref = anchor.getAttribute('href');
					if (currentHref !== null) {
						state._savedHref = currentHref;
					}
					anchor.removeAttribute('href');
					anchor.setAttribute('tabindex', '-1');
					anchor.setAttribute('aria-disabled', 'true');
				} else {
					// Restore saved href when no longer disabled
					if (state._savedHref) {
						anchor.setAttribute('href', state._savedHref!);
						state._savedHref = undefined;
					}
					anchor.removeAttribute('tabindex');
					anchor.removeAttribute('aria-disabled');
				}
			}
		}
	}, [_ref, props.disabled]);

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-navigation-item', props.className)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon, 'showIcon')}
			data-active={getBooleanAsString(props.active, 'active')}
			aria-disabled={getBooleanAsString(props.disabled, 'disabled')}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
			<Slot name="endSlot"></Slot>
			<DBTooltip placement="right" delay="slow">
				{state._tooltip ?? DEFAULT_LABEL}
			</DBTooltip>
		</li>
	);
}
