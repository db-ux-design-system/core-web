import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBBrandProps } from './model';

useMetadata({});

useDefaultProps<DBBrandProps>({});

export default function DBBrand(props: DBBrandProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-brand', props.className)}
			data-no-text={getBooleanAsString(props.noText)}>
			{props.children}
			<Show when={props.text}>{props.text}</Show>
		</div>
	);
}
