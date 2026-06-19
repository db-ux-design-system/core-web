import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBControlPanelFlatIconProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelFlatIconProps>({});

export default function DBControlPanelFlatIcon(
	props: DBControlPanelFlatIconProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	// TODO: Add JS to set density fo mobile

	return (
		<header
			ref={_ref}
			id={props.id}
			data-no-text={getBooleanAsString(props.noText)}
			class={cls('db-control-panel-flat-icon', props.className)}>
			{props.children}
		</header>
	);
}
