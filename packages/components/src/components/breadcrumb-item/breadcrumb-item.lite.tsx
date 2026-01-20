import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBIcon } from '../icon';
import type { DBBreadcrumbItemProps } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbItemProps>({});

export default function DBBreadcrumbItem(props: DBBreadcrumbItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li ref={_ref} id={props.id} class={cls(props.className)}>
			<Show
				when={props.href && !props.disabled}
				else={
					<span aria-current={props.ariaCurrent}>
						<Show when={props.icon}>
							<DBIcon icon={props.icon} />
						</Show>
						{props.text ? props.text : props.children}
					</span>
				}>
				<a href={props.href} aria-current={props.ariaCurrent}>
					<Show when={props.icon}>
						<DBIcon icon={props.icon} />
					</Show>
					{props.text ? props.text : props.children}
				</a>
			</Show>
		</li>
	);
}
