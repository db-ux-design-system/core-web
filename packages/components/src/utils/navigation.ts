import { handleDataOutside, handleFixedPopover } from './floating-components';

export type TriangleData = {
	itemRect: DOMRect;
	parentElementWidth: number;
	subNavigationHeight: number;
	padding: number;
	outsideVX: 'left' | 'right' | undefined;
	outsideVY: 'top' | 'bottom' | undefined;
};

export const isEventTargetNavigationItem = (event: unknown): boolean => {
	const { target } = event as { target: HTMLElement };
	return Boolean(
		target?.parentElement?.classList.contains('db-navigation-item')
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
			this.element?.closest('.db-navigation-item-group-menu') ??
			this.element;

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
			'--db-navigation-item-inline-size',
			`${parentElementWidth}px`
		);

		this.initialized = true;
	}

	public enableFollow() {
		if (
			!this.initialized ||
			this.triangleData ||
			!this.element ||
			!this.subNavigation
		) {
			return;
		}

		const dataOutsidePair = handleDataOutside(this.subNavigation);

		const itemRect = this.element.getBoundingClientRect();
		const parentElementWidth =
			this.parentSubNavigation?.getBoundingClientRect().width ?? 0;

		this.triangleData = {
			itemRect,
			parentElementWidth,
			subNavigationHeight:
				this.subNavigation.getBoundingClientRect().height,
			padding: (parentElementWidth - itemRect.width) / 2,
			outsideVX: dataOutsidePair.vx,
			outsideVY: dataOutsidePair.vy
		};
	}

	public disableFollow() {
		this.triangleData = undefined;
	}

	private getTriangleTipX(): number {
		if (!this.triangleData) return 0;

		if (this.triangleData.outsideVX === 'right') {
			// vertical flipped triangle needs an inverted x pos
			return this.triangleData.itemRect.width - this.mouseX;
		}

		// triangle stops shrinking from 75% x pos
		return Math.min(this.mouseX, this.triangleData.itemRect.width * 0.75);
	}

	private getTriangleTipY(): number {
		if (!this.triangleData) return 0;

		// padding must be added to the y pos of the tip so that the y pos matches the cursor
		const mouseYLimited =
			Math.max(
				Math.min(this.mouseY, this.triangleData.itemRect.height),
				0
			) + this.triangleData.padding;

		if (this.triangleData.outsideVY === 'bottom') {
			// add offset to tip y pos to match corrected sub-navigation y pos
			return (
				mouseYLimited +
				(this.triangleData.subNavigationHeight -
					this.triangleData.padding * 2 -
					this.triangleData.itemRect.height)
			);
		}

		return mouseYLimited;
	}

	private hasMouseEnteredSubNavigation(): boolean {
		if (!this.triangleData) {
			return false;
		}

		const isSubNavigationOnLeftSide =
			this.triangleData.outsideVX === 'right';

		if (
			isSubNavigationOnLeftSide &&
			this.mouseX < -1 * this.triangleData.padding
		) {
			return true;
		}

		if (
			!isSubNavigationOnLeftSide &&
			this.mouseX >
				this.triangleData.parentElementWidth - this.triangleData.padding
		) {
			return true;
		}

		return false;
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

		const lb = `${tipX}px ${tipY}px`;
		const lt = `${tipX}px ${tipY}px`;

		return {
			lb,
			lt,
			rt: '100% 0',
			rb: '100% 100%'
		};
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

		const coordinates = this.getTriangleCoordinates();

		if (!coordinates) {
			return;
		}

		this.element.style.setProperty(
			'--db-navigation-item-clip-path',
			`polygon(${coordinates.lb}, ${coordinates.lt}, ${coordinates.rt}, ${coordinates.rb})`
		);

		if (isOverSubNavigation) {
			this.triangleData = undefined;
		}
	}
}

export const handleSubNavigationPosition = (
	element: HTMLElement,
	level: number = 0
) => {
	for (const navItem of Array.from(
		element.querySelectorAll('.db-navigation-item-group')
	)) {
		const subNavigation: HTMLElement | null = navItem.querySelector(
			'.db-navigation-item-group-menu'
		);
		const button: HTMLElement | null = navItem.querySelector(
			'.db-navigation-item-group-expand-button'
		);
		if (subNavigation && button) {
			/*
			 * This is set via css inside:
			 * `packages/components/src/components/navigation-item-group/navigation-item-group-menu-popover.scss`.
			 * We don't need to calculate the position of the menu as a popover.
			 */
			const isMobile = getComputedStyle(subNavigation).getPropertyValue(
				'--db-navigation-item-group-menu-mobile'
			);
			if (isMobile) return;

			if (level > 0 || subNavigation.dataset['open'] === 'horizontal') {
				// Sub-Navigation should be opened horizontal
				handleFixedPopover(subNavigation, button, 'right-start');
				subNavigation.dataset['open'] = 'horizontal';
			} else {
				// Sub-Navigation should be opened vertical
				handleFixedPopover(subNavigation, button, 'bottom-start');
				subNavigation.dataset['open'] = 'vertical';
			}
			handleSubNavigationPosition(subNavigation, level + 1);
		}
	}
};
