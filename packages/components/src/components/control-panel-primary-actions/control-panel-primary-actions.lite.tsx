import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { DBControlPanelPrimaryActionsProps } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBControlPanelPrimaryActionsProps>({});

export default function DBControlPanelPrimaryActions(
	props: DBControlPanelPrimaryActionsProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-control-panel-primary-actions', props.className)}>
			{props.children}
		</div>
	);
}
