import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBBrandState, DBBrandProps } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

const DEFAULT_VALUES = {
	anchorRef: '/',
	src: './assets/images/db_logo.svg',
	width: 34,
	height: 24
};

export default function DBBrand(props: DBBrandProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({
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
		<div
			ref={component}
			class={state.getClassNames('db-brand', props.className)}>
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
						alt={props.imgAlt ?? ''}
						height={props.imgHeight ?? DEFAULT_VALUES.height}
						width={props.imgWidth ?? DEFAULT_VALUES.width}
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
