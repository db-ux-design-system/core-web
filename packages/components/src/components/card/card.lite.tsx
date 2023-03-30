import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBCardState, DBCardProps } from './model';

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

	return (
		<div
			ref={component}
			class={'db-card' + (props.className ? ' ' + props.className : '')}
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
