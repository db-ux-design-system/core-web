import { useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomHeadingProps } from './model';

useMetadata({});

export default function DBCustomHeading(props: DBCustomHeadingProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-custom-heading', props.className)}
			data-alignment={props.alignment}>
			{props.children}
		</div>
	);
}
