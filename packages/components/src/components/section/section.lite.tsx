import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBSectionState, DBSectionProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBSection(props: DBSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSectionState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<section
			ref={ref}
			id={props.id}
			className={cls('db-section', props.className)}
			data-size={props.size || 'medium'}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{/* TODO: We need to reevaluate whether we could get rid of this tag */}
			<div data-variant={props.variant}>{props.children}</div>
		</section>
	);
}
