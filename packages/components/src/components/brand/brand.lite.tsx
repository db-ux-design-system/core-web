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
	anchorRef: '/',
	src: './assets/images/db_logo.svg'
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
			class={'db-brand' + (props.className ? ' ' + props.className : '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<a
				href={props.anchorRef ?? DEFAULT_VALUES.anchorRef}
				title={props.anchorTitle}
				rel={props.anchorRelation}>
				<Show
					when={!props.svgPath}
					else={
						<svg
							className="db-logo"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 40 28"
							id="logo">
							<rect
								x="2"
								y="2"
								width="36"
								height="24"
								fill="transparent"></rect>
							<path d={props.svgPath} fill="#f01414"></path>
						</svg>
					}>
					<img
						src={props.imgSrc ?? DEFAULT_VALUES.src}
						alt={props.imgAlt}
						height={props.imgHeight}
						width={props.imgWidth}
						className="db-logo"
					/>
				</Show>
				<Show when={props.anchorChildren}>
					<span class="site-name">{props.children}</span>
				</Show>
			</a>
			<Show when={!props.anchorChildren}>
				<span class="site-name">{props.children}</span>
			</Show>
		</div>
	);
}
