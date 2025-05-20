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
	const { vy } = handleDataOutside(element);
	const dropdownRect = element.getBoundingClientRect();
	const { top, height, left, width } = parent.getBoundingClientRect();

	if (vy === 'top' && placement?.startsWith('top')) {
		placement = placement?.replace('top', 'bottom');
	} else if (vy === 'bottom' && placement?.startsWith('bottom')) {
		placement = placement?.replace('bottom', 'top');
	}

	if (
		placement === 'top' ||
		placement === 'bottom' ||
		placement === 'top-start' ||
		placement === 'bottom-start'
	) {
		element.style.insetInlineStart = `${left}px`;
	} else if (placement === 'top-end' || placement === 'bottom-end') {
		element.style.insetInlineStart = `${
			left + width - dropdownRect.width
		}px`;
	}

	if (placement?.startsWith('top')) {
		element.style.insetBlockStart = `${top - dropdownRect.height}px`;
	} else if (placement?.startsWith('bottom')) {
		element.style.insetBlockStart = `${top + height}px`;
	}

	element.style.position = 'fixed';
};

export const handleFixedPopover = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	const { vy, vx } = handleDataOutside(element);
	const popoverRect = element.getBoundingClientRect();
	const { top, height, right, left, width } = parent.getBoundingClientRect();
	const distance =
		getComputedStyle(element).getPropertyValue('--db-popover-distance') ??
		'0px';

	if (vy === 'top' && placement?.startsWith('top')) {
		placement = placement?.replace('top', 'bottom');
	} else if (vy === 'bottom' && placement?.startsWith('bottom')) {
		placement = placement?.replace('bottom', 'top');
	}
	if (vx === 'right' && placement?.startsWith('right')) {
		placement = placement?.replace('right', 'left');
	} else if (vx === 'left' && placement?.startsWith('left')) {
		placement = placement?.replace('left', 'right');
	}

	if (placement === 'right' || placement === 'left') {
		// center horizontally
		element.style.insetBlockStart = `${top + height / 2}px`;
	} else if (placement === 'right-start' || placement === 'left-start') {
		element.style.insetBlockStart = `${top}px`;
	} else if (placement === 'right-end' || placement === 'left-end') {
		element.style.insetBlockStart = `${
			top + height - popoverRect.height
		}px`;
	} else if (placement === 'top' || placement === 'bottom') {
		// center vertically
		element.style.insetInlineStart = `${left + width / 2}px`;
	} else if (placement === 'top-start' || placement === 'bottom-start') {
		element.style.insetInlineStart = `${left}px`;
	} else if (placement === 'top-end' || placement === 'bottom-end') {
		element.style.insetInlineStart = `${
			left + width - popoverRect.width
		}px`;
	}

	if (placement?.startsWith('right')) {
		element.style.insetInlineStart = `calc(${right}px + ${distance})`;
	} else if (placement?.startsWith('left')) {
		element.style.insetInlineStart = `calc(${
			left - popoverRect.width
		}px - ${distance})`;
	} else if (placement?.startsWith('top')) {
		element.style.insetBlockStart = `calc(${
			top - popoverRect.height
		}px - ${distance})`;
	} else if (placement?.startsWith('bottom')) {
		element.style.insetBlockStart = `calc(${top + height}px + ${distance})`;
	}

	element.style.position = 'fixed';
};
