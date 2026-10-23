import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomSelectFormFieldProps } from './model';

useMetadata({});

useDefaultProps<DBCustomSelectFormFieldProps>({});

export default function DBCustomSelectFormField(
	props: DBCustomSelectFormFieldProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-material={props.material}
			data-adaptive-color={props.color}
			class={cls('db-custom-select-form-field', props.className)}>
			{props.children}
		</div>
	);
}
