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
import type { DBTabItemProps, DBTabItemState } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});
useDefaultProps<DBTabItemProps>({});

export default function DBTabItem(props: DBTabItemProps) {
	const _ref = useRef<HTMLInputElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		initialized: false,
		_selected: false,
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
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

					handleFrameworkEventAngular(this, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
		}
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.active && state.initialized && _ref) {
			_ref.click();
			state.initialized = false;
		}
	}, [_ref, state.initialized]);

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<label
				htmlFor={props.id}
				data-icon={props.icon}
				data-icon-after={props.iconAfter}
				data-hide-icon={getHideProp(props.showIcon)}
				data-hide-icon-after={getHideProp(props.showIcon)}
				data-no-text={props.noText}>
				<input
					disabled={props.disabled}
					aria-selected={state._selected}
					aria-controls={props.controls}
					checked={props.checked}
					ref={_ref}
					type="radio"
					role="tab"
					id={props.id}
					onInput={(event: any) => state.handleChange(event)}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
