import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBControlPanelActions1Props } from './model';

useMetadata({});

useDefaultProps<DBControlPanelActions1Props>({});

export default function DBControlPanelActions1(
	props: DBControlPanelActions1Props
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-actions-1', props.className)}>
			{props.children}
		</div>
	);
}
