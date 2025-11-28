import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBIcon } from '../icon';
import type { DBBreadcrumbItemProps } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbItemProps>({});

export default function DBBreadcrumbItem(props: DBBreadcrumbItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li ref={_ref} id={props.id} class={cls(props.className)}>
			{props.href && !props.disabled ? (
				<a href={props.href} aria-current={props.ariaCurrent}>
					{props.icon && <DBIcon icon={props.icon} />}
					{props.text ? props.text : props.children}
				</a>
			) : (
				<span aria-current={props.ariaCurrent}>
					{props.icon && <DBIcon icon={props.icon} />}
					{props.text ? props.text : props.children}
				</span>
			)}
		</li>
	);
}
