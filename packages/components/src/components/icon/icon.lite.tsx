import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		properties: [
			{
				name: 'icon',
				type: 'Icon'
			},
			{ name: 'icntxt', type: 'TwoOptions' }
		]
	}
});

export default function DBIcon(props: DBIconProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBIconState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<span
			ref={component}
			class={
				'db-icon' +
				(props.className ? ' ' + props.className : '') +
				(props.icntxt ? '' : ' is-icon-text-replace')
			}
			data-icon={props.icon}
			aria-hidden="true">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
