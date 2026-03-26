import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import type { DBBreadcrumbItemProps } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbItemProps>({ size: 'small' });

export default function DBBreadcrumbItem(props: DBBreadcrumbItemProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const _ref = useRef<any>(null);

	return (
		<li
			ref={_ref}
			class={cls('db-breadcrumb-item', props.className)}
			data-size={props.size}>
			<Show
				when={props.href}
				else={
					<span aria-current={props.ariaCurrent}>
						<Show when={props.icon}>
							<span
								aria-hidden="true"
								class="db-icon"
								data-icon={props.icon}
								data-icon-weight={
									props.size === 'medium' ? '24' : '20'
								}
							/>
						</Show>
						{props.text ? props.text : props.children}
					</span>
				}>
				<a
					id={props.id}
					href={props.href}
					aria-current={props.ariaCurrent}
					aria-disabled={getBooleanAsString(props.disabled)}
					tabIndex={props.disabled ? -1 : 0}
					style={
						props.disabled
							? { pointerEvents: 'none', opacity: '0.5' }
							: {}
					}>
					<Show when={props.icon}>
						<span
							aria-hidden="true"
							class="db-icon"
							data-icon={props.icon}
							data-icon-weight={
								props.size === 'medium' ? '24' : '20'
							}
						/>
					</Show>
					{props.text ? props.text : props.children}
				</a>
			</Show>
		</li>
	);
}
