import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_ICON } from '../../shared/constants';
import { cls, getBooleanAsString } from '../../utils';
import { DBControlPanelBrandProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelBrandProps>({});

export default function DBControlPanelBrand(props: DBControlPanelBrandProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			data-icon={props.icon ?? DEFAULT_ICON}
			data-show-icon={getBooleanAsString(props.showIcon)}
			id={props.id}
			class={cls('db-control-panel-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
			<Slot name="additionalInformation"></Slot>
		</div>
	);
}
