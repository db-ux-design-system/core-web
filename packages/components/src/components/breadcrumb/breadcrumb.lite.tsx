import {
	For,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, parseItems } from '../../utils';
import DBBreadcrumbItem from '../breadcrumb-item/breadcrumb-item.lite';
import { DBBreadcrumbItemDefaultProps } from '../breadcrumb-item/model';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	expandText: 'Show more breadcrumbs'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBBreadcrumbState>({
		_autoCollapse: false,
		_expanded: false,
		handleExpand: () => {
			state._expanded = true;
		},
		getItems: () => {
			return parseItems<DBBreadcrumbItemDefaultProps>(props.items);
		},
		getAriaCurrent: (
			item: DBBreadcrumbItemDefaultProps,
			index: number
		): DBBreadcrumbItemDefaultProps['ariaCurrent'] | undefined => {
			if (item.ariaCurrent) {
				return item.ariaCurrent;
			}
			return index === state.getItems().length - 1 ? 'page' : undefined;
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref) {
			requestAnimationFrame(() => {
				const hasCollapseItem = (_ref as HTMLElement).querySelector(
					'.db-breadcrumb-truncation-item-toggle'
				);
				const breadCrumbItems = (_ref as HTMLElement).querySelectorAll(
					'.db-breadcrumb-item'
				);
				const shouldCollapse =
					!hasCollapseItem &&
					breadCrumbItems.length > Math.max(props.maxItems ?? 4, 2);
				state._autoCollapse = shouldCollapse;
				/* Reset expansion when the trail no longer needs collapsing, so a shrinking list returns to its uncollapsed state. */
				if (!shouldCollapse) {
					state._expanded = false;
				}
			});
		}
	}, [_ref, props.items, props.maxItems]);

	return (
		<nav
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size ?? 'small'}
			data-separator={props.separator}
			data-collapsed={getBooleanAsString(
				state._autoCollapse && !state._expanded
			)}>
			{/* Toggle kept outside the <ol> on purpose (see breadcrumb.scss). */}
			<Show when={state._autoCollapse && !state._expanded}>
				<div class="db-breadcrumb-truncation-item">
					<button
						type="button"
						className="db-button db-breadcrumb-auto-truncation-item-button"
						data-variant="ghost"
						data-size={props.size ?? 'small'}
						aria-label={props.expandText}
						onClick={() => state.handleExpand()}>
						{/* Visible ellipsis as text (design); accessible name */}
						{/* comes from aria-label. Escaped so source stays ASCII. */}
						<span aria-hidden="true">{'\u2026'}</span>
						<DBTooltip>{props.expandText}</DBTooltip>
					</button>
				</div>
			</Show>
			<ol>
				<Show when={props.items} else={props.children}>
					<For each={state.getItems()}>
						{(
							item: DBBreadcrumbItemDefaultProps,
							index: number
						) => (
							<DBBreadcrumbItem
								key={`breadcrumb-item-${index}`}
								text={item.text}
								href={item.href}
								target={item.target}
								rel={item.rel}
								hreflang={item.hreflang}
								referrerPolicy={item.referrerPolicy}
								icon={item.icon}
								showIcon={item.showIcon}
								noText={item.noText}
								disabled={item.disabled}
								ariaCurrent={state.getAriaCurrent(item, index)}
							/>
						)}
					</For>
				</Show>
			</ol>
		</nav>
	);
}
