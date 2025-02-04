import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import {
	DBMultiSelectListItemProps,
	DBMultiSelectListItemState
} from './model';
import { cls, uuid } from '../../utils';
import { ChangeEvent } from '../../shared/model';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({});

useDefaultProps<DBMultiSelectListItemProps>({});

export default function DBMultiSelectListItem(
	props: DBMultiSelectListItemProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement>(null);
	// jscpd:ignore-start
	const state: DBMultiSelectListItemState =
		useStore<DBMultiSelectListItemState>({
			_id: 'multi-select-list-item' + uuid(),

			handleChange: (event: ChangeEvent<HTMLInputElement>) => {
				if (props.onChange) {
					props.onChange(event);
				}

				if (props.change) {
					props.change(event);
				}

				useTarget({
					angular: () =>
						// @ts-ignore
						handleFrameworkEventAngular(this, event, 'checked'),
					vue: () =>
						handleFrameworkEventVue(() => {}, event, 'checked')
				});
			}
		});
	// jscpd:ignore-end

	return (
		<li
			ref={_ref}
			id={props.id}
			class={cls('db-multi-select-list-item', props.className, {
				'db-checkbox': !props.groupLabel
			})}>
			<Show when={props.groupLabel}>
				<span
					data-group-label-position={
						props.groupLabel && props.groupLabelPosition
					}>
					{props.groupLabel}
				</span>
			</Show>
			<Show when={!props.groupLabel}>
				<label htmlFor={state._id + props.value}>
					<input
						id={state._id + props.value}
						type="checkbox"
						name={props.name}
						checked={props.checked}
						disabled={props.disabled}
						value={props.value}
						data-disable-focus="true"
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							state.handleChange(event)
						}
					/>
					<Show when={props.label}>{props.label}</Show>
					<Show when={!props.label}>{props.children}</Show>
				</label>
			</Show>
		</li>
	);
}
