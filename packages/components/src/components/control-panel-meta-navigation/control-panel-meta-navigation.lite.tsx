import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { DBControlPanelMetaNavigationProps } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBControlPanelMetaNavigationProps>({});

export default function DBControlPanelMetaNavigation(
	props: DBControlPanelMetaNavigationProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-control-panel-meta-navigation', props.className)}>
			{props.children}
		</div>
	);
}
