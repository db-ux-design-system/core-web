import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_REMOVE } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBTagProps, DBTagState } from './model';

useMetadata({});
useDefaultProps<DBTagProps>({});

export default function DBTag(props: DBTagProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBTagState>({
		handleRemove: (event?: ClickEvent<HTMLButtonElement> | void) => {
			if (!event) return;

			event.stopPropagation();
			if (props.onRemove) {
				props.onRemove(event);
			}
		},
		getRemoveButtonText: () => {
			if (props.removeButton) {
				return props.removeButton;
			}

			// TODO: We should think this through again, if we would really like to have default and especially english, instead of german labels in here
			return DEFAULT_REMOVE;
		}
	});

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-tag', props.className)}
			data-semantic={props.semantic}
			data-emphasis={props.emphasis}
			data-material={props.material}
			data-weight={props.weight}
			data-text-opacity={props.textOpacity}
			data-material-alternate={props.materialAlternate}
			data-weight-alternate={props.weightAlternate}
			data-text-opacity-alternate={props.textOpacityAlternate}
			data-icon={props.icon}
			data-show-check-state={getBooleanAsString(
				props.showCheckState ?? true
			)}
			data-show-icon={getBooleanAsString(props.showIcon)}
			data-no-text={getBooleanAsString(props.noText)}
			data-overflow={getBooleanAsString(props.overflow)}>
			<Slot name="content" />

			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>

			<Show when={props.behavior === 'removable'}>
				{/* we aren't using DBButton here because of angular would wrap it in custom component */}
				<button
					class="db-button db-tab-remove-button"
					onClick={(event) => state.handleRemove(event)}
					data-icon="cross"
					data-size="small"
					data-no-text="true"
					data-variant="ghost"
					type="button">
					<DBTooltip variant="label">
						{state.getRemoveButtonText()}
					</DBTooltip>
				</button>
			</Show>
		</div>
	);
}
