import { useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBHeadingH6Props } from './model';

useMetadata({});

export default function DBHeadingH6(props: DBHeadingH6Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h6
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-heading', props.className)}
			data-size={props.size}
			data-font-weight={props.fontWeight}
			data-alignment={props.alignment}
			data-paragraph-spacing={getBooleanAsString(
				props.paragraphSpacing,
				'paragraphSpacing'
			)}>
			{props.children}
		</h6>
	);
}
