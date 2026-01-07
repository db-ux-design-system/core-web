import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import type { AriaCurrent } from '../breadcrumb-item/model';
import { DBIcon } from '../icon';
import type { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	ellipsisAriaLabel: 'Expand to show all breadcrumb items'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);
	const state = useStore<DBBreadcrumbState>({
		isExpanded: false,
		toggleExpanded(): void {
			state.isExpanded = !state.isExpanded;
		},
		iconWeight: (): '24' | '20' => {
			return props.size === 'medium' ? '24' : '20';
		},
		isCollapsed: (): boolean => {
			return (
				!!props.items &&
				!!props.maxItems &&
				props.maxItems > 0 &&
				props.items.length > props.maxItems! &&
				!state.isExpanded
			);
		}
	});

	const renderItemContent = (
		item: NonNullable<DBBreadcrumbProps['items']>[number],
		ariaCurrent?: AriaCurrent
	) => (
		<>
			<Show
				when={item.href}
				else={
					<span aria-current={ariaCurrent}>
						<Show when={item.icon}>
							<DBIcon
								weight={state.iconWeight()}
								icon={item.icon}
							/>
						</Show>
						{item.text}
					</span>
				}>
				<a href={item.href} aria-current={ariaCurrent}>
					<Show when={item.icon}>
						<DBIcon weight={state.iconWeight()} icon={item.icon} />
					</Show>
					{item.text}
				</a>
			</Show>
		</>
	);

	return (
		<nav
			ref={_ref}
			id={props.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size}
			data-separator={props.separator}
			aria-label={
				props.ariaLabel ??
				(props.id ? `Breadcrumb (${props.id})` : 'Breadcrumb')
			}>
			<ol
				class="db-breadcrumb-list"
				id={props.id ? `${props.id}-list` : 'db-breadcrumb-list'}>
				<Show
					when={props.items && props.items.length > 0}
					else={props.children}>
					<Show
						when={state.isCollapsed()}
						else={
							<>
								{props.items!.map((item, index) => (
									<li key={index}>
										{renderItemContent(
											item,
											index === props.items!.length - 1
												? (item.ariaCurrent ?? 'page')
												: undefined
										)}
									</li>
								))}
							</>
						}>
						<>
							<li key={0}>
								{renderItemContent(props.items![0], undefined)}
							</li>
							<li key="ellipsis">
								<button
									type="button"
									class="db-breadcrumb-ellipsis"
									aria-label={
										props.ellipsisAriaLabel ??
										'Expand to show all breadcrumb items'
									}
									aria-expanded={
										state.isExpanded ? 'true' : 'false'
									}
									aria-controls={
										props.id
											? `${props.id}-list`
											: 'db-breadcrumb-list'
									}
									onClick={() => state.toggleExpanded()}>
									…
								</button>
							</li>
							{props
								.items!.slice(
									props.items!.length - (props.maxItems! - 1)
								)
								.map((item, index) => (
									<li key={index + 1}>
										{renderItemContent(
											item,
											index === props.maxItems! - 2
												? (item.ariaCurrent ?? 'page')
												: undefined
										)}
									</li>
								))}
						</>
					</Show>
				</Show>
			</ol>
		</nav>
	);
}
