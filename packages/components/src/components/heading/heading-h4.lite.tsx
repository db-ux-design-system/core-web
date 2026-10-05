import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBHeadingH4Props } from './model';

useMetadata({});

useDefaultProps<DBHeadingH4Props>({});

export default function DBHeadingH4(props: DBHeadingH4Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h4
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-heading', props.className)}
			data-visual-size={props.visualSize}
			data-font-weight={props.fontWeight}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</h4>
	);
}
