import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBSectionProps } from './model';

useMetadata({});
useDefaultProps<DBSectionProps>({});

export default function DBSection(props: DBSectionProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<section
			ref={_ref}
			id={props.id}
			class={cls('db-section', props.className, props.id)}
			data-spacing={props.spacing || 'medium'}
			data-width={props.width}>
			{props.children}{props.id}
		</section>
	);
}
