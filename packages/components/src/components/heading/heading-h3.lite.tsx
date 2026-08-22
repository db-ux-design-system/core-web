import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBHeadingH3Props } from './model';

useMetadata({});

useDefaultProps<DBHeadingH3Props>({});

export default function DBHeadingH3(props: DBHeadingH3Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h3
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
		</h3>
	);
}
