import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBCodeDocsProps, DBCodeDocsState } from './model';
import { DBCard } from '../card';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

const DEFAULT_VALUES = {
	copyLabel: 'Copy Code',
	hideCodeLabel: 'Hide Code',
	showCodeLabel: 'Show Code'
};

export default function DBCodeDocs(props: DBCodeDocsProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBCodeDocsState>({
		open: false,
		toggleCode: () => {
			state.open = !state.open;
		},
		getShowButtonLabel: () => {
			return state.open
				? props.hideCodeLabel ?? DEFAULT_VALUES.hideCodeLabel
				: props.showCodeLabel ?? DEFAULT_VALUES.showCodeLabel;
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<DBCard
			ref={component}
			className={
				'db-code-docs' +
				(props.className ? ' ' + props.className : '')
			}
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
				<div class="code">
					<Slot name="code"></Slot>
				</div>
			</details>
		</DBCard>
	);
}
