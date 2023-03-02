import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBDividerState, DBDividerProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: [
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{
						key: 'Horizontal',
						name: 'Horizontal',
						value: 'horizontal'
					},
					{ key: 'Vertical', name: 'Vertical', value: 'vertical' }
				]
			},
			{
				name: 'margin',
				type: 'Enum',
				values: [
					{ key: 'Default', name: 'Default', value: '_' },
					{ key: 'None', name: 'None', value: 'none' }
				]
			}
		]
	}
});

export default function DBDivider(props: DBDividerProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBDividerState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			ref={component}
			data-margin={props.margin}
			data-variant={props.variant}
			class={
				'db-divider' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
