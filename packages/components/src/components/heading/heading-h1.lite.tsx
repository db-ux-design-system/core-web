import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBHeadingH1Props } from './model';

useMetadata({});

useDefaultProps<DBHeadingH1Props>({});

export default function DBHeadingH1(props: DBHeadingH1Props) {
	const _ref = useRef<HTMLHeadingElement | any>(null);

	return (
		<h1
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
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</h1>
	);
}
