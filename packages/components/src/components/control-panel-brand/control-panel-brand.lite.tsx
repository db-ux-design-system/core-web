import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getHideProp } from '../../utils';
import { DBControlPanelBrandProps } from './model';
import { DEFAULT_ICON } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBControlPanelBrandProps>({});

export default function DBControlPanelBrand(props: DBControlPanelBrandProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			data-icon={props.icon ?? DEFAULT_ICON}
			data-hide-icon={getHideProp(props.showIcon)}
			id={props.id}
			class={cls('db-control-panel-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
