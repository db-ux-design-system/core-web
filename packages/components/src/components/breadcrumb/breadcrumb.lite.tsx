import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
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

	const parseItems = (): DBBreadcrumbItems[] => {
		if (!props.items) {
			return [];
		}

		if (Array.isArray(props.items)) {
			return props.items;
		}

		if (typeof props.items === 'string') {
			try {
				const parsed = JSON.parse(props.items);

				return Array.isArray(parsed) ? parsed : [];
			} catch (error) {
				return [];
			}
		}

		return [];
	};

	const items = parseItems();

	const state = useStore<DBBreadcrumbState>({
		uniqueId: uuid(),
		isExpanded: false,
		toggleExpanded(): void {
			state.isExpanded = !state.isExpanded;
		},
		iconWeight: (): '24' | '20' => {
			return props.size === 'medium' ? '24' : '20';
		},
		items: (): DBBreadcrumbItems[] => {
			return items;
		},
		isCollapsed: (): boolean => {
			return (
				items.length > 0 &&
				!!props.maxItems &&
				props.maxItems! > 0 &&
				items.length > props.maxItems! &&
				!state.isExpanded
			);
		}
	});

	const renderItem = (
		item: DBBreadcrumbItems,
		index: number,
		isLast: boolean
	) => (
		<li key={index}>
			<Show
				when={item.href}
				else={
					<span
						aria-current={
							isLast ? (item.ariaCurrent ?? 'page') : undefined
						}>
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
					aria-current={
						isLast ? (item.ariaCurrent ?? 'page') : undefined
					}>
					<Show when={item.icon}>
						<DBIcon weight={state.iconWeight()} icon={item.icon} />
					</Show>
					{item.text}
				</a>
			</Show>
		</li>
	);

	const shouldRenderItems = items.length > 0;
	const collapsedTailCount =
		props.maxItems && props.maxItems > 0 ? props.maxItems - 1 : 0;
	const collapsedTailItems =
		props.maxItems && collapsedTailCount > 0
			? items.slice(items.length - collapsedTailCount)
			: [];

	const renderedItems = items.map((item, index) => {
		return renderItem(item, index, index === items.length - 1);
	});

	const renderedCollapsedTail = collapsedTailItems.map((item, index) => {
		return renderItem(
			item,
			index + 1,
			index === collapsedTailItems.length - 1
		);
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
				{shouldRenderItems ? (
					state.isCollapsed() ? (
						<>
							{renderItem(items[0], 0, items.length === 1)}
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
							{renderedCollapsedTail}
						</>
					) : (
						<>{renderedItems}</>
					)
				) : (
					<>{props.children}</>
				)}
			</ol>
		</nav>
	);
}
