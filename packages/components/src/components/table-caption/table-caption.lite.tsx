import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTableCaptionProps } from './model';

useMetadata({});

useDefaultProps<DBTableCaptionProps>({});

export default function DBTableCaption(props: DBTableCaptionProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLTableCaptionElement | any>(undefined);
	return (
		<caption
			ref={_ref}
			id={props.id}
			class={cls('db-table-caption', props.className)}>
			{props.children}
		</caption>
	);
}
