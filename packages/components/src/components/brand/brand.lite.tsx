import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { cls, getHideProp } from '../../utils';
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
			data-hide-icon={getHideProp(props.showIcon)}
			id={props.id}
			class={cls('db-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
