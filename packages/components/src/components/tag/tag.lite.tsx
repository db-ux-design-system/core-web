import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef,
	onUpdate
} from '@builder.io/mitosis';
import { DBButton } from '../button';
import { uuid } from '../../utils';
import { DBTagState, DBTagProps } from './model';
import { DEFAULT_ID } from '../../shared/constants';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		isFormComponent: true,
		properties: [
			{ name: 'name', type: 'SingleLine.Text' },
			// { name: 'disabled', type: 'TwoOptions' },
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Adaptive', name: 'Adaptive', value: 'adaptive' },
					{ key: 'Critical', name: 'Critical', value: 'critical' },
					{
						key: 'Informational',
						name: 'Informational',
						value: 'informational'
					},
					{ key: 'Warning', name: 'Warning', value: 'warning' },
					{
						key: 'Successful',
						name: 'Successful',
						value: 'successful'
					}
				]
			}
			// type
		]
	}
});

const DEFAULT_VALUES = {
	// TODO: We should think this through again, if we would really like to have default and especially english, instead of german labels in here
	removeButtonText: 'Remove tag'
};

export default function DBTag(props: DBTagProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBTagState>({
		initialized: false,
		_id: DEFAULT_ID,
		_checked: false,
		_isValid: undefined,
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			state._checked = event.target?.checked;
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		},
		getTabIndex: () => {
			if (props.disabled) {
				return undefined;
			}

			return props.tabIndex ?? undefined;
		},
		handleRemove: () => {
			if (props.onRemove) {
				props.onRemove();
			}
		},
		getRemoveButtonText: () => {
			if (props.removeButton) {
				return props.removeButton;
			}

			return DEFAULT_VALUES.removeButtonText;
		},
		isInteractive: () => {
			if (props.behaviour) {
				return props.behaviour.includes('interactive');
			}

			return false;
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id || 'tag-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (props.checked && state.initialized && document && state._id) {
			const checkElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkElement) {
				checkElement.checked = true;
				state.initialized = false;
			}
		}
	}, [state.initialized]);

	return (
		<div
			ref={component}
			class={state.getClassNames('db-tag', props.className)}
			tabIndex={state.getTabIndex()}
			data-interactive={state.isInteractive()}
			data-disabled={props.disabled}
			data-variant={props.variant}
			data-type={props.type}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show
				when={state.isInteractive()}
				else={
					<span
						class={state.getClassNames('tag-label', {
							'is-icon-text-replace':
								state.iconVisible(props.icon) && props.noText
						})}
						data-icon={props.icon}
						data-overflow={props.overflow}>
						{props.children}
					</span>
				}>
				<input
					id={state._id}
					type={
						props.behaviour === 'interactive-unique'
							? 'radio'
							: 'checkbox'
					}
					checked={props.checked}
					name={props.name}
					value={props.value}
					disabled={props.disabled}
					required={props.required}
					aria-invalid={props.invalid}
					onChange={(event) => state.handleChange(event)}
				/>
				<label
					class={state.getClassNames('tag-label', {
						'is-icon-text-replace':
							state.iconVisible(props.icon) && props.noText
					})}
					htmlFor={state._id}
					data-icon={props.icon}
					data-overflow={props.overflow}>
					{props.children}
				</label>
			</Show>

			<Show when={props.behaviour === 'removable'}>
				<DBButton
					onClick={() => state.handleRemove()}
					icon="close"
					size="small"
					noText
					variant="text"
					title={state.getRemoveButtonText()}>
					{state.getRemoveButtonText()}
				</DBButton>
			</Show>
		</div>
	);
}
