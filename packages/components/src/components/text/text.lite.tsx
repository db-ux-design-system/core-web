import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBTextProps } from './model';

useMetadata({});

useDefaultProps<DBTextProps>({});

export default function DBText(props: DBTextProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);

	return (
		<span
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-text', props.className)}
			data-size={props.size}
			data-visually-hidden={getBooleanAsString(
				props.visuallyHidden,
				'visuallyHidden'
			)}>
			{props.children}
		</span>
	);
}
