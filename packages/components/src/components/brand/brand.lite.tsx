import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBBrandProps, DBBrandState } from './model';
import { DEFAULT_ICON } from '../../shared/constants';

useMetadata({});

export default function DBBrand(props: DBBrandProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			data-icon={props.hideLogo ? 'none' : (props.icon ?? DEFAULT_ICON)}
			id={props.id}
			class={cls('db-brand', props.className)}>
			{props.children}
		</div>
	);
}
