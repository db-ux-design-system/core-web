import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBDividerState, DBDividerProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
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
				],
				defaultValue: 'horizontal'
			},
			{
				name: 'margin',
				type: 'Enum',
				values: [
					{ key: 'Default', name: 'Default', value: '_' },
					{ key: 'None', name: 'None', value: 'none' }
				],
				defaultValue: '_'
			}
		]
	}
});

export default function DBDivider(props: DBDividerProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBDividerState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			id={props.id}
			data-margin={props.margin}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			class={cls('db-divider', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
