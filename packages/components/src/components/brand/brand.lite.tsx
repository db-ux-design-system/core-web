import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_ICON } from '../../shared/constants';
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
			data-icon={props.hideLogo ? 'none' : (props.icon ?? DEFAULT_ICON)}
			data-show-icon={getBooleanAsString(props.showIcon)}
			id={props.id}
			class={cls('db-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
