import {
	Show,
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
										<Show
											when={item.href}
											else={
												<span
													aria-current={
														index ===
														props.items!.length - 1
															? (item.ariaCurrent ??
																'page')
															: undefined
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
													index ===
													props.items!.length - 1
														? (item.ariaCurrent ??
															'page')
														: undefined
												}>
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
								))}
							</>
						}>
						<>
							<li key={0}>
								<Show
									when={props.items![0].href}
									else={
										<span aria-current={undefined}>
											<Show when={props.items![0].icon}>
												<DBIcon
													weight={state.iconWeight()}
													icon={props.items![0].icon}
												/>
											</Show>
											{props.items![0].text}
										</span>
									}>
									<a href={props.items![0].href}>
										<Show when={props.items![0].icon}>
											<DBIcon
												weight={state.iconWeight()}
												icon={props.items![0].icon}
											/>
										</Show>
										{props.items![0].text}
									</a>
								</Show>
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
										<Show
											when={item.href}
											else={
												<span
													aria-current={
														index ===
														props.maxItems! - 2
															? (item.ariaCurrent ??
																'page')
															: undefined
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
													index ===
													props.maxItems! - 2
														? (item.ariaCurrent ??
															'page')
														: undefined
												}>
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
								))}
						</>
					</Show>
				</Show>
			</ol>
		</nav>
	);
}
