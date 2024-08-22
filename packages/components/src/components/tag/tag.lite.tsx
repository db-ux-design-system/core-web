import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBButton } from '../button';
import { DBTagProps, DBTagState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTag(props: DBTagProps) {
	const ref = useRef<HTMLDivElement>(null);
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
			ref={ref}
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
