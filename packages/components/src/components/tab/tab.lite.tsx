import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_ID } from '../../shared/constants';
import type { DBTabState, DBTabProps } from './model';
import { uuid } from '../../utils';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
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
	// This is used as forwardRef
	let component: any;
	const formRef = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabState>({
		mId: DEFAULT_ID
	});

	onMount(() => {
		state.mId = uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.active) {
			formRef?.click();
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			id={props.id}
			class={cls('db-tab', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={formRef}
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
