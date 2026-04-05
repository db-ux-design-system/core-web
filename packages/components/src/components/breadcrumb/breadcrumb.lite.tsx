import {
	For,
	onMount,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, parseItems, uuid } from '../../utils';
import DBBreadcrumbItem from '../breadcrumb-item/breadcrumb-item.lite';
import type { DBBreadcrumbItems } from '../breadcrumb-item/model';
import type { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	ariaLabel: 'Breadcrumb',
	ellipsisAriaLabel: 'Expand to show all breadcrumb items'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);

	const state = useStore<DBBreadcrumbState>({
		internalListId: undefined,
		listId(): string {
			return props.id ? `${props.id}-list` : (state.internalListId ?? '');
		},
		isExpanded: false,
		toggleExpanded(): void {
			state.isExpanded = !state.isExpanded;
		},
		normalizedItems(): DBBreadcrumbItems[] {
			return parseItems<DBBreadcrumbItems>(props.items);
		},
		isCollapsed(): boolean {
			const normalized = state.normalizedItems();
			const maxItems = props.maxItems ?? 0;
			return (
				normalized.length > 0 &&
				maxItems > 0 &&
				normalized.length > maxItems &&
				!state.isExpanded
			);
		},
		collapsedTailItems(): DBBreadcrumbItems[] {
			const normalized = state.normalizedItems();
			const maxItems = props.maxItems ?? 0;
			const collapsedTailCount = maxItems > 0 ? maxItems - 1 : 0;

			return collapsedTailCount > 0
				? normalized.slice(normalized.length - collapsedTailCount)
				: [];
		},
		ariaCurrent(item: DBBreadcrumbItems, isLast: boolean) {
			if (item.ariaCurrent) {
				return item.ariaCurrent;
			}
			return isLast ? 'page' : undefined;
		}
	});

	onMount(() => {
		state.internalListId = `db-breadcrumb-list-${uuid()}`;
	});

	return (
		<nav
			ref={_ref}
			id={props.id}
			aria-label={props.ariaLabel}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size}
			data-separator={props.separator}>
			<ol class="db-breadcrumb-list" id={state.listId()}>
				<Show
					when={state.normalizedItems().length > 0}
					else={props.children}>
					{/* jscpd:ignore-start */}
					<Show
						when={state.isCollapsed()}
						else={
							<For each={state.normalizedItems()}>
								{(item, index) => (
									<DBBreadcrumbItem
										key={index}
										className={item.className}
										size={props.size}
										href={item.href}
										ariaCurrent={state.ariaCurrent(
											item,
											index ===
												state.normalizedItems().length -
													1
										)}
										icon={item.icon}
										text={item.text}
									/>
								)}
							</For>
						}>
						<>
							{/* jscpd:ignore-end */}
							<Show when={state.normalizedItems()[0]}>
								<DBBreadcrumbItem
									key={0}
									className={
										state.normalizedItems()[0].className
									}
									size={props.size}
									href={state.normalizedItems()[0].href}
									ariaCurrent={state.ariaCurrent(
										state.normalizedItems()[0],
										state.normalizedItems().length === 1
									)}
									icon={state.normalizedItems()[0].icon}
									text={state.normalizedItems()[0].text}
								/>
							</Show>
							<li key="ellipsis" class="db-breadcrumb-item">
								<button
									type="button"
									class="db-breadcrumb-ellipsis"
									aria-label={
										props.ellipsisAriaLabel ??
										'Expand to show all breadcrumb items'
									}
									title={
										props.ellipsisAriaLabel ??
										'Expand to show all breadcrumb items'
									}
									aria-expanded={getBooleanAsString(
										state.isExpanded
									)}
									aria-controls={state.listId()}
									onClick={() => state.toggleExpanded()}>
									…
								</button>
							</li>
							<For each={state.collapsedTailItems()}>
								{(item, index) => (
									<DBBreadcrumbItem
										key={index}
										className={item.className}
										size={props.size}
										href={item.href}
										ariaCurrent={state.ariaCurrent(
											item,
											index ===
												state.collapsedTailItems()
													.length -
													1
										)}
										icon={item.icon}
										text={item.text}
									/>
								)}
							</For>
						</>
					</Show>
				</Show>
			</ol>
		</nav>
	);
}
