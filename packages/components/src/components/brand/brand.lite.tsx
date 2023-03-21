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
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBBrandState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			ref={component}
			class={'db-brand' + (props.className ? ' ' + props.className : '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<a
				href={props.anchorRef ?? DEFAULT_VALUES.anchorRef}
				title={props.anchorTitle}
				rel={props.anchorRelation}>
				<Show when={!props.hideDefaultAsset}>
					<img
						src={props.imgSrc ?? DEFAULT_VALUES.src}
						alt={props.imgAlt}
						height={props.imgHeight}
						width={props.imgWidth}
						className="db-logo"
					/>
				</Show>
				<Show when={props.anchorChildren}>
					<>{props.children}</>
				</Show>
			</a>
			<Show when={!props.anchorChildren}>
				<>{props.children}</>
			</Show>
		</div>
	);
}
