import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBParagraphGroupProps } from './model';

useMetadata({});

useDefaultProps<DBParagraphGroupProps>({});

export default function DBParagraphGroup(props: DBParagraphGroupProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-paragraph-group', props.className)}
			data-size={props.size}
			data-alignment={props.alignment}
			data-gap={props.gap}>
			{props.children}
		</div>
	);
}
