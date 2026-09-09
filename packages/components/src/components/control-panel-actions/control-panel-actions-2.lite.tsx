import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBControlPanelActions2Props } from './model';

useMetadata({});

useDefaultProps<DBControlPanelActions2Props>({});

export default function DBControlPanelActions2(
	props: DBControlPanelActions2Props
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-actions-2', props.className)}>
			{props.children}
		</div>
	);
}
