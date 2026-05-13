import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBBrandProps, DBBrandState } from './model';

useMetadata({});

useDefaultProps<DBBrandProps>({});

export default function DBBrand(props: DBBrandProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-brand', props.className)}
			data-no-text={getBooleanAsString(props.noText)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
