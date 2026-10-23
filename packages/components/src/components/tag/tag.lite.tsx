import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_REMOVE } from '../../shared/constants';
import { ClickEvent, ColorType } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBTagProps, DBTagState } from './model';

useMetadata({});
useDefaultProps<DBTagProps>({});

export default function DBTag(props: DBTagProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBTagState>({
		initialized: false,
		_hasInput: false,
		_inputObserver: undefined,
		_material: 'filled-1',
		_altStateMaterial: undefined,
		_checkForInput: () => {
			if (_ref) {
				state._hasInput = !!_ref.querySelector('input');
			}
		},
		_syncMaterials: () => {
			if (props.material) {
				state._material = props.material;
			} else if (props.emphasis === 'strong' && !state._hasInput) {
				// A tag wrapping an `<input>` keeps a `filled-1` base so its
				// checked state can switch to the vibrant alt-state material - a
				// vibrant base would leave the checked state visually identical.
				state._material = 'vibrant';
			} else {
				state._material = 'filled-1';
			}

			// Only a tag that wraps an `<input>` has a checked state to style.
			state._altStateMaterial =
				props.altStateMaterial ??
				(state._hasInput ? 'vibrant' : undefined);
		},
		_getColor: (): ColorType | undefined => {
			if (props.color) {
				return props.color;
			}

			if (props.semantic === 'informational') {
				return 'blue';
			}

			if (props.semantic === 'critical') {
				return 'red';
			}

			if (props.semantic === 'warning') {
				return 'yellow';
			}

			if (props.semantic === 'successful') {
				return 'green';
			}

			return undefined;
		},
		_getAltStateColor: (): ColorType | undefined => {
			return props.altStateColor ?? state._getColor();
		},
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

	onMount(() => {
		state.initialized = true;
		state._checkForInput();
		state._syncMaterials();
	});

	onUpdate(() => {
		if (!state.initialized || !_ref || state._inputObserver) return;

		const observer = new MutationObserver(() => {
			state._checkForInput();
		});
		observer.observe(_ref, { childList: true, subtree: true });
		state._inputObserver = observer;

		state._checkForInput();
	}, [_ref, state.initialized]);

	// Recompute the resolved materials into state whenever an input is detected

	onUpdate(() => {
		state._syncMaterials();
	}, [
		state._hasInput,
		props.material,
		props.altStateMaterial,
		props.emphasis
	]);

	onUnMount(() => {
		state._inputObserver?.disconnect();
		state._inputObserver = undefined;
	});

	return (
		<div
			data-material={state._material}
			data-color={state._getColor()}
			data-alt-state-material={state._altStateMaterial}
			data-alt-state-color={state._getAltStateColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-tag', props.className)}
			data-semantic={props.semantic}
			data-emphasis={props.emphasis}
			data-icon={props.icon}
			data-show-check-state={getBooleanAsString(
				props.showCheckState ?? true,
				'showCheckState'
			)}
			data-show-icon={getBooleanAsString(props.showIcon, 'showIcon')}
			data-no-text={getBooleanAsString(props.noText, 'noText')}
			data-overflow={getBooleanAsString(props.overflow, 'overflow')}>
			<Slot name="content" />
			<Show when={props.text}>{props.text}</Show>
			{props.children}

			<Show when={props.behavior === 'removable'}>
				{/* we aren't using DBButton here because of angular would wrap it in custom component */}
				<button
					class="db-button db-tab-remove-button"
					onClick={(event) => state.handleRemove(event)}
					data-icon="cross"
					data-size="small"
					data-no-text="true"
					data-variant="ghost"
					data-material="transparent"
					type="button">
					{state.getRemoveButtonText()}
					<DBTooltip variant="label">
						{state.getRemoveButtonText()}
					</DBTooltip>
				</button>
			</Show>
		</div>
	);
}
