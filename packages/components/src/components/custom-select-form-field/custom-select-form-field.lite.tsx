import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBCustomSelectFormFieldProps,
	DBCustomSelectFormFieldState
} from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

useDefaultProps<DBCustomSelectFormFieldProps>({});

export default function DBCustomSelectFormField(
	props: DBCustomSelectFormFieldProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBCustomSelectFormFieldState>({});
	// jscpd:ignore-end

	return (
		<summary
			ref={_ref}
			id={props.id}
			class={cls('db-custom-select-form-field', props.className)}>
			{props.children}
		</summary>
	);
}
