import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBTextGroupProps } from './model';

useMetadata({});

useDefaultProps<DBTextGroupProps>({});

export default function DBTextGroup(props: DBTextGroupProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-text-group', props.className)}
			data-alignment={props.alignment}
			data-text-spacing={getBooleanAsString(
				props.textSpacing,
				'textSpacing'
			)}>
			{props.children}
		</div>
	);
}
