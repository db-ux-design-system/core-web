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
		mSelected: false,
		mName: undefined,
		mInitialized: false,
		mListenerAdded: false,
		boundSetSelectedOnChange: undefined,
		setSelectedOnChange: (event: any) => {
			event.stopPropagation();
			useTarget({
				stencil: () => {
					state.mSelected = getBooleanAsString(event.target === _ref);
				},
				default: () => {
					state.mSelected = event.target === _ref;
				}
			});
		},
		handleNameAttribute: () => {
			if (_ref) {
				const setAttribute = _ref.setAttribute;
				_ref.setAttribute = (attribute: string, value: string) => {
					setAttribute.call(_ref, attribute, value);
					if (attribute === 'name') {
						state.mName = value;
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
		state.mInitialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && state.mInitialized && state.boundSetSelectedOnChange) {
			useTarget({ react: () => state.handleNameAttribute() });
			state.mInitialized = false;

			// deselect this tab when another tab in tablist is selected
			if (!state.mListenerAdded) {
				_ref.closest('[role=tablist]')?.addEventListener(
					'change',
					state.boundSetSelectedOnChange
				);
				state.mListenerAdded = true;
			}

			// Initialize selected state from either active prop (set by parent) or checked attribute
			if (props.active || _ref.checked) {
				useTarget({
					stencil: () => {
						state.mSelected = getBooleanAsString(true);
					},
					default: () => {
						state.mSelected = true;
					}
				});
				_ref.click();
			}
		}
	}, [_ref, state.mInitialized, state.boundSetSelectedOnChange]);

	onUpdate(() => {
		if (props.name) {
			state.mName = props.name;
		}
	}, [props.name]);

	onUnMount(() => {
		if (state.mListenerAdded && _ref && state.boundSetSelectedOnChange) {
			_ref.closest('[role=tablist]')?.removeEventListener(
				'change',
				state.boundSetSelectedOnChange
			);
			state.mListenerAdded = false;
		}
	});

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<label
				htmlFor={props.id ?? props._id}
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
					aria-selected={state.mSelected}
					checked={getBoolean(props.checked, 'checked')}
					ref={_ref}
					type="radio"
					role="tab"
					name={state.mName}
					id={props.id ?? props._id}
					onInput={(event: any) => state.handleChange(event)}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
