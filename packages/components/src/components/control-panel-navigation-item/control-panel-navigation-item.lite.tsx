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
		_savedHref: undefined,
		_role: undefined,
		_attributeObserver: undefined,
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
	});

	// jscpd:ignore-start
	onUpdate(() => {
		if (!state.initialized || !_ref || state._attributeObserver) return;

		// Read initial role value synchronously in case parent set it before mount
		const initialRole =
			(_ref as HTMLElement).getAttribute('role') ?? undefined;
		if (initialRole !== state._role) {
			state._role = initialRole;
		}

		// Observe role attribute set imperatively by the parent navigation
		// and persist it in state so frameworks re-apply it after reconciliation.
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.attributeName === 'role') {
					const newRole =
						(_ref as HTMLElement).getAttribute('role') ?? undefined;
					if (newRole !== state._role) {
						state._role = newRole;
					}
				}
			}
		});
		observer.observe(_ref, {
			attributes: true,
			attributeFilter: ['role']
		});
		state._attributeObserver = observer;
	}, [_ref, state.initialized]);

	onUnMount(() => {
		state._attributeObserver?.disconnect();
		state._attributeObserver = undefined;
	});
	// jscpd:ignore-end

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

	// When active, set aria-current="page" on the contained anchor so
	// assistive tech announces the current page link properly.
	onUpdate(() => {
		if (_ref) {
			const listElement = _ref as HTMLLIElement;
			const anchor = listElement.querySelector('a');
			if (anchor) {
				if (getBoolean(props.active, 'active')) {
					anchor.setAttribute('aria-current', 'page');
				} else {
					anchor.removeAttribute('aria-current');
				}
			}
		}
	}, [_ref, props.active]);

	return (
		<li
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			role={state._role}
			class={cls('db-control-panel-navigation-item', props.className)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon, 'showIcon')}
			data-active={getBooleanAsString(props.active, 'active')}
			aria-disabled={getBooleanAsString(props.disabled, 'disabled')}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
			<div class="db-control-panel-navigation-item-end-slot-container">
				<Slot name="endSlot"></Slot>
			</div>
			<Show when={state._tooltip}>
				<DBTooltip placement="right" delay="slow">
					{state._tooltip}
				</DBTooltip>
			</Show>
		</li>
	);
}
