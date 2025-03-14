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
import {
	DBCustomSelectListItemProps,
	DBCustomSelectListItemState
} from './model';
import { cls, getBooleanAsString, getHideProp, uuid } from '../../utils';
import { ChangeEvent } from '../../shared/model';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'checked', 'value', 'name']
	}
});

useDefaultProps<DBCustomSelectListItemProps>({});

export default function DBCustomSelectListItem(
	props: DBCustomSelectListItemProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement | null>(null);
	// jscpd:ignore-start
	const state: DBCustomSelectListItemState =
		useStore<DBCustomSelectListItemState>({
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
			},
			getIconAfter: () => {
				if (props.isGroupTitle || props.type === 'checkbox') {
					return;
				}

				return props.checked ? 'check' : 'x_placeholder';
			}
		});

	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id ?? `custom-select-list-item-${uuid()}`;
	});

	return (
		<li
			ref={_ref}
			id={state._id}
			class={cls('db-custom-select-list-item', props.className, {
				'db-checkbox': props.type === 'checkbox' && !props.isGroupTitle,
				'db-radio': props.type !== 'checkbox' && !props.isGroupTitle
			})}
			data-divider={getBooleanAsString(
				Boolean(props.isGroupTitle || props.showDivider)
			)}>
			<Show
				when={!props.isGroupTitle}
				else={<span>{props.groupTitle}</span>}>
				<label
					data-icon={
						props.type !== 'checkbox' && props.icon
							? props.icon
							: undefined
					}
					data-hide-icon={getHideProp(props.showIcon)}
					data-icon-after={state.getIconAfter()}>
					<input
						class="db-custom-select-list-item-checkbox"
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
