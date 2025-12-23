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
	const _ref = useRef<HTMLDetailsElement | any>(null);

	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		_selected: false,
		_name: undefined,
		initialized: false,
		_listenerAdded: false,
		boundSetSelectedOnChange: undefined,
		setSelectedOnChange: (event: any) => {
			event.stopPropagation();
			// Check if the event target is the current details element
			const isCurrentTab =
				event.target === _ref ||
				event.target.closest('details') === _ref;
			useTarget({
				stencil: () => {
					state._selected = getBooleanAsString(
						isCurrentTab && _ref?.open
					);
				},
				default: () => {
					state._selected = isCurrentTab && _ref?.open;
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
		handleToggle: (event: any) => {
			// We need to prevent default to control the opening ourselves
			event?.preventDefault();

			// Close all other tabs in the same group by closing their details elements
			if (_ref && state._name) {
				const tabList = _ref.closest('[role="tablist"]');
				if (tabList) {
					const allDetails = tabList.querySelectorAll(
						`details[name="${state._name}"]`
					);
					allDetails.forEach((detail: Element) => {
						if (
							detail !== _ref &&
							(detail as HTMLDetailsElement).open
						) {
							(detail as HTMLDetailsElement).open = false;
						}
					});
				}
			}

			// Open this tab
			if (_ref) {
				_ref.open = true;
				state._selected = true;
			}

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

			// Listen for toggle events on other tabs to update selection state
			if (!state._listenerAdded) {
				_ref.closest('[role=tablist]')?.addEventListener(
					'toggle',
					state.boundSetSelectedOnChange,
					true // Use capture phase to catch events from details elements
				);
				state._listenerAdded = true;
			}

			// Initialize selected state from either active prop (set by parent) or open attribute
			if (props.active || _ref.open) {
				useTarget({
					stencil: () => {
						state._selected = getBooleanAsString(true);
					},
					default: () => {
						state._selected = true;
					}
				});
				if (!_ref.open) {
					_ref.open = true;
				}
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
				'toggle',
				state.boundSetSelectedOnChange,
				true
			);
			state._listenerAdded = false;
		}
	});

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<details
				ref={_ref}
				aria-disabled={
					getBoolean(props.disabled, 'disabled') ? 'true' : undefined
				}
				name={state._name}
				id={props.id}
				open={getBoolean(props.checked, 'checked')}
				onToggle={(event: any) => state.handleToggle(event)}>
				<summary
					role="tab"
					aria-selected={state._selected}
					data-icon={props.iconLeading ?? props.icon}
					data-icon-trailing={props.iconTrailing}
					data-show-icon={getBooleanAsString(
						props.showIconLeading ?? props.showIcon
					)}
					data-show-icon-trailing={getBooleanAsString(
						props.showIconTrailing
					)}
					data-no-text={getBooleanAsString(props.noText)}>
					<Show when={props.label}>{props.label}</Show>
					{props.children}
				</summary>
			</details>
		</li>
	);
}
