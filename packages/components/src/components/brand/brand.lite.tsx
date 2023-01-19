import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBBrandState, DBBrandProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

const DEFAULT_VALUES = {
	anchorRef: '#',
	src: './images/db_logo.svg'
};

export default function DBBrand(props: DBBrandProps) {
	const state = useStore<DBBrandState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			className={
				'db-brand' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<a
				href={props.anchorRef ?? DEFAULT_VALUES.anchorRef}
				title={props.anchorTitle}
				rel={props.anchorRelation}>
				<img
					src={props.imgSrc ?? DEFAULT_VALUES.src}
					alt={props.imgAlt}
					height={props.imgHeight}
					width={props.imgWidth}
					className="db-logo"
				/>
				<Show when={props.anchorChildren}>
					<span className="site-name">{props.children}</span>
				</Show>
			</a>
			<Show when={!props.anchorChildren}>
				<span className="site-name">{props.children}</span>
			</Show>
		</div>
	);
}
