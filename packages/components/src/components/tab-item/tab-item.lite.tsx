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
import { cls, getBoolean, getBooleanAsString, getHideProp } from '../../utils';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import type { DBTabItemProps, DBTabItemState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
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
					const selected = (event.target as any)?.['checked'];
					state._selected = getBooleanAsString(selected);
				},
				default: () => {
					state._selected = (event.target as any)?.['checked'];
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
			<label
				htmlFor={props.id}
				data-icon={props.iconLeading ?? props.icon}
				data-icon-trailing={props.iconTrailing}
				data-hide-icon={getHideProp(
					props.showIconLeading ?? props.showIcon
				)}
				data-hide-icon-trailing={getHideProp(props.showIconTrailing)}
				data-no-text={getBooleanAsString(props.noText)}>
				<input
					disabled={getBoolean(props.disabled, 'disabled')}
					aria-selected={state._selected}
					aria-controls={props.controls}
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
