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

	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		_selected: false,
		_name: undefined,
		initialized: false,
		_listenerAdded: false,
		boundSetSelectedOnChange: undefined,
		setSelectedOnChange: (event: any) => {
			event.stopPropagation();
			useTarget({
				stencil: () => {
					state._selected = getBooleanAsString(event.target === _ref);
				},
				default: () => {
					state._selected = event.target === _ref;
				}
			});
		},
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
			if (props.onChange) {
				props.onChange(event);
			}

			useTarget({
				angular: () =>
					handleFrameworkEventAngular(state, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
		}
	});

	// Set up event listener to react on any change (select & deselect) in tab list
	// Default: Most framework can just pass the state function to the parents event listener.
	// Stencil: Bind the function to maintain correct 'this' context in class components
	// React: Wrap in arrow function so setState doesn't treat it as a state updater
	onMount(() => {
		useTarget({
			stencil: () => {
				state.boundSetSelectedOnChange =
					state.setSelectedOnChange.bind(state);
			},
			react: () => {
				state.boundSetSelectedOnChange = () =>
					state.setSelectedOnChange;
			},
			default: () => {
				state.boundSetSelectedOnChange = state.setSelectedOnChange;
			}
		});
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && state.initialized && state.boundSetSelectedOnChange) {
			useTarget({ react: () => state.handleNameAttribute() });
			state.initialized = false;

			// deselect this tab when another tab in tablist is selected
			if (!state._listenerAdded) {
				_ref.closest('[role=tablist]')?.addEventListener(
					'change',
					state.boundSetSelectedOnChange
				);
				state._listenerAdded = true;
			}

			// Initialize selected state from either active prop (set by parent) or checked attribute
			if (props.active || _ref.checked) {
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
	}, [_ref, state.initialized, state.boundSetSelectedOnChange]);

	onUpdate(() => {
		if (props.name) {
			state._name = props.name;
		}
	}, [props.name]);

	onUnMount(() => {
		if (state._listenerAdded && _ref && state.boundSetSelectedOnChange) {
			_ref.closest('[role=tablist]')?.removeEventListener(
				'change',
				state.boundSetSelectedOnChange
			);
			state._listenerAdded = false;
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
