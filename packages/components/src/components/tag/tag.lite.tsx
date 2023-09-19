import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBButton } from '../button';
import { DBTagProps, DBTagState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		isFormComponent: true,
		properties: [
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Tag'
			},
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
				],
				defaultValue: 'adaptive'
			}
			// type
		]
	}
});

export default function DBTag(props: DBTagProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBTagState>({
		handleRemove: () => {
			if (props.onRemove) {
				props.onRemove();
			}
		},
		getRemoveButtonText: () => {
			if (props.removeButton) {
				return props.removeButton;
			}

			// TODO: We should think this through again, if we would really like to have default and especially english, instead of german labels in here
			return 'Remove tag';
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			ref={component}
			id={props.id}
			class={cls('db-tag', props.className)}
			data-disabled={props.disabled}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			data-icon={props.icon}
			data-no-text={props.noText}
			data-overflow={props.overflow}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			{props.children}

			<Show when={props.text}>{props.text}</Show>

			<Show when={props.behaviour === 'removable'}>
				<DBButton
					className="db-tab-remove-button"
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
