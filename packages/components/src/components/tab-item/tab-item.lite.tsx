import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import type { DBTabItemProps, DBTabItemState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled'],
		signals: {
			writeable: ['disabled', 'checked']
		}
	}
});
useDefaultProps<DBTabItemProps>({});

export default function DBTabItem(props: DBTabItemProps) {
	const _ref = useRef<HTMLInputElement | any>(null);

	function setSelectedOnChange(event: any) {
		useTarget({
			stencil: () => {
				state._selected = getBooleanAsString(event.target === _ref);
			},
			default: () => {
				state._selected = event.target === _ref;
			}
		});
	}

	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		_selected: false,
		_name: undefined,
		initialized: false,
		handleNameAttribute: () => {
			if (_ref) {
				const setAttribute = _ref.setAttribute;
				_ref.setAttribute = (attribute: string, value: string) => {
					setAttribute.call(_ref, attribute, value);
					if (attribute === 'name') {
						state._name = value;
					}
				};
			}
		},
		handleChange: (event: any) => {
			event.stopPropagation();
			if (props.onChange) {
				props.onChange(event);
			}

			if (_ref.checked && !state._selected) {
				useTarget({
					stencil: () => {
						state._selected = getBooleanAsString(true);
					},
					default: () => {
						state._selected = true;
					}
				});
			}

			useTarget({
				angular: () =>
					handleFrameworkEventAngular(state, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
		}
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (state.initialized && _ref) {
			useTarget({ react: () => state.handleNameAttribute() });
			state.initialized = false;

			// deselect this tab when another tab in tablist is selected
			_ref.closest('[role=tablist]')?.addEventListener(
				'change',
				setSelectedOnChange
			);

			if (props.active) {
				useTarget({
					stencil: () => {
						state._selected = getBooleanAsString(true);
					},
					default: () => {
						state._selected = true;
					}
				});
				_ref.click();
			}
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (props.name) {
			state._name = props.name;
		}
	}, [props.name]);

	onUnMount(() => {
		if (state.initialized && _ref) {
			_ref.closest('[role=tablist]')?.removeEventListener(
				'change',
				setSelectedOnChange
			);
		}
	});

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<label
				htmlFor={props.id}
				data-icon={props.iconLeading ?? props.icon}
				data-icon-trailing={props.iconTrailing}
				data-show-icon={getBooleanAsString(
					props.showIconLeading ?? props.showIcon
				)}
				data-show-icon-trailing={getBooleanAsString(
					props.showIconTrailing
				)}
				data-no-text={getBooleanAsString(props.noText)}>
				<input
					disabled={getBoolean(props.disabled, 'disabled')}
					aria-selected={state._selected}
					checked={getBoolean(props.checked, 'checked')}
					ref={_ref}
					type="radio"
					role="tab"
					name={state._name}
					id={props.id}
					onInput={(event: any) => state.handleChange(event)}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
