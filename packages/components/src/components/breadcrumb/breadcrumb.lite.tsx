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

	const state = useStore<DBBreadcrumbState>({
		isExpanded: false,
		toggleExpanded() {
			state.isExpanded = !state.isExpanded;
		}
	});

	return (
		<nav
			ref={_ref}
			id={props.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size}
			data-separator={props.separator}
			aria-label={props.ariaLabel ?? 'Breadcrumb'}>
			<ol class="db-breadcrumb-list" id={props.id || 'db-breadcrumb-list'}>
				{props.items && props.items.length > 0 ? (
					<>
						{props.maxItems &&
						props.maxItems > 0 &&
						props.items.length > props.maxItems &&
						!state.isExpanded ? (
							<>
								{/* Collapsed view: first item + ellipsis + last items */}
								<li key={0}>
									{props.items[0].href ? (
										<a href={props.items[0].href}>
											{props.items[0].icon && <DBIcon icon={props.items[0].icon} />}
											{props.items[0].text}
										</a>
									) : (
										<span>
          									{props.items[0].icon && <DBIcon icon={props.items[0].icon} />}
											{props.items[0].text}
        								</span>
									)}
								</li>

								{/* Ellipsis button */}
								<li key="ellipsis">
									<button
										type="button"
										class="db-breadcrumb-ellipsis"
										aria-label={props.ellipsisAriaLabel}
										aria-expanded={state.isExpanded ? 'true' : 'false'}
										aria-controls={props.id || 'db-breadcrumb-list'}
										onClick={state.toggleExpanded}>
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
											{item.href ? (
												<a
													href={item.href}
													aria-current={
														index === props.maxItems! - 2
															? item.ariaCurrent
															: undefined
													}
												>
													{item.icon && <DBIcon icon={item.icon} />}
													{item.text}
												</a>
											) : (
												<span
													aria-current={
														index === props.maxItems! - 2
															? item.ariaCurrent
															: undefined
													}
												>
          											{item.icon && <DBIcon icon={item.icon} />}
													{item.text}
        										</span>
											)}
										</li>
									))
								}
							</>
						) : (
							<>
								{/* All items (normal or expanded view) */}
								{props.items.map((item, index) => (
									<li key={index}>
										{item.href ? (
											<a
												href={item.href}
												aria-current={
													index === props.items!.length - 1
														? item.ariaCurrent
														: undefined
												}
											>
												{item.icon && <DBIcon icon={item.icon} />}
												{item.text}
											</a>
										) : (
											<span
												aria-current={
													index === props.items!.length - 1
														? item.ariaCurrent
														: undefined
												}
											>
												{item.icon && <DBIcon icon={item.icon} />}
												{item.text}
      										</span>
										)}
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
