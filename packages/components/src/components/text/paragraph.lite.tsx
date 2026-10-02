import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBParagraphProps } from './model';

useMetadata({});

useDefaultProps<DBParagraphProps>({});

export default function DBParagraph(props: DBParagraphProps) {
	const _ref = useRef<HTMLParagraphElement | any>(null);

	return (
		<p
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-paragraph', props.className)}
			data-size={props.size}
			data-alignment={props.alignment}>
			{props.children}
		</p>
	);
}
