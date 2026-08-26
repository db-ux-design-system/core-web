import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBFooterContentProps } from './model';

useMetadata({});
useDefaultProps<DBFooterContentProps>({});

export default function DBFooterContent(props: DBFooterContentProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-footer-content', props.className)}>
			<div class="db-footer-content-container">{props.children}</div>
		</div>
	);
}
