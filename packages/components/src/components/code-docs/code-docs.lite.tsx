import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBCodeDocsProps, DBCodeDocsState } from './model';
import { DBCard } from '../card';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBCodeDocs(props: DBCodeDocsProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBCodeDocsState>({
		_id: DEFAULT_ID,
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
		state._id = props.id || 'code-docs-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<DBCard
			ref={ref}
			id={state._id}
			className={cls('db-code-docs', props.className)}>
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
