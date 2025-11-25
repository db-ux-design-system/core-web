import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBIcon } from '../icon';
import type { DBBreadcrumbProps, DBBreadcrumbState } from './model';
import DBTooltip from '../tooltip/tooltip.lite';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	maxItems: undefined,
	collapsedMenu: false,
	items: undefined,
	ellipsisAriaLabel: 'Show all breadcrumb items'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);
	const listId = props.id ? `${props.id}-list` : 'db-breadcrumb-list';

	const state = useStore<DBBreadcrumbState>({
		isExpanded: false,
		toggleExpanded() {
			state.isExpanded = !state.isExpanded;
		}
	});

	function renderBreadcrumbContent(item: any, isLast: boolean) {
		const ariaCurrent = isLast ? item.ariaCurrent : undefined;

		if (item.href) {
			return (
				<a href={item.href} aria-current={ariaCurrent}>
					{item.icon && <DBIcon icon={item.icon} />}
					{item.text}
				</a>
			);
		}

		return (
			<span aria-current={ariaCurrent}>
				{item.icon && <DBIcon icon={item.icon} />}
				{item.text}
			</span>
		);
	}



	return (
		<nav
			ref={_ref}
			id={props.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size}
			data-separator={props.separator}
			aria-label="Breadcrumb">
			<ol class="db-breadcrumb-list" id={listId}>
				{props.items && props.items.length > 0 ? (
					<>
						{props.maxItems &&
						props.maxItems > 0 &&
						props.items.length > props.maxItems &&
						!state.isExpanded ? (
							<>
								{/* Collapsed view: first item + ellipsis + last items */}
								<li key={0}>
									{renderBreadcrumbContent(props.items[0], false)}
								</li>

								{/* Ellipsis button */}
								<li key="ellipsis">
									<button
										type="button"
										class="db-breadcrumb-ellipsis"
										aria-label={props.ellipsisAriaLabel}
										aria-expanded={state.isExpanded ? 'true' : 'false'}
										aria-controls={listId}
										onClick={() => state.toggleExpanded()}>
										…
										<DBTooltip>
											{props.ellipsisAriaLabel}
										</DBTooltip>
									</button>
								</li>

								{/* Last (maxItems - 1) items */}
								{props.items
									.slice(props.items.length - (props.maxItems - 1))
									.map((item, index) => (
										<li key={index + 1}>
											{renderBreadcrumbContent(item, index === props.maxItems! - 2)}
										</li>
									))}
							</>
						) : (
							<>
								{/* All items (normal or expanded view) */}
								{props.items.map((item, index) => (
									<li key={index}>
										{renderBreadcrumbContent(item, index === props.items!.length - 1)}
									</li>
								))}
							</>
						)}
					</>
				) : (
					<>{props.children}</>
				)}
			</ol>
		</nav>
	);
}
