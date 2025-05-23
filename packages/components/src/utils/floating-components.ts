// TODO: We should reevaluate this as soon as CSS Anchor Positioning is supported in all relevant browsers
const isInView = (el: Element) => {
	const { top, bottom, left, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;

	let outTop = top < 0;
	let outBottom = bottom > innerHeight;
	let outLeft = left < 0;
	let outRight = right > innerWidth;

	// We need to check if it was already outside
	const outsideY = el.hasAttribute('data-outside-vy');
	const outsideX = el.hasAttribute('data-outside-vx');
	const parentRect = el?.parentElement?.getBoundingClientRect();

	if (parentRect) {
		if (outsideY) {
			const position = el.getAttribute('data-outside-vy');
			if (position === 'top') {
				outTop = parentRect.top - (bottom - parentRect.bottom) < 0;
			} else {
				outBottom =
					parentRect.bottom + (parentRect.top - top) > innerHeight;
			}
		}

		if (outsideX) {
			const position = el.getAttribute('data-outside-vx');
			if (position === 'left') {
				outLeft = parentRect.left - (right - parentRect.right) < 0;
			} else {
				outRight =
					parentRect.right + (parentRect.left - left) > innerWidth;
			}
		}
	}

	return {
		outTop,
		outBottom,
		outLeft,
		outRight
	};
};

export interface DBDataOutsidePair {
	vx?: 'left' | 'right';
	vy?: 'top' | 'bottom';
}
export const handleDataOutside = (el: Element): DBDataOutsidePair => {
	const { outTop, outBottom, outLeft, outRight } = isInView(el);
	let dataOutsidePair: DBDataOutsidePair = {};

	if (outTop || outBottom) {
		dataOutsidePair = { vy: outTop ? 'top' : 'bottom' };
		el.setAttribute('data-outside-vy', dataOutsidePair.vy!);
	} else {
		el.removeAttribute('data-outside-vy');
	}
	if (outLeft || outRight) {
		dataOutsidePair = {
			...dataOutsidePair,
			vx: outRight ? 'right' : 'left'
		};
		el.setAttribute('data-outside-vx', dataOutsidePair.vx!);
	} else {
		el.removeAttribute('data-outside-vx');
	}

	return dataOutsidePair;
};

export const handleFixedDropdown = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	// We skip this if we are in mobile it's already fixed
	if (getComputedStyle(element).zIndex === '9999') return;

	const {
		top,
		bottom,
		childHeight,
		childWidth,
		width,
		right,
		left,
		correctedPlacement
	} = getFloatingProps(element, parent, placement);

	const fullWidth = element.dataset['width'] === 'full';

	if (fullWidth) {
		element.style.inlineSize = `${width}px`;
	}

	if (
		correctedPlacement === 'top' ||
		correctedPlacement === 'bottom' ||
		correctedPlacement === 'top-start' ||
		correctedPlacement === 'bottom-start'
	) {
		element.style.insetInlineStart = `${left}px`;
	} else if (
		correctedPlacement === 'top-end' ||
		correctedPlacement === 'bottom-end'
	) {
		element.style.insetInlineStart = `${right - childWidth}px`;
	}

	if (correctedPlacement?.startsWith('top')) {
		element.style.insetBlockStart = `${top - childHeight}px`;
	} else if (correctedPlacement?.startsWith('bottom')) {
		element.style.insetBlockStart = `${bottom}px`;
	}

	element.style.position = 'fixed';
};

const getFloatingProps = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	const childRect = element.getBoundingClientRect();
	const { top, height, bottom, right, left, width } =
		parent.getBoundingClientRect();

	const { innerHeight, innerWidth } = window;

	let childHeight = childRect.height;
	let childWidth = childRect.width;

	if (placement === 'bottom' || placement === 'top') {
		childWidth = childWidth / 2;
	}

	if (placement === 'left' || placement === 'right') {
		childHeight = childHeight / 2;
	}

	const outsideBottom = bottom + childHeight > innerHeight;
	const outsideTop = top - childHeight < 0;
	const outsideLeft = left - childWidth < 0;
	const outsideRight = right + childWidth > innerWidth;

	let correctedPlacement = placement;

	if (placement.startsWith('bottom')) {
		if (outsideBottom) {
			correctedPlacement = placement?.replace('bottom', 'top');

			if (outsideLeft && outsideRight) {
				correctedPlacement = 'top';
			} else if (outsideLeft) {
				correctedPlacement = 'top-start';
			} else if (outsideRight) {
				correctedPlacement = 'top-end';
			}
		} else {
			if (outsideLeft && outsideRight) {
				correctedPlacement = 'bottom';
			} else if (outsideLeft) {
				correctedPlacement = 'bottom-start';
			} else if (outsideRight) {
				correctedPlacement = 'bottom-end';
			}
		}
	} else if (placement.startsWith('top')) {
		if (outsideTop) {
			correctedPlacement = placement?.replace('top', 'bottom');

			if (outsideLeft && outsideRight) {
				correctedPlacement = 'bottom';
			} else if (outsideLeft) {
				correctedPlacement = 'bottom-start';
			} else if (outsideRight) {
				correctedPlacement = 'bottom-end';
			}
		} else {
			if (outsideLeft && outsideRight) {
				correctedPlacement = 'top';
			} else if (outsideLeft) {
				correctedPlacement = 'top-start';
			} else if (outsideRight) {
				correctedPlacement = 'top-end';
			}
		}
	} else if (placement.startsWith('left')) {
		if (outsideLeft) {
			correctedPlacement = placement?.replace('left', 'right');

			if (outsideBottom && outsideTop) {
				correctedPlacement = 'right';
			} else if (outsideBottom) {
				correctedPlacement = 'right-end';
			} else if (outsideTop) {
				correctedPlacement = 'right-start';
			}
		} else {
			if (outsideBottom && outsideTop) {
				correctedPlacement = 'left';
			} else if (outsideBottom) {
				correctedPlacement = 'left-end';
			} else if (outsideTop) {
				correctedPlacement = 'left-start';
			}
		}
	} else if (correctedPlacement.startsWith('right')) {
		if (outsideRight) {
			correctedPlacement = placement?.replace('right', 'left');

			if (outsideBottom && outsideTop) {
				correctedPlacement = 'left';
			} else if (outsideBottom) {
				correctedPlacement = 'left-end';
			} else if (outsideTop) {
				correctedPlacement = 'left-start';
			}
		} else {
			if (outsideBottom && outsideTop) {
				correctedPlacement = 'right';
			} else if (outsideBottom) {
				correctedPlacement = 'right-end';
			} else if (outsideTop) {
				correctedPlacement = 'right-start';
			}
		}
	}

	return {
		top,
		bottom,
		right,
		height,
		width,
		left,
		childHeight: childRect.height,
		childWidth: childRect.width,
		correctedPlacement,
		innerWidth,
		innerHeight
	};
};

export const handleFixedPopover = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	const distance =
		getComputedStyle(element).getPropertyValue('--db-popover-distance') ??
		'0px';

	const {
		top,
		height,
		width,
		childHeight,
		childWidth,
		right,
		left,
		bottom,
		correctedPlacement,
		innerWidth,
		innerHeight
	} = getFloatingProps(element, parent, placement);

	// Tooltip arrow position

	if (
		childWidth > width &&
		(correctedPlacement.startsWith('bottom') ||
			correctedPlacement.startsWith('top'))
	) {
		const diff = (width / 2 / childWidth) * 100;
		if (correctedPlacement.endsWith('start')) {
			element.style.setProperty(
				'--db-tooltip-arrow-inline-start',
				`${diff}%`
			);
		} else if (correctedPlacement.endsWith('end')) {
			element.style.setProperty(
				'--db-tooltip-arrow-inline-start',
				`${100 - diff}%`
			);
		}
	}
	if (
		childHeight > height &&
		(correctedPlacement.startsWith('left') ||
			correctedPlacement.startsWith('bottom'))
	) {
		const diff = (height / 2 / childHeight) * 100;
		if (correctedPlacement.endsWith('start')) {
			element.style.setProperty(
				'--db-tooltip-arrow-block-start',
				`${diff}%`
			);
		} else if (correctedPlacement.endsWith('end')) {
			element.style.setProperty(
				'--db-tooltip-arrow-block-start',
				`${100 - diff}%`
			);
		}
	}

	// Popover position

	if (correctedPlacement === 'right' || correctedPlacement === 'left') {
		// center horizontally
		element.style.insetBlockStart = `${top + height / 2}px`;
	} else if (
		correctedPlacement === 'right-start' ||
		correctedPlacement === 'left-start'
	) {
		const end = top + childHeight;
		element.style.insetBlockStart = `${top}px`;
		element.style.insetBlockEnd = `${end > innerHeight ? innerHeight : end}px`;
	} else if (
		correctedPlacement === 'right-end' ||
		correctedPlacement === 'left-end'
	) {
		const start = bottom - childHeight;
		element.style.insetBlockStart = `${start < 0 ? 0 : start}px`;
		element.style.insetBlockEnd = `${bottom}px`;
	} else if (
		correctedPlacement === 'top' ||
		correctedPlacement === 'bottom'
	) {
		// center vertically
		element.style.insetInlineStart = `${left + width / 2}px`;
	} else if (
		correctedPlacement === 'top-start' ||
		correctedPlacement === 'bottom-start'
	) {
		const end = left + childWidth;
		element.style.insetInlineStart = `${left}px`;
		element.style.insetInlineEnd = `${end > innerWidth ? innerWidth : end}px`;
	} else if (
		correctedPlacement === 'top-end' ||
		correctedPlacement === 'bottom-end'
	) {
		const start = left - childWidth;
		element.style.insetInlineStart = `${right - childWidth}px`;
		element.style.insetInlineEnd = `${start < 0 ? 0 : start}px`;
	}

	if (correctedPlacement?.startsWith('right')) {
		const end = right + childWidth;
		element.style.insetInlineStart = `calc(${right}px + ${distance})`;
		element.style.insetInlineEnd = `calc(${end > innerWidth ? innerWidth : end}px + ${distance})`;
	} else if (correctedPlacement?.startsWith('left')) {
		const start = left - childWidth;
		element.style.insetInlineStart = `calc(${start < 0 ? 0 : start}px - ${distance})`;
		element.style.insetInlineEnd = `calc(${right}px - ${distance})`;
	} else if (correctedPlacement?.startsWith('top')) {
		const start = top - childHeight;
		element.style.insetBlockStart = `calc(${
			start < 0 ? 0 : start
		}px - ${distance})`;
		element.style.insetBlockEnd = `calc(${bottom}px - ${distance})`;
	} else if (correctedPlacement?.startsWith('bottom')) {
		const end = bottom + childHeight;
		element.style.insetBlockStart = `calc(${bottom}px + ${distance})`;
		element.style.insetBlockEnd = `calc(${end > innerHeight ? innerHeight : end}px + ${distance})`;
	}

	element.style.position = 'fixed';
	element.setAttribute('data-corrected-placement', correctedPlacement);
};
