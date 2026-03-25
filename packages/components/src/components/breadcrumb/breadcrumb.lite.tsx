import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, parseItems, uuid } from '../../utils';
import type {
	DBBreadcrumbItems,
	DBBreadcrumbProps,
	DBBreadcrumbState
} from './model';

useMetadata({});

const DEFAULT_ELLIPSIS_ARIA_LABEL = 'Expand to show all breadcrumb items';

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	ellipsisAriaLabel: DEFAULT_ELLIPSIS_ARIA_LABEL
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);
	const internalId = uuid();

	const state = useStore<DBBreadcrumbState>({
		listId(): string {
			return props.id
				? `${props.id}-list`
				: `db-breadcrumb-list-${internalId}`;
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
			return isLast ? (item.ariaCurrent ?? 'page') : undefined;
		}
	});

	return (
		<nav
			ref={_ref}
			id={props.id}
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
									<li
										key={index}
										class={cls(
											'db-breadcrumb-item',
											item.className
										)}
										data-size={props.size}>
										<Show
											when={item.href}
											else={
												<span
													aria-current={state.ariaCurrent(
														item,
														index ===
															state.normalizedItems()
																.length -
																1
													)}
													data-icon={item.icon}>
													{item.text}
												</span>
											}>
											<a
												href={item.href}
												aria-current={state.ariaCurrent(
													item,
													index ===
														state.normalizedItems()
															.length -
															1
												)}
												data-icon={item.icon}>
												{item.text}
											</a>
										</Show>
									</li>
								)}
							</For>
						}>
						<>
							{/* jscpd:ignore-end */}
							<Show when={state.normalizedItems()[0]}>
								<li
									key={0}
									class={cls(
										'db-breadcrumb-item',
										state.normalizedItems()[0].className
									)}
									data-size={props.size}>
									<Show
										when={state.normalizedItems()[0].href}
										else={
											<span
												aria-current={state.ariaCurrent(
													state.normalizedItems()[0],
													state.normalizedItems()
														.length === 1
												)}
												data-icon={
													state.normalizedItems()[0]
														.icon
												}>
												{
													state.normalizedItems()[0]
														.text
												}
											</span>
										}>
										<a
											href={
												state.normalizedItems()[0].href
											}
											aria-current={state.ariaCurrent(
												state.normalizedItems()[0],
												state.normalizedItems()
													.length === 1
											)}
											data-icon={
												state.normalizedItems()[0].icon
											}>
											{state.normalizedItems()[0].text}
										</a>
									</Show>
								</li>
							</Show>
							<li key="ellipsis" class="db-breadcrumb-item">
								<button
									type="button"
									class="db-breadcrumb-ellipsis"
									aria-label={
										props.ellipsisAriaLabel ??
										DEFAULT_ELLIPSIS_ARIA_LABEL
									}
									title={
										props.ellipsisAriaLabel ??
										DEFAULT_ELLIPSIS_ARIA_LABEL
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
									<li
										key={index}
										class={cls(
											'db-breadcrumb-item',
											item.className
										)}
										data-size={props.size}>
										<Show
											when={item.href}
											else={
												<span
													aria-current={state.ariaCurrent(
														item,
														index ===
															state.collapsedTailItems()
																.length -
																1
													)}
													data-icon={item.icon}>
													{item.text}
												</span>
											}>
											<a
												href={item.href}
												aria-current={state.ariaCurrent(
													item,
													index ===
														state.collapsedTailItems()
															.length -
															1
												)}
												data-icon={item.icon}>
												{item.text}
											</a>
										</Show>
									</li>
								)}
							</For>
						</>
					</Show>
				</Show>
			</ol>
		</nav>
	);
}
