import { useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBCustomHeadingProps } from './model';

useMetadata({});

export default function DBCustomHeading(props: DBCustomHeadingProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-heading', props.className)}
			role="heading"
			aria-level={props.semanticLevel ?? 2}
			data-size={props.size}
			data-font-weight={props.fontWeight}
			data-alignment={props.alignment}
			data-paragraph-spacing={getBooleanAsString(
				props.paragraphSpacing,
				'paragraphSpacing'
			)}>
			{props.children}
		</div>
	);
}
