import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBIcon } from '../icon';
import type { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron',
	maxItems: undefined,
	// collapsedMenu: false, // disabled
	items: undefined,
	ellipsisAriaLabel: 'Show all breadcrumb items'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);
	function itemsArray() {
		return (props.items ?? []) as any[];
	}
	function itemsLen() {
		return itemsArray().length;
	}
	function shouldCollapse() {
		return (
			!!props.maxItems &&
			props.maxItems! > 0 &&
			itemsLen() > props.maxItems!
		);
	}
	function headItem() {
		return itemsArray()[0];
	}
	function tailItems() {
		// when collapsed, show last (maxItems - 1) items
		const count = Math.max(props.maxItems! - 1, 0);
		return itemsArray().slice(itemsLen() - count);
	}
	function isTailLast(index: number) {
		// tail list length equals (maxItems - 1); last index is maxItems - 2
		return index === props.maxItems! - 2;
	}
	function isLast(index: number) {
		return index === itemsLen() - 1;
	}

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
			<ol
				class="db-breadcrumb-list"
				id={props.id ? `${props.id}-list` : 'db-breadcrumb-list'}>
				{itemsLen() > 0 ? (
					<>
						{shouldCollapse() && !state.isExpanded ? (
							<>
								<li key={0}>
									{headItem().href ? (
										<a href={headItem().href}>
											{headItem().icon && (
												<DBIcon
													icon={headItem().icon}
												/>
											)}
											{headItem().text}
										</a>
									) : (
										<span>
											{headItem().icon && (
												<DBIcon
													icon={headItem().icon}
												/>
											)}
											{headItem().text}
										</span>
									)}
								</li>
								<li key="ellipsis">
									<button
										type="button"
										class="db-breadcrumb-ellipsis"
										aria-label={props.ellipsisAriaLabel}
										aria-expanded={
											state.isExpanded ? 'true' : 'false'
										}
										aria-controls="db-breadcrumb-list"
										onClick={() => state.toggleExpanded()}>
										…
									</button>
								</li>
								{tailItems().map((item: any, index: number) => (
									<li key={index + 1}>
										{item.href ? (
											<a
												href={item.href}
												aria-current={
													isTailLast(index)
														? item.ariaCurrent
														: undefined
												}>
												{item.icon && (
													<DBIcon icon={item.icon} />
												)}
												{item.text}
											</a>
										) : (
											<span
												aria-current={
													isTailLast(index)
														? item.ariaCurrent
														: undefined
												}>
												{item.icon && (
													<DBIcon icon={item.icon} />
												)}
												{item.text}
											</span>
										)}
									</li>
								))}
							</>
						) : (
							<>
								{itemsArray().map(
									(item: any, index: number) => (
										<li key={index}>
											{item.href ? (
												<a
													href={item.href}
													aria-current={
														isLast(index)
															? item.ariaCurrent
															: undefined
													}>
													{item.icon && (
														<DBIcon
															icon={item.icon}
														/>
													)}
													{item.text}
												</a>
											) : (
												<span
													aria-current={
														isLast(index)
															? item.ariaCurrent
															: undefined
													}>
													{item.icon && (
														<DBIcon
															icon={item.icon}
														/>
													)}
													{item.text}
												</span>
											)}
										</li>
									)
								)}
							</>
						)}
					</>
				) : null}
			</ol>
		</nav>
	);
}
