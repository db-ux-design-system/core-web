import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBHeadingH2Props } from './model';

useMetadata({});

useDefaultProps<DBHeadingH2Props>({});

export default function DBHeadingH2(props: DBHeadingH2Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h2
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-heading', props.className)}
			data-visual-size={props.visualSize}
			data-font-weight={props.fontWeight}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</h2>
	);
}
