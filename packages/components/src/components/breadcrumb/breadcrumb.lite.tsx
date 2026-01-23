import {
	For,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, uuid } from '../../utils';
import { DBIcon } from '../icon';
import type {
	DBBreadcrumbItems,
	DBBreadcrumbProps,
	DBBreadcrumbState
} from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	ellipsisAriaLabel: 'Expand to show all breadcrumb items'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);

	const state = useStore<DBBreadcrumbState>({
		uniqueId: uuid(),
		isExpanded: false,
		toggleExpanded(): void {
			state.isExpanded = !state.isExpanded;
		},
		iconWeight: (): '24' | '20' => {
			return props.size === 'medium' ? '24' : '20';
		},
		parseItems(): DBBreadcrumbItems[] {
			const value = props.items;
			if (!value) {
				return [];
			}

			if (Array.isArray(value)) {
				return value;
			}

			if (typeof value === 'string') {
				try {
					const parsed = JSON.parse(value);
					return Array.isArray(parsed) ? parsed : [];
				} catch (error) {
					return [];
				}
			}

			return [];
		},
		normalizedItems(): DBBreadcrumbItems[] {
			return state.parseItems();
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
			data-separator={props.separator}
			aria-label={
				props.ariaLabel ??
				(props.id
					? `Breadcrumb (${props.id})`
					: `Breadcrumb (${state.uniqueId})`)
			}>
			<ol
				class="db-breadcrumb-list"
				id={props.id ? `${props.id}-list` : 'db-breadcrumb-list'}>
				<Show
					when={state.normalizedItems().length > 0}
					else={<>{props.children}</>}>
					{/* jscpd:ignore-start */}
					<Show
						when={state.isCollapsed()}
						else={
							<For each={state.normalizedItems()}>
								{(item, index) => (
									<li>
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
													)}>
													<Show when={item.icon}>
														<DBIcon
															weight={state.iconWeight()}
															icon={item.icon}
														/>
													</Show>
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
												)}>
												<Show when={item.icon}>
													<DBIcon
														weight={state.iconWeight()}
														icon={item.icon}
													/>
												</Show>
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
								<li key={0}>
									<Show
										when={state.normalizedItems()[0].href}
										else={
											<span
												aria-current={state.ariaCurrent(
													state.normalizedItems()[0],
													state.normalizedItems()
														.length === 1
												)}>
												<Show
													when={
														state.normalizedItems()[0]
															.icon
													}>
													<DBIcon
														weight={state.iconWeight()}
														icon={
															state.normalizedItems()[0]
																.icon
														}
													/>
												</Show>
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
											)}>
											<Show
												when={
													state.normalizedItems()[0]
														.icon
												}>
												<DBIcon
													weight={state.iconWeight()}
													icon={
														state.normalizedItems()[0]
															.icon
													}
												/>
											</Show>
											{state.normalizedItems()[0].text}
										</a>
									</Show>
								</li>
							</Show>
							<li key="ellipsis">
								<button
									type="button"
									class="db-breadcrumb-ellipsis"
									aria-label={
										props.ellipsisAriaLabel ??
										'Expand to show all breadcrumb items'
									}
									aria-expanded={getBooleanAsString(
										state.isExpanded
									)}
									aria-controls={
										props.id
											? `${props.id}-list`
											: 'db-breadcrumb-list'
									}
									onClick={() => state.toggleExpanded()}>
									…
								</button>
							</li>
							<For each={state.collapsedTailItems()}>
								{(item, index) => (
									<li>
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
													)}>
													<Show when={item.icon}>
														<DBIcon
															weight={state.iconWeight()}
															icon={item.icon}
														/>
													</Show>
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
												)}>
												<Show when={item.icon}>
													<DBIcon
														weight={state.iconWeight()}
														icon={item.icon}
													/>
												</Show>
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
