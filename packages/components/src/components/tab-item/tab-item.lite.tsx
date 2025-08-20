import {
	onMount,
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

			// We have different ts types in different frameworks, so we need to use any here

			useTarget({
				stencil: () => {
					const pressed = (event.target as any)?.['aria-pressed'];
					state._selected = getBooleanAsString(pressed === 'true');
				},
				default: () => {
					state._selected = (event.target as any)?.['aria-pressed'] === 'true';
				}
			});

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
			if (props.active) {
				_ref.click();
			}

			useTarget({ react: () => state.handleNameAttribute() });
			state.initialized = false;
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (props.name) {
			state._name = props.name;
		}
	}, [props.name]);

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<button
				disabled={getBoolean(props.disabled, 'disabled')}
				aria-selected={state._selected}
				aria-pressed={getBoolean(props.checked, 'checked')}
				ref={_ref}
				type="button"
				role="tab"
				name={state._name}
				id={props.id}
				data-icon={props.iconLeading ?? props.icon}
				data-icon-trailing={props.iconTrailing}
				data-show-icon={getBooleanAsString(
					props.showIconLeading ?? props.showIcon
				)}
				data-show-icon-trailing={getBooleanAsString(
					props.showIconTrailing
				)}
				data-no-text={getBooleanAsString(props.noText)}
				onClick={(event: any) => state.handleChange(event)}>
				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</button>
		</li>
	);
}
