import {
	onMount,
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
import {
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'checked', 'value', 'name']
	}
});

useDefaultProps<DBMultiSelectListItemProps>({});

export default function DBMultiSelectListItem(
	props: DBMultiSelectListItemProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement>(null);
	// jscpd:ignore-start
	const state: DBMultiSelectListItemState =
		useStore<DBMultiSelectListItemState>({
			_id: undefined,
			handleChange: (event: ChangeEvent<HTMLInputElement>) => {
				if (props.onChange) {
					props.onChange(event);
				}

				if (props.change) {
					props.change(event);
				}

				useTarget({
					angular: () =>
						handleFrameworkEventAngular(this, event, 'checked'),
					vue: () =>
						handleFrameworkEventVue(() => {}, event, 'checked')
				});
			}
		});

	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id ?? `multi-select-list-item-${uuid()}`;
	});

	return (
		<li
			ref={_ref}
			id={state._id}
			class={cls('db-multi-select-list-item', props.className, {
				'db-checkbox': props.type === 'checkbox' && !props.groupLabel,
				'db-radio': props.type !== 'checkbox' && !props.groupLabel
			})}
			data-icon-after={
				props.type !== 'checkbox' && props.checked ? 'check' : undefined
			}>
			<Show when={props.groupLabel}>
				<span>{props.groupLabel}</span>
			</Show>
			<Show when={!props.groupLabel && state._id}>
				<label htmlFor={state._id + props.value}>
					<input
						class="db-multi-select-list-item-checkbox"
						id={state._id + props.value}
						type={props.type}
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
