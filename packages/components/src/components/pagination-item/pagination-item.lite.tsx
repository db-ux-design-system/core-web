import { Show, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import type { DBPaginationItemProps } from './model';

useMetadata({});

export default function DBPaginationItem(props: DBPaginationItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-pagination-item', props.className)}
			ref={_ref}>
			<Show when={props.text} else={props.children}>
				<button type="button">{props.text}</button>
			</Show>
		</li>
	);
}
