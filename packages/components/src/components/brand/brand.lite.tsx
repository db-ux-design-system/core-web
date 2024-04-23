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
			icon: 'db'
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			data-icon={
				props.hideLogo ? 'none' : props.icon ?? state.defaultValues.icon
			}
			id={props.id}
			class={cls('db-brand', props.className)}>
			{props.children}
		</div>
	);
}
