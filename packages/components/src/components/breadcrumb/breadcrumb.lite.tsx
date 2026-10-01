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
			/* The expand toggle unmounts on expand, which would drop focus to
			   the document. Move focus to the first revealed crumb (the first
			   of the previously collapsed middle items) once it is in the DOM. */
			requestAnimationFrame(() => {
				if (_ref) {
					const items = (_ref as HTMLElement).querySelectorAll(
						'.db-breadcrumb-item'
					);
					const firstRevealed = items[1]?.querySelector('a');
					firstRevealed?.focus();
				}
			});
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
		},
		/**
		 * Takes the crumbs that must not receive keyboard focus out of the tab
		 * order while keeping every focusable crumb in the natural DOM order
		 * (no positive tabindex, which would create extra page-wide tab
		 * groups). Removed from the order are disabled crumbs, the current-page
		 * crumb, and the middle crumbs that are visually hidden while the trail
		 * is auto-collapsed.
		 */
		syncTabindex: () => {
			const items = Array.from(
				(_ref as HTMLElement).querySelectorAll('.db-breadcrumb-item')
			);

			items.forEach((item, index) => {
				const link = item.querySelector('a');
				if (!link) {
					return;
				}

				const isDisabled =
					link.getAttribute('aria-disabled') === 'true';
				const isCurrentPage =
					link.getAttribute('aria-current') === 'page';
				// While collapsed only the first and last crumb stay visible;
				// the middle crumbs are visually hidden and must leave the order.
				const isHiddenWhileCollapsed =
					state._autoCollapse &&
					!state._expanded &&
					index !== 0 &&
					index !== items.length - 1;

				if (isDisabled || isCurrentPage || isHiddenWhileCollapsed) {
					link.setAttribute('tabindex', '-1');
				} else {
					link.removeAttribute('tabindex');
				}
			});
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

				/* Reset expansion when the trail no longer needs collapsing, so a shrinking list returns to its uncollapsed state. */
				if (!shouldCollapse) {
					state._expanded = false;
				}

				state._autoCollapse = shouldCollapse;
			});
		}
	}, [_ref, props.items, props.maxItems]);

	onUpdate(() => {
		state.syncTabindex();
	}, [state._expanded, state._autoCollapse]);

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
			{/* Rendered after the <ol> so the toggle sits last in DOM/tab order; CSS `order` places it visually after the first crumb (see breadcrumb.scss). */}
			<Show when={state._autoCollapse && !state._expanded}>
				{/* We hide this for screen-reader users they can access the links with the screen-reader anyways */}
				<div class="db-breadcrumb-truncation-item">
					<button
						type="button"
						className="db-button db-breadcrumb-auto-truncation-item-button"
						data-variant="ghost"
						data-size={props.size ?? 'small'}
						aria-label={props.expandText}
						onClick={() => state.handleExpand()}>
						{'\u2026'}
						<DBTooltip>{props.expandText}</DBTooltip>
					</button>
				</div>
			</Show>
		</nav>
	);
}
