import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBFooterProps } from './model';

useMetadata({});
useDefaultProps<DBFooterProps>({});

export default function DBFooter(props: DBFooterProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLElement | null>(null);

	return (
		<footer
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-footer', props.className)}
			data-width={props.width}>
			{props.children}
		</footer>
	);
}
