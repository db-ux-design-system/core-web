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

useDefaultProps<DBBreadcrumbItemProps>({ size: 'small' });

export default function DBBreadcrumbItem(props: DBBreadcrumbItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			ref={_ref}
			class={cls('db-breadcrumb-item', props.className)}
			data-size={props.size}>
			<Show
				when={props.href}
				else={
					<span aria-current={props.ariaCurrent} data-icon={props.icon}>
						<Show when={props.icon}>
							<DBIcon
								weight={props.size === 'medium' ? '24' : '20'}
								icon={props.icon}
								aria-hidden="true"
							/>
						</Show>
						{props.text ? props.text : props.children}
					</span>
				}>
				<a
					id={props.id}
					href={props.href}
					aria-current={props.ariaCurrent}
					data-icon={props.icon}
					style={
						props.disabled
							? { pointerEvents: 'none', opacity: 0.5 }
							: {}
					}>
					<Show when={props.icon}>
						<DBIcon
							weight={props.size === 'medium' ? '24' : '20'}
							icon={props.icon}
							aria-hidden="true"
						/>
					</Show>
					{props.text ? props.text : props.children}
				</a>
			</Show>
		</li>
	);
}
