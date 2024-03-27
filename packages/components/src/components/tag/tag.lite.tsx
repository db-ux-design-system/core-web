import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
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

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-tag', props.className)}
			data-disabled={props.disabled}
			data-semantic={props.semantic}
			data-emphasis={props.emphasis}
			data-icon={props.icon}
			data-no-text={props.noText}
			data-overflow={props.overflow}>
			{props.children}

			<Show when={props.text}>{props.text}</Show>

			<Show when={props.behaviour === 'removable'}>
				<DBButton
					className="db-tab-remove-button"
					onClick={() => state.handleRemove()}
					icon="close"
					size="small"
					noText
					variant="ghost"
					title={state.getRemoveButtonText()}>
					{state.getRemoveButtonText()}
				</DBButton>
			</Show>
		</div>
	);
}
