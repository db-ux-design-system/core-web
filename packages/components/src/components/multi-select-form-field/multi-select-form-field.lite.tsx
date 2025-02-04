import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBMultiSelectFormFieldProps,
	DBMultiSelectFormFieldState
} from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

useDefaultProps<DBMultiSelectFormFieldProps>({});

export default function DBMultiSelectFormField(
	props: DBMultiSelectFormFieldProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectFormFieldState>({});
	// jscpd:ignore-end

	return (
		<summary
			onClick={(event: ClickEvent<HTMLElement>) => {
				if (props.onClick) {
					props.onClick(event);
				}
			}}
			ref={_ref}
			id={props.id}
			class={cls('db-multi-select-form-field', props.className)}>
			{props.children}
		</summary>
	);
}
