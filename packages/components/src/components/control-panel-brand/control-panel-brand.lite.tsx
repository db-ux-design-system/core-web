import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBControlPanelBrandProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelBrandProps>({});

export default function DBControlPanelBrand(props: DBControlPanelBrandProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-brand', props.className)}>
			<div
				class="db-control-panel-brand-text-container"
				data-has-second-line={getBooleanAsString(!!props.secondLine)}>
				{props.children}
				<Show when={props.secondLine}>
					<span>{props.secondLine}</span>
				</Show>
			</div>
			<div class="db-control-panel-brand-end-slot">
				<Slot name="endSlot" />
			</div>
		</div>
	);
}
