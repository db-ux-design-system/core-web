import { Slot, useMetadata, useRef, useStore } from '@builder.io/mitosis';
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
	const ref = useRef<HTMLDivElement>(null);
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

	// jscpd:ignore-end

	return (
		<DBCard
			ref={ref}
			id={props.id}
			className={cls('db-code-docs', props.className)}>
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
