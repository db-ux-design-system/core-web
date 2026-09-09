import { handleFixedPopover } from './floating-components';

/**
 * Adjusts a sub-navigation's position so it stays within the viewport.
 * Called from _handleMouseEnter for the specific hovered item's menu.
 *
 * When the menu overflows the right edge of the viewport it flips to
 * open on the left side of its parent (proper CSS flip via inset
 * properties). Vertical overflow is handled with a pixel-based
 * translateY so the menu stays reachable.
 *
 * Only applies to menus NOT already positioned by handleFixedPopover
 * (i.e., nested sub-navigations that use position: absolute).
 */
export const adjustNestedSubNavigationPosition = (
	element: HTMLElement
): void => {
	if (!element) return;

	// Skip menus already positioned by handleFixedPopover (level-0)
	if (element.dataset['correctedPlacement']) return;

	// Only adjust on desktop (absolute-positioned popover menus)
	const computedStyle = getComputedStyle(element);
	if (computedStyle.position !== 'absolute') return;

	// Clear any previous adjustments to measure the natural position
	element.style.transform = '';
	element.style.insetInlineStart = '';
	element.style.insetInlineEnd = '';
	delete element.dataset['outsideVx'];

	// Read the gap the CSS uses between parent and menu
	const gap =
		computedStyle.getPropertyValue('--db-spacing-fixed-xs').trim() ||
		'0.375rem';

	const rect = element.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;

	// Small viewport margin to avoid flush-against-edge placement
	const viewportMargin = 8;

	// --- Horizontal: flip to the other side if overflowing ---
	if (rect.right > innerWidth - viewportMargin) {
		// Flip: open to the left of the parent
		element.style.insetInlineStart = 'auto';
		element.style.insetInlineEnd = `calc(100% + ${gap})`;
		element.dataset['outsideVx'] = 'right';

		// Re-measure after flip — if now overflows left, revert
		const flippedRect = element.getBoundingClientRect();
		if (flippedRect.left < viewportMargin) {
			element.style.insetInlineStart = '';
			element.style.insetInlineEnd = '';
			delete element.dataset['outsideVx'];
		}
	}

	// --- Vertical: shift with translateY ---
	const measuredRect = element.getBoundingClientRect();
	let translateY = 0;

	if (measuredRect.bottom > innerHeight - viewportMargin) {
		translateY = innerHeight - viewportMargin - measuredRect.bottom;
	}

	if (measuredRect.top + translateY < viewportMargin) {
		translateY = viewportMargin - measuredRect.top;
	}

	// Always set inline transform to prevent any CSS fallback
	element.style.transform = `translate(0px, ${translateY}px)`;
};

export type TriangleData = {
	itemRect: DOMRect;
	parentElementWidth: number;
	subNavigationHeight: number;
	padding: number;
	/**
	 * The direction the sub-navigation opens relative to the element.
	 * 'right' = sub-menu is to the right of the item
	 * 'left' = sub-menu is to the left of the item
	 * 'bottom' = sub-menu is below the item
	 */
	openDirection: 'left' | 'right' | 'bottom';
};

export const isEventTargetNavigationItem = (event: unknown): boolean => {
	const { target } = event as { target: HTMLElement };
	return Boolean(
		target?.closest(
			'.db-control-panel-navigation-item, .db-navigation-item'
		)
	);
};

export class NavigationItemSafeTriangle {
	private readonly element: HTMLElement | null;
	private readonly subNavigation: HTMLElement | null;
	private readonly parentSubNavigation: HTMLElement | null = null;
	private triangleData?: TriangleData;
	private initialized: boolean = false;
	private mouseX: number = 0;
	private mouseY: number = 0;
	constructor(
		element: HTMLElement | null,
		subNavigation: HTMLElement | null
	) {
		this.element = element;
		this.subNavigation = subNavigation;

		if (!this.element || !this.subNavigation) {
			return;
		}

		this.parentSubNavigation =
			this.element?.closest(
				'.db-control-panel-navigation-item-group-menu'
			) ?? this.element;

		/*
		 * only initiate if:
		 * 2. item is not in the mobile navigation / within db-drawer
		 */
		if (!this.element.closest('.db-drawer')) {
			this.init();
		}
	}

	private init() {
		const parentElementWidth =
			this.parentSubNavigation?.getBoundingClientRect().width ?? 0;

		// the triangle has the width of the sub-navigation, current nav-item can be wider.
		// so the width of the triangle must be adapted to a possibly wider nav-item.
		this.element?.style.setProperty(
			'--db-control-panel-navigation-item-inline-size',
			`${parentElementWidth}px`
		);
		// Write legacy name for DBNavigationItem consumers
		this.element?.style.setProperty(
			'--db-navigation-item-inline-size',
			`${parentElementWidth}px`
		);

		this.initialized = true;
	}

	public enableFollow() {
		if (!this.initialized || !this.element || !this.subNavigation) {
			return;
		}

		const itemRect = this.element.getBoundingClientRect();
		const subRect = this.subNavigation.getBoundingClientRect();
		const parentElementWidth =
			this.parentSubNavigation?.getBoundingClientRect().width ?? 0;

		// Determine the actual direction the sub-menu opens by comparing positions.
		// The 4px tolerance accounts for sub-pixel rounding in getBoundingClientRect.
		let openDirection: 'left' | 'right' | 'bottom';
		if (subRect.top >= itemRect.bottom - 4) {
			openDirection = 'bottom';
		} else if (subRect.left >= itemRect.right - 4) {
			openDirection = 'right';
		} else {
			openDirection = 'left';
		}

		this.triangleData = {
			itemRect,
			parentElementWidth,
			subNavigationHeight: subRect.height,
			padding: (parentElementWidth - itemRect.width) / 2,
			openDirection
		};
	}

	public disableFollow() {
		this.triangleData = undefined;
	}

	private hasMouseEnteredSubNavigation(): boolean {
		if (!this.triangleData) {
			return false;
		}

		switch (this.triangleData.openDirection) {
			case 'left':
				return this.mouseX < -1 * this.triangleData.padding;
			case 'right':
				return (
					this.mouseX >
					this.triangleData.parentElementWidth -
						this.triangleData.padding
				);
			case 'bottom':
				return this.mouseY > this.triangleData.itemRect.height;
			default: {
				const _exhaustive: never = this.triangleData.openDirection;
				void _exhaustive;
				return false;
			}
		}
	}

	// We use a loose type here because React passes `MouseEvent<HTMLLIElement, MouseEvent>`
	public followByMouseEvent(event: { clientX: number; clientY: number }) {
		if (
			!this.initialized ||
			!this.triangleData ||
			!this.element ||
			!this.subNavigation
		) {
			return;
		}

		this.mouseX = event.clientX - this.triangleData.itemRect.left;
		this.mouseY = event.clientY - this.triangleData.itemRect.top;

		const isOverSubNavigation = this.hasMouseEnteredSubNavigation();

		if (isOverSubNavigation) {
			this.disableFollow();
			return;
		}

		// Calculate tip position in the ::before's coordinate space.
		// The ::before is positioned at the sub-menu's left edge and shifted
		// left by its own width (translateX(-100%)).
		// Its width = parentElementWidth, height = sub-menu height.
		const subRect = this.subNavigation.getBoundingClientRect();
		const beforeLeft = subRect.left - this.triangleData.parentElementWidth;
		const beforeWidth = this.triangleData.parentElementWidth;
		const beforeTop = subRect.top;
		const beforeHeight = subRect.height;

		const tipXPx = event.clientX - beforeLeft;
		const tipYPct = Math.max(
			0,
			Math.min(100, ((event.clientY - beforeTop) / beforeHeight) * 100)
		);

		// Ensure the triangle has a minimum width of 0.5rem (8px)
		const minWidth = 8;
		let coordinates: string;

		switch (this.triangleData.openDirection) {
			case 'right':
				coordinates = `${Math.min(tipXPx, beforeWidth - minWidth)}px ${tipYPct}%, 100% 0%, 100% 100%`;
				break;
			case 'left':
				coordinates = `0% 0%, ${Math.max(tipXPx, minWidth)}px ${tipYPct}%, 0% 100%`;
				break;
			case 'bottom':
				coordinates = `${tipXPx}px ${tipYPct}%, ${beforeWidth}px 100%, 0px 100%`;
				break;
			default: {
				const _exhaustive: never = this.triangleData.openDirection;
				void _exhaustive;
				coordinates = '0% 0%, 100% 0%, 100% 100%, 0% 100%';
				break;
			}
		}

		this.element.style.setProperty(
			'--db-control-panel-navigation-item-clip-path',
			`polygon(${coordinates})`
		);
		// Write legacy name for DBNavigationItem consumers
		this.element.style.setProperty(
			'--db-navigation-item-clip-path',
			`polygon(${coordinates})`
		);
	}
}

const MAX_SUB_NAVIGATION_DEPTH = 10;

export const handleSubNavigationPosition = ({
	element,
	level,
	isPopover = false,
	vertical = false
}: {
	element: HTMLElement;
	level?: number;
	vertical?: boolean;
	isPopover?: boolean;
}) => {
	if (!element) return;

	// If no level provided, read it from the element's data-level attribute
	// (set by a previous call) and process children at level + 1
	const resolvedLevel =
		level ??
		parseInt((element as HTMLElement).dataset['level'] ?? '-1', 10) + 1;

	// Guard against deeply nested or accidentally cyclic markup
	if (resolvedLevel >= MAX_SUB_NAVIGATION_DEPTH) return;

	// Find item-group children of this menu. In React/Vue the inner <li> is a
	// direct child; in Angular/Stencil one or more custom element wrappers
	// (e.g. <db-control-panel-navigation-item-group> or user wrappers like
	// <app-nav-item>) can sit between the <menu> and the inner <li>.
	// Walk up from each group's parentElement to find the nearest menu-level
	// ancestor. If that ancestor is `element`, the group belongs to this level.
	const allGroupsInside = element.querySelectorAll(
		'.db-control-panel-navigation-item-group'
	);
	const navItems = Array.from(allGroupsInside).filter((group) => {
		let current = group.parentElement;
		while (current && current !== element) {
			// If we hit another menu before reaching `element`, this group
			// belongs to a deeper nesting level -> exclude it.
			if (
				current !== element &&
				(current.classList.contains(
					'db-control-panel-navigation-item-group-menu'
				) ||
					current.tagName === 'MENU')
			) {
				return false;
			}
			current = current.parentElement;
		}
		return current === element;
	});

	for (const navItem of Array.from(navItems)) {
		const subNavigation: HTMLElement | null = navItem.querySelector(
			':scope > .db-control-panel-navigation-item-group-menu'
		);
		const button: HTMLElement | null = navItem.querySelector(
			':scope > .db-control-panel-navigation-item-group-expand-button'
		);
		if (subNavigation && button) {
			/*
			 * This is set via css inside:
			 * `packages/components/src/components/control-panel-navigation-item-group/control-panel-navigation-item-group-menu-drilldown.scss`.
			 * We don't need to calculate the position of the menu for non popover menus.
			 */
			if (!isPopover) {
				subNavigation.style.insetBlock = '';
				subNavigation.style.insetInline = '';
				subNavigation.style.position = '';
				continue;
			}

			subNavigation.dataset['level'] = resolvedLevel.toString();

			if (resolvedLevel === 0) {
				if (vertical) {
					// Sub-Navigation should be opened vertical (top position, level 0)
					handleFixedPopover({
						element: subNavigation,
						parent: button,
						placement: 'bottom-start'
					});
					subNavigation.dataset['open'] = 'vertical';
				} else {
					handleFixedPopover({
						element: subNavigation,
						parent: button,
						placement: 'right-start'
					});
					subNavigation.dataset['open'] = 'horizontal';
				}
			} else {
				// Nested sub-menus (level 1+) use CSS-controlled absolute
				// positioning. Clear any stale fixed positioning that may
				// have been set by a previous incorrect level-0 pass.
				subNavigation.style.position = '';
				subNavigation.style.insetBlock = '';
				subNavigation.style.insetInline = '';
				subNavigation.style.insetBlockStart = '';
				subNavigation.style.insetBlockEnd = '';
				subNavigation.style.insetInlineStart = '';
				subNavigation.style.insetInlineEnd = '';
				subNavigation.style.overflow = '';
				subNavigation.style.maxBlockSize = '';
				delete subNavigation.dataset['open'];
				delete subNavigation.dataset['correctedPlacement'];
				delete subNavigation.dataset['outsideVy'];
				delete subNavigation.dataset['outsideVx'];
			}

			handleSubNavigationPosition({
				element: subNavigation,
				level: resolvedLevel + 1
			});
		}
	}
};
