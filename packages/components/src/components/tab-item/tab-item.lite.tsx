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
import { cls, getBoolean } from '../../utils';
import DBIcon from '../icon/icon.lite';
import type { DBTabItemProps, DBTabItemState } from './model';

useMetadata({});
useDefaultProps<DBTabItemProps>({});

export default function DBTabItem(props: DBTabItemProps) {
	const _ref = useRef<HTMLButtonElement | any>(null);

	const state = useStore<DBTabItemState>({
		internalActive: false,
		disabled: false,
		_observer: null,
		handleClick: (event: any) => {
			if (event && event.preventDefault) {
				event.preventDefault();
			}

			if (!state.disabled) {
				state.internalActive = true;
				if (props.onClick) {
					props.onClick(event);
				}
			}
		}
	});

	// Initialize state from props and observe 'aria-selected' to sync with external DOM changes
	onMount(() => {
		state.internalActive = getBoolean(props.active) || false;
		state.disabled = getBoolean(props.isDisabled) || false;

		if (_ref) {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.attributeName === 'aria-selected') {
						const isSelected =
							_ref.getAttribute('aria-selected') === 'true';
						if (state.internalActive !== isSelected) {
							state.internalActive = isSelected;
						}
					}
				});
			});

			observer.observe(_ref, {
				attributes: true,
				attributeFilter: ['aria-selected']
			});
			state._observer = observer;
		}
	});

	// Disconnect the oberserver
	onUnMount(() => {
		state._observer?.disconnect();
	});

	// Update internal active state when the active prop changes
	onUpdate(() => {
		if (props.active !== undefined) {
			state.internalActive = getBoolean(props.active) || false;
		}
	}, [props.active]);

	// Update disabled state when the isDisabled prop changes
	onUpdate(() => {
		if (props.isDisabled !== undefined) {
			state.disabled = getBoolean(props.isDisabled) || false;
		}
	}, [props.isDisabled]);

	// Manually sync DOM attributes with internal state to prevent framework conflicts
	onUpdate(() => {
		if (_ref) {
			const activeStr = state.internalActive ? 'true' : 'false';
			if (_ref.getAttribute('aria-selected') !== activeStr) {
				_ref.setAttribute('aria-selected', activeStr);
			}

			const tabIndexStr = state.internalActive ? '0' : '-1';
			if (_ref.getAttribute('tabindex') !== tabIndexStr) {
				_ref.setAttribute('tabindex', tabIndexStr);
			}

			const disabledStr = state.disabled ? 'true' : 'false';
			if (_ref.getAttribute('aria-disabled') !== disabledStr) {
				_ref.setAttribute('aria-disabled', disabledStr);
			}

			if (state.disabled) {
				if (!_ref.hasAttribute('disabled')) {
					_ref.setAttribute('disabled', '');
				}
			} else {
				if (_ref.hasAttribute('disabled')) {
					_ref.removeAttribute('disabled');
				}
			}
		}
	}, [state.internalActive, state.disabled]);

	return (
		<li
			class={cls(
				'db-tab-item',
				state.internalActive ? 'active' : '',
				props.className
			)}
			role="presentation">
			<button
				ref={_ref}
				type="button"
				role="tab"
				aria-label={getBoolean(props.noText) ? props.label : undefined}
				disabled={state.disabled ? true : undefined}
				id={props.id}
				class={cls(
					'db-tab-button',
					state.internalActive ? 'active' : ''
				)}
				onClick={(event) => state.handleClick(event)}>
				<Show when={props.icon && props.showIcon}>
					<DBIcon icon={props.icon} />
				</Show>
				<Show when={!props.noText}>
					<span class="db-tab-label">
						<Show when={props.label}>{props.label}</Show>
						<Show when={!props.label}>
							<Slot />
						</Show>
					</span>
				</Show>
				<Show when={props.iconTrailing && props.showIconTrailing}>
					<DBIcon icon={props.iconTrailing} />
				</Show>
			</button>
		</li>
	);
}
