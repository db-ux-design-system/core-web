import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { DBCustomSelectFormFieldProps } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBCustomSelectFormFieldProps>({});

export default function DBCustomSelectFormField(
	props: DBCustomSelectFormFieldProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<summary
			ref={_ref}
			id={props.id}
			class={cls('db-custom-select-form-field', props.className)}>
			{props.children}
		</summary>
	);
}
