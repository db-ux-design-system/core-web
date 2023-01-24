import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_ID, uuid } from '../../utils';
import type { DBTabState, DBTabProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: [
			{ name: 'name', type: 'SingleLine.Text' },
			{ name: 'label', type: 'SingleLine.Text' },
			{
				name: 'active',
				type: 'Enum',
				values: [
					{ key: 'False', name: 'False', value: 'false' },
					{ key: 'True', name: 'True', value: 'true' }
				]
			}
		]
	}
});

export default function DBTab(props: DBTabProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBTabState>({
		mId: DEFAULT_ID
	});

	onMount(() => {
		state.mId = uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.active) {
			inputRef?.click();
		}
	});

	return (
		<div class={'db-tab' + (props.className ? ' ' + props.className : '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={inputRef}
				type="radio"
				name={props.name}
				id={state.mId}
			/>
			<label htmlFor={state.mId} role="tab">
				{props.label}
			</label>
			<section id={'content-' + state.mId} role="tabpanel">
				<Show when={props.content}> {props.content}</Show>
				{props.children}
			</section>
		</div>
	);
}
