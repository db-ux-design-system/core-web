import {
	onInit,
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTagProps, DBTagState } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import { DEFAULT_REMOVE } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import DBTooltip from '../tooltip/tooltip.lite';

useMetadata({});
useDefaultProps<DBTagProps>({});

export default function DBTag(props: DBTagProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBTagState>({
		initialized: false,
		handleRemove: (event?: ClickEvent<HTMLButtonElement>) => {
			event?.stopPropagation();
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

	onInit(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (state.initialized && _ref && props.disabled !== undefined) {
			const button: HTMLButtonElement | null = _ref?.querySelector(
				'button:not(.db-tab-remove-button)'
			);
			const input: HTMLInputElement | null = _ref?.querySelector('input');
			for (const element of [button, input]) {
				if (element) {
					element.disabled = Boolean(props.disabled);
				}
			}
		}
	}, [state.initialized, props.disabled, _ref]);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-tag', props.className)}
			data-disabled={getBooleanAsString(props.disabled)}
			data-semantic={props.semantic}
			data-emphasis={props.emphasis}
			data-icon={props.icon}
			data-show-check-state={getBooleanAsString(
				props.showCheckState ?? true
			)}
			data-hide-icon={getHideProp(props.showIcon)}
			data-no-text={getBooleanAsString(props.noText)}
			data-overflow={getBooleanAsString(props.overflow)}>
			<Slot name="content" />

			{props.children}

			<Show when={props.text}>{props.text}</Show>

			<Show when={props.behavior === 'removable'}>
				{/* we aren't using DBButton here because of angular would wrap it in custom component */}
				<button
					class="db-button db-tab-remove-button"
					onClick={(event) => state.handleRemove(event)}
					data-icon="cross"
					data-size="small"
					data-no-text="true"
					data-variant="ghost">
					<DBTooltip>{state.getRemoveButtonText()}</DBTooltip>
					{state.getRemoveButtonText()}
				</button>
			</Show>
		</div>
	);
}
