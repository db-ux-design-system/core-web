import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef,
	Slot
} from '@builder.io/mitosis';
import { DEFAULT_ID } from '../../shared/constants';
import type { DBTabState, DBTabProps } from './model';
import { uuid } from '../../utils';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTab(props: DBTabProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.active) {
			ref?.click();
		}
	});
	// jscpd:ignore-end

	return (
		<>
			<label
				htmlFor={state._id}
				role="tab"
				class={cls('db-tab', props.className, {
					'is-icon-text-replace': props.noText
				})}
				data-icon={props.icon}
				data-icon-after={props.iconAfter}
				data-width={props.width}
				data-alignment={props.alignment}
				aria-selected={props.active}
				aria-controls={'content-' + state._id}>
				<Show when={state.stylePath}>
					<link rel="stylesheet" href={state.stylePath} />
				</Show>
				<input
					ref={ref}
					type="radio"
					name={props.name}
					id={state._id}
				/>

				<Show when={props.label}>{props.label}</Show>
				<Show when={!props.label}>
					<Slot name="label" />
				</Show>
			</label>
			<article
				id={'content-' + state._id}
				role="tabpanel"
				aria-labelledby={state._id}>
				<Show when={props.content}> {props.content}</Show>
				{props.children}
			</article>
		</>
	);
}
