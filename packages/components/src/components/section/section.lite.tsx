import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBSectionState, DBSectionProps } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBSection(props: DBSectionProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBSectionState>({
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<section
			ref={component}
			className={state.getClassNames('db-section', props.className)}
			data-size={props.size || 'medium'}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{/* TODO: We need to reevaluate whether we could get rid of this tag */}
			<div data-variant={props.variant}>{props.children}</div>
		</section>
	);
}
