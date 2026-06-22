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
	/**
	 * The sub-menu's top/bottom offset relative to the element's top,
	 * as a fraction of the parent element's full height (0..1).
	 * Used to position the triangle base where the sub-menu actually is.
	 */
	subNavTopRatio: number;
	subNavBottomRatio: number;
};

export const isEventTargetNavigationItem = (event: unknown): boolean => {
	const { target } = event as { target: HTMLElement };
	return Boolean(
		target?.parentElement?.classList.contains(
			'db-control-panel-navigation-item'
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
		const parentHeight =
			this.parentSubNavigation?.getBoundingClientRect().height ??
			itemRect.height;

		// Determine the actual direction the sub-menu opens by comparing positions
		let openDirection: 'left' | 'right' | 'bottom';
		if (subRect.top >= itemRect.bottom - 4) {
			openDirection = 'bottom';
		} else if (subRect.left >= itemRect.right - 4) {
			openDirection = 'right';
		} else {
			openDirection = 'left';
		}

		// Calculate where the sub-menu sits relative to the parent's full height
		// (used to constrain the triangle base to match the sub-menu position)
		const parentTop =
			this.parentSubNavigation?.getBoundingClientRect().top ??
			itemRect.top;
		const subNavTopRatio = Math.max(
			0,
			(subRect.top - parentTop) / parentHeight
		);
		const subNavBottomRatio = Math.min(
			1,
			(subRect.bottom - parentTop) / parentHeight
		);

		this.triangleData = {
			itemRect,
			parentElementWidth,
			subNavigationHeight: subRect.height,
			padding: (parentElementWidth - itemRect.width) / 2,
			openDirection,
			subNavTopRatio,
			subNavBottomRatio
		};
	}

	public disableFollow() {
		this.triangleData = undefined;
		// Clear the clip-path so stale triangles don't block sibling item hover
		this.element?.style.removeProperty(
			'--db-control-panel-navigation-item-clip-path'
		);
	}

	private getTriangleTipX(): number {
		if (!this.triangleData) return 0;

		if (this.triangleData.openDirection === 'left') {
			// Sub-menu opens to the left, flip x pos
			return this.triangleData.itemRect.width - this.mouseX;
		}

		// triangle stops shrinking from 75% x pos
		return Math.min(this.mouseX, this.triangleData.itemRect.width * 0.75);
	}

	private getTriangleTipY(): number {
		if (!this.triangleData) return 0;

		// padding must be added to the y pos of the tip so that the y pos matches the cursor
		return (
			Math.max(
				Math.min(this.mouseY, this.triangleData.itemRect.height),
				0
			) + this.triangleData.padding
		);
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
		}
	}

	private getTriangleCoordinates():
		| undefined
		| {
				lb: string;
				lt: string;
				rt: string;
				rb: string;
		  } {
		if (!this.triangleData) {
			return;
		}

		const tipX = this.getTriangleTipX();
		const tipY = this.getTriangleTipY();

		switch (this.triangleData.openDirection) {
			case 'bottom':
				// Tip at cursor, base spans the full width at the bottom
				return {
					lt: `${tipX}px ${tipY}px`,
					rt: `${tipX}px ${tipY}px`,
					rb: '100% 100%',
					lb: '0% 100%'
				};
			case 'right': {
				// Tip at cursor, base spans the sub-menu's height on the right edge
				const topPct = `${this.triangleData.subNavTopRatio * 100}%`;
				const bottomPct = `${this.triangleData.subNavBottomRatio * 100}%`;
				return {
					lt: `${tipX}px ${tipY}px`,
					rt: `100% ${topPct}`,
					rb: `100% ${bottomPct}`,
					lb: `${tipX}px ${tipY}px`
				};
			}
			case 'left': {
				// Tip at cursor, base spans the sub-menu's height on the left edge
				const topPct = `${this.triangleData.subNavTopRatio * 100}%`;
				const bottomPct = `${this.triangleData.subNavBottomRatio * 100}%`;
				return {
					lt: `0% ${topPct}`,
					rt: `${tipX}px ${tipY}px`,
					rb: `${tipX}px ${tipY}px`,
					lb: `0% ${bottomPct}`
				};
			}
		}
	}

	public followByMouseEvent(event: any) {
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

		const coordinates = this.getTriangleCoordinates();

		if (!coordinates) {
			return;
		}

		this.element.style.setProperty(
			'--db-control-panel-navigation-item-clip-path',
			`polygon(${coordinates.lb}, ${coordinates.lt}, ${coordinates.rt}, ${coordinates.rb})`
		);
	}
}

export const handleSubNavigationPosition = (
	element: HTMLElement,
	level?: number,
	vertical: boolean = false
) => {
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
			 * `packages/components/src/components/navigation-item-group/navigation-item-group-menu-popover.scss`.
			 * We don't need to calculate the position of the menu as a popover.
			 */
			const isMobile = getComputedStyle(subNavigation).getPropertyValue(
				'--db-control-panel-navigation-item-group-menu-mobile'
			);
			if (isMobile) {
				subNavigation.style.insetBlock = '';
				subNavigation.style.insetInline = '';
				return;
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
