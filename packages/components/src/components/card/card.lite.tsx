import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBCardState, DBCardProps } from './model';
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
						key: 'Default',
						name: 'Default',
						value: 'default'
					},
					{
						key: 'Interactive',
						name: 'Interactive',
						value: 'interactive'
					}
				]
			}
		]
	}
});

export default function DBCard(props: DBCardProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBCardState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

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
			class={cls('db-card', props.className)}
			data-variant={props.variant}
			data-color-variant={props.colorVariant}
			data-elevation={props.elevation}
			data-spacing={props.spacing}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.imgSrc}>
				<img
					class="db-card-image"
					src={props.imgSrc}
					alt={props.imgAlt}
					height={props.imgHeight}
					width={props.imgWidth}
				/>
			</Show>
			{props.children}
		</div>
	);
}
