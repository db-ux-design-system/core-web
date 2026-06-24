import { handleFixedPopover } from './floating-components';

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
	return Boolean(target?.closest('.db-control-panel-navigation-item'));
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

	// We use any here because React will have `MouseEvent<HTMLLIElement, MouseEvent>`
	public followByMouseEvent(event: MouseEvent | any) {
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
	}
}

export const handleSubNavigationPosition = (
	element: HTMLElement,
	level?: number,
	vertical: boolean = false
) => {
	if (!element) return;

	// If no level provided, read it from the element's data-level attribute
	// (set by a previous call) and process children at level + 1
	const resolvedLevel =
		level ??
		parseInt((element as HTMLElement).dataset['level'] ?? '-1', 10) + 1;

	const navItems = element.querySelectorAll(
		':scope > .db-control-panel-navigation-item-group, :scope > db-control-panel-navigation-item-group > .db-control-panel-navigation-item-group'
	);

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
			 * `packages/components/src/components/control-panel-navigation-item-group/control-panel-navigation-item-group-menu-popover.scss`.
			 * We don't need to calculate the position of the menu as a popover.
			 */
			const isMobile = getComputedStyle(subNavigation)
				.getPropertyValue(
					'--db-control-panel-navigation-item-group-menu-mobile'
				)
				.trim();
			if (isMobile.length > 0) {
				subNavigation.style.insetBlock = '';
				subNavigation.style.insetInline = '';
				continue;
			}

			subNavigation.dataset['level'] = resolvedLevel.toString();

			if (resolvedLevel === 0) {
				if (vertical) {
					// Sub-Navigation should be opened vertical (top position, level 0)
					handleFixedPopover(subNavigation, button, 'bottom-start');
					subNavigation.dataset['open'] = 'vertical';
				} else {
					handleFixedPopover(subNavigation, button, 'right-start');
					subNavigation.dataset['open'] = 'horizontal';
				}
			}

			handleSubNavigationPosition(subNavigation, resolvedLevel + 1);
		}
	}
};
