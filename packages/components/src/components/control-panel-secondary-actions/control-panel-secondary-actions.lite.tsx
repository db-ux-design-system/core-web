import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { DBControlPanelSecondaryActionsProps } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBControlPanelSecondaryActionsProps>({});

export default function DBControlPanelSecondaryActions(
	props: DBControlPanelSecondaryActionsProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-control-panel-secondary-actions', props.className)}>
			{props.children}
		</div>
	);
}
