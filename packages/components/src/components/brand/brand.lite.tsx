import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBBrandState, DBBrandProps } from './model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBrand(props: DBBrandProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({
		_id: DEFAULT_ID,
		defaultValues: {
			src: './assets/images/db_logo.svg',
			width: '34',
			height: '24'
		}
	});

	onMount(() => {
		state._id = props.id || 'brand-' + uuid();

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div ref={ref} id={state._id} class={cls('db-brand', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<a
				href={props.anchorRef}
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
				{props.children}
			</a>
		</div>
	);
}
