import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBCustomButtonProps } from './model';

useMetadata({});

useDefaultProps<DBCustomButtonProps>({});

export default function DBCustomButton(props: DBCustomButtonProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-custom-button', props.className)}
			data-icon={props.iconLeading ?? props.icon}
			data-show-icon={getBooleanAsString(
				props.showIconLeading ?? props.showIcon
			)}
			data-icon-trailing={props.iconTrailing}
			data-show-icon-trailing={getBooleanAsString(props.showIconTrailing)}
			data-size={props.size}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}>
			{props.children}
		</div>
	);
}
