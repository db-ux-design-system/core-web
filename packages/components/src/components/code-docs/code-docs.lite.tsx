import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBCodeDocsProps, DBCodeDocsState } from './model';
import { DBCard } from '../card';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBCodeDocs(props: DBCodeDocsProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBCodeDocsState>({
		open: false,
		toggleCode: () => {
			state.open = !state.open;
		},
		getShowButtonLabel: () => {
			return state.open
				? props.hideCodeLabel ?? 'Hide Code'
				: props.showCodeLabel ?? 'Show Code';
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<DBCard
			ref={component}
			className={cls('db-code-docs', props.className)}
			elevation="none">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
			<details class="code-details" onToggle={() => state.toggleCode()}>
				<summary
					class="db-button code-button"
					data-size="small"
					data-variant="primary">
					{state.getShowButtonLabel()}
				</summary>
				<div class="db-ui-functional code">
					<Slot name="code"></Slot>
				</div>
			</details>
		</DBCard>
	);
}
