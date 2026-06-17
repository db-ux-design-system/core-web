import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBDrawerFooterProps } from './model';

useMetadata({});

useDefaultProps<DBDrawerFooterProps>({});

export default function DBDrawerFooter(props: DBDrawerFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);

	return (
		<footer
			ref={_ref}
			id={props.id}
			class={cls('db-drawer-footer', props.className)}>
			{props.children}
		</footer>
	);
}
