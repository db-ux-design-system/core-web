import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBControlPanelMetaProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelMetaProps>({});

export default function DBControlPanelMeta(props: DBControlPanelMetaProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-meta', props.className)}>
			{props.children}
		</div>
	);
}
