import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBBrandState, DBBrandProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: [
			{
				name: 'anchorRef',
				type: 'SingleLine.URL'
			},
			{
				name: 'title',
				type: 'SingleLine.Text'
			},
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Anwendungsname'
			},
			{
				name: 'imgSrc',
				type: 'SingleLine.URL',
				defaultValue:
					'https://ppassets.azureedge.net/assets/images/db_logo.svg'
			},
			{
				name: 'imgAlt',
				type: 'SingleLine.Text'
			},
			{
				name: 'imgWidth',
				type: 'Decimal',
				defaultValue: 34
			},
			{
				name: 'imgHeight',
				type: 'Decimal',
				defaultValue: 24
			}
		]
	}
});

export default function DBBrand(props: DBBrandProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({
		defaultValues: {
			anchorRef: '/',
			src: './assets/images/db_logo.svg',
			width: '34',
			height: '24'
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
			class={cls('db-brand', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<a
				href={props.anchorRef ?? state.defaultValues.anchorRef}
				title={props.anchorTitle}
				rel={props.anchorRelation}>
				<Show when={!props.hideDefaultAsset}>
					<img
						src={props.imgSrc ?? state.defaultValues.src}
						alt={props.imgAlt ?? ''}
						height={props.imgHeight ?? state.defaultValues.height}
						width={props.imgWidth ?? state.defaultValues.width}
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
