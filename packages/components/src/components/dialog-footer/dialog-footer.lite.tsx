import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBDialogFooterProps } from './model';

useMetadata({});

useDefaultProps<DBDialogFooterProps>({});

export default function DBDialogFooter(props: DBDialogFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<footer
			ref={_ref}
			id={props.id || props.propOverrides?.id}
			class={cls('db-dialog-footer', props.className)}>
			{props.children}
		</footer>
	);
}
