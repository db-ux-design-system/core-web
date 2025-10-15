import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomSelectListProps } from './model';

useMetadata({});

useDefaultProps<DBCustomSelectListProps>({});

export default function DBCustomSelectList(props: DBCustomSelectListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			role={props.multiple ? 'group' : 'radiogroup'}
			aria-label={props.label}
			ref={_ref}
			id={props.id}
			className={cls('db-custom-select-list', props.className)}>
			<ul>{props.children}</ul>
		</div>
	);
}
