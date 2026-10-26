import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBHeadingH6Props } from './model';

useMetadata({});

useDefaultProps<DBHeadingH6Props>({});

export default function DBHeadingH6(props: DBHeadingH6Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h6
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-heading', props.className)}
			data-visual-size={props.visualSize}
			data-font-weight={props.fontWeight}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</h6>
	);
}
