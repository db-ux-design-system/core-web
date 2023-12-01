import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBBrandState, DBBrandProps } from './model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBrand(props: DBBrandProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({
		defaultValues: {
			icon: 'logo'
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
			ref={ref}
			data-icon={props.hideLogo ? 'none' : state.defaultValues.icon}
			id={props.id}
			class={cls('db-brand', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			{props.children}
		</div>
	);
}
