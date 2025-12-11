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
import { ChangeEvent } from '../../shared/model';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import {
	DBCustomSelectListItemProps,
	DBCustomSelectListItemState
} from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'checked', 'value', 'name'],
		signals: {
			writeable: ['disabled', 'checked']
		}
	}
});

useDefaultProps<DBCustomSelectListItemProps>({});

export default function DBCustomSelectListItem(
	props: DBCustomSelectListItemProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLLIElement | any>(null);
	// jscpd:ignore-start
	const state: DBCustomSelectListItemState =
		useStore<DBCustomSelectListItemState>({
			_id: undefined,
			hasDivider: false,
			handleChange: (event: ChangeEvent<HTMLInputElement>) => {
				event.stopPropagation();
				if (props.onChange) {
					props.onChange(event);
				}

				useTarget({
					angular: () =>
						handleFrameworkEventAngular(state, event, 'checked'),
					vue: () =>
						handleFrameworkEventVue(() => {}, event, 'checked')
				});
			},
			getIconTrailing: () => {
				if (props.isGroupTitle || props.type === 'checkbox') {
					return;
				}

				return getBoolean(props.checked, 'checked')
					? 'check'
					: 'x_placeholder';
			}
		});

	// jscpd:ignore-end

	onMount(() => {
		state._id = props.liid ?? `custom-select-list-item-${uuid()}`;
	});

	onUpdate(() => {
		state.hasDivider = Boolean(props.isGroupTitle || props.showDivider);
	}, [props.isGroupTitle, props.showDivider]);

	return (
		<li
			ref={_ref}
			id={state._id}
			class={cls('db-custom-select-list-item', props.className, {
				'db-checkbox': props.type === 'checkbox' && !props.isGroupTitle,
				'db-radio': props.type !== 'checkbox' && !props.isGroupTitle
			})}
			data-divider={getBooleanAsString(state.hasDivider)}>
			<Show
				when={!props.isGroupTitle}
				else={<span>{props.groupTitle}</span>}>
				<label
					data-icon={
						props.type !== 'checkbox' && props.icon
							? props.icon
							: undefined
					}
					data-show-icon={getBooleanAsString(props.showIcon)}
					data-icon-trailing={state.getIconTrailing()}>
					<input
						class="db-custom-select-list-item-checkbox"
						type={props.type}
						name={props.name}
						form={props.name}
						checked={getBoolean(props.checked, 'checked')}
						disabled={getBoolean(props.disabled, 'disabled')}
						value={props.value}
						data-disable-focus="true"
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							state.handleChange(event)
						}
					/>
					<Show when={props.label} else={props.children}>
						{props.label}
					</Show>
				</label>
			</Show>
		</li>
	);
}
