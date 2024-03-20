import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBBrandProps, DBBrandState } from './model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBrand(props: DBBrandProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({
		defaultValues: {
			anchorRef: '/',
			src: './assets/images/db_logo.svg',
			width: '34',
			height: '24'
		}
	});
	// jscpd:ignore-end

	return (
		<div ref={ref} id={props.id} class={cls('db-brand', props.className)}>
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
