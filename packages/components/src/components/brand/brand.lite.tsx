import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	cls,
	getDefaultProp,
	getHideProp,
	getPropIfDefined
} from '../../utils';
import { DBBrandProps, DBBrandState } from './model';
import { DEFAULT_ICON, DEFAULT_LABEL } from '../../shared/constants';

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
			data-icon={getPropIfDefined(
				'none',
				getDefaultProp(DEFAULT_ICON, props.icon),
				props.hideLogo
			)}
			data-hide-icon={getHideProp(props.showIcon)}
			id={props.id}
			class={cls('db-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
