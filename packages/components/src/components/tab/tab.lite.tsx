import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef
} from '@builder.io/mitosis';
import { uuid } from '../../utils';
import type { DBTabState, DBTabProps } from './model';
import './tab.scss';

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
		id: 'ID_WILL_BE_OVERWRITE_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARE_A_JAVA_DEVELOPER'
	});

	onMount(() => {
		state.id = uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.active) {
			inputRef?.click();
		}
	});

	return (
		<div class={'db-tab' + (props.className || '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={inputRef}
				type="radio"
				name={props.name}
				id={state.id}
			/>
			<label htmlFor={state.id} role="tab">
				{props.label}
			</label>
			<section id={'content-' + state.id} role="tabpanel">
				<Show when={props.content}> {props.content}</Show>
				{props.children}
			</section>
		</div>
	);
}
