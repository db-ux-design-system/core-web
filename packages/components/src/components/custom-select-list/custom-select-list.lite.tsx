import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomSelectListProps } from './model';

useMetadata({});

useDefaultProps<DBCustomSelectListProps>({});

export default function DBCustomSelectList(props: DBCustomSelectListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLFieldSetElement | any>(null);

	return (
		<fieldset
			ref={_ref}
			id={props.id}
			className={cls('db-custom-select-list', props.className)}>
			{props.label && <legend>{props.label}</legend>}
			<ul>{props.children}</ul>
		</fieldset>
	);
}
