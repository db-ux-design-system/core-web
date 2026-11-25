/**
 * Floating components (popover, tooltip, custom-select dropdown, navigation
 * sub-menus) are positioned with CSS Anchor Positioning and shown in the top
 * layer via the Popover API. The JavaScript positioning below is only a
 * fallback for browsers which do not support these features. It can be removed
 * as soon as the last supported browser has caught up (see `.browserslistrc`).
 *
 * The support check must stay in sync with the `@supports` queries inside
 * `styles/internal/_popover-component.scss`.
 */
let anchorPositioningSupport: boolean | undefined;

/**
 * The result can't change during the lifetime of the page, so it is cached
 * (this runs on every scroll and resize callback).
 */
export const supportsAnchorPositioning = (): boolean => {
	if (anchorPositioningSupport === undefined) {
		if (typeof CSS === 'undefined' || typeof CSS.supports !== 'function') {
			// Not cached, the environment might not be ready yet (e.g. SSR)
			return false;
		}

		anchorPositioningSupport =
			CSS.supports('position-area: top') &&
			CSS.supports('anchor-name: --db-anchor') &&
			CSS.supports('anchor-scope: --db-anchor');
	}

	return anchorPositioningSupport;
};

export const supportsPopoverApi = (): boolean =>
	typeof HTMLElement !== 'undefined' &&
	typeof HTMLElement.prototype.showPopover === 'function' &&
	'popover' in HTMLElement.prototype;

/**
 * Shows the element in the top layer (Popover API) if supported.
 * The `popover` attribute is only set while the element is open, so the
 * CSS-only visibility handling keeps working for every other state.
 *
 * Only used together with anchor positioning: the top layer changes the
 * containing block to the viewport and applies user agent styles
 * (`margin: auto`, `inset: 0`), which the JavaScript fallback positioning
 * doesn't expect. Browsers with the Popover API but without anchor
 * positioning therefore keep the element in the regular layer.
 */
export const showFloating = (element?: HTMLElement | null) => {
	if (!element || !supportsAnchorPositioning() || !supportsPopoverApi()) {
		return;
	}

	try {
		if (!element.hasAttribute('popover')) {
			element.setAttribute('popover', 'manual');
		}

		if (!element.matches(':popover-open')) {
			element.showPopover();
		}
	} catch {
		// Element is not connected or not renderable (e.g. closed <details>)
	}
};

export const hideFloating = (element?: HTMLElement | null) => {
	if (!element || !supportsPopoverApi()) return;
	try {
		if (element.matches(':popover-open')) {
			element.hidePopover();
		}
	} catch {
		// Already hidden
	}

	element.removeAttribute('popover');
};

/**
 * Tall content: keeps the element inside the viewport and scrollable, like
 * the JavaScript fallback does (the anchored CSS doesn't limit the height).
 */
export const limitToViewport = (element: HTMLElement) => {
	// The distance can be any CSS length (e.g. rem), so let the browser
	// resolve it and read the computed pixel value back
	element.style.maxBlockSize = `calc(${window.innerHeight}px - 2 * var(--db-popover-distance, 0px))`;
	const maxBlockSize = parseFloat(getComputedStyle(element).maxBlockSize);
	if (element.scrollHeight > maxBlockSize) {
		element.style.overflow = 'hidden auto';
	} else {
		element.style.overflow = '';
		element.style.maxBlockSize = '';
	}
};

/**
 * With anchor positioning the browser positions the floating element. We only
 * need to know on which side it ended up (after `position-try-fallbacks`
 * flipped it) to orient the arrow and the hover bridge, which is written to
 * `data-corrected-placement` like the JavaScript fallback does.
 */
export const syncAnchoredPlacement = (
	element: HTMLElement,
	anchor: HTMLElement,
	placement: string
) => {
	if (!element || !anchor) return;
	const floating = element.getBoundingClientRect();
	const anchorRect = anchor.getBoundingClientRect();

	// Not rendered (yet), there is nothing to measure
	if (!floating.width && !floating.height) return;

	const isRtl = getComputedStyle(element).direction === 'rtl';

	let side = placement.split('-')[0];
	if (side === 'top' || side === 'bottom') {
		side =
			floating.top + floating.height / 2 < anchorRect.top
				? 'top'
				: 'bottom';
	} else {
		// `left` and `right` are mapped to `inline-start` and `inline-end` in
		// CSS, so the physical side is mirrored in RTL
		const physicalLeft =
			floating.left + floating.width / 2 < anchorRect.left;
		side = physicalLeft !== isRtl ? 'left' : 'right';
	}

	const alignment = placement.split('-')[1];
	element.dataset['correctedPlacement'] = alignment
		? `${side}-${alignment}`
		: side;

	limitToViewport(element);

	// Only tooltips have an arrow
	if (!element.classList.contains('db-tooltip')) return;

	/*
	 * Tooltip arrow: if the tooltip is larger than the anchor on an axis, the
	 * arrow points at the center of the anchor, wherever the browser aligned
	 * the tooltip (start, center or end). If the tooltip is smaller, the
	 * center of the anchor is outside of it (e.g. `right-start` next to a
	 * high trigger), so the property is removed and the arrow stays centered
	 * on the tooltip, which is next to the start of the anchor.
	 */
	const anchorCenterX = anchorRect.left + anchorRect.width / 2;
	const anchorCenterY = anchorRect.top + anchorRect.height / 2;
	const clamp = (value: number, max: number) =>
		Math.round(Math.min(Math.max(value, 0), max));

	if (floating.width > anchorRect.width) {
		element.style.setProperty(
			'--db-tooltip-arrow-inline-start',
			`${clamp(
				isRtl
					? floating.right - anchorCenterX
					: anchorCenterX - floating.left,
				floating.width
			)}px`
		);
	} else {
		element.style.removeProperty('--db-tooltip-arrow-inline-start');
	}

	if (floating.height > anchorRect.height) {
		element.style.setProperty(
			'--db-tooltip-arrow-block-start',
			`${clamp(anchorCenterY - floating.top, floating.height)}px`
		);
	} else {
		element.style.removeProperty('--db-tooltip-arrow-block-start');
	}
};

export const handleFixedDropdown = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	if (!element || !parent) return;
	if (supportsAnchorPositioning()) {
		// The browser positions the dropdown via CSS
		return;
	}

	const fullWidth = element.dataset['width'] === 'full';
	const autoWidth = element.dataset['width'] === 'auto';

	// Reset width-specific inline styles first so a previous mode (e.g. "auto")
	// doesn't leave a stale minInlineSize/inlineSize behind when the dropdown
	// width changes at runtime. This must happen before getFloatingProps
	// measures the element, otherwise the dropdown would be measured with a
	// width it no longer has and positioned incorrectly. It also has to run
	// before the mobile bailout below: otherwise a desktop minInlineSize would
	// survive into the mobile sheet, where CSS min-inline-size beats the
	// mobile max-inline-size guard and overflows the viewport.
	element.style.inlineSize = '';
	element.style.minInlineSize = '';
	element.style.insetInlineStart = '';
	element.style.insetBlockStart = '';
	element.style.position = '';

	// We skip this if we are in mobile it's already fixed or if we don't have a floating dropdown
	const computedStyle = getComputedStyle(element);
	if (
		computedStyle.zIndex === '9999' ||
		(computedStyle.position !== 'fixed' &&
			computedStyle.position !== 'absolute')
	) {
		return;
	}

	const {
		top,
		bottom,
		childHeight,
		childWidth,
		width,
		right,
		left,
		correctedPlacement,
		innerWidth
	} = getFloatingProps(element, parent, placement);

	// For auto width the dropdown is forced to be at least as wide as the trigger,
	// but clamped to its own max-inline-size: CSS lets a min-inline-size override
	// the max when the minimum is larger, so a trigger wider than the viewport
	// limit would otherwise drop the side margins or overflow horizontally.
	let autoMinWidth = width;
	if (autoWidth) {
		const maxInlineSize = parseFloat(
			getComputedStyle(element).maxInlineSize
		);
		if (!isNaN(maxInlineSize) && maxInlineSize > 0) {
			autoMinWidth = Math.min(width, maxInlineSize);
		}
	}

	if (fullWidth) {
		element.style.inlineSize = `${width}px`;
	} else if (autoWidth) {
		element.style.minInlineSize = `${autoMinWidth}px`;
	}

	// getFloatingProps measured childWidth before the inline styles were
	// (re)applied, so use the width the dropdown will actually have:
	// - auto: the clamped minimum, so end-aligned dropdowns don't extend past
	//   the trigger's right edge.
	// - full: the trigger width (the reset above drops it to content width).
	let effectiveChildWidth = childWidth;
	if (autoWidth) {
		effectiveChildWidth = Math.max(childWidth, autoMinWidth);
	} else if (fullWidth) {
		effectiveChildWidth = width;
	}

	// getFloatingProps detects horizontal overflow assuming a centered element
	// (it halves childWidth). The dropdown is actually start-aligned (inset =
	// left), so for the wider auto dropdown re-check overflow against its full
	// width and flip to end-alignment when it would extend past the viewport.
	let dropdownPlacement = correctedPlacement;
	if (
		autoWidth &&
		(dropdownPlacement === 'top' ||
			dropdownPlacement === 'bottom' ||
			dropdownPlacement === 'top-start' ||
			dropdownPlacement === 'bottom-start') &&
		left + effectiveChildWidth > innerWidth
	) {
		dropdownPlacement = dropdownPlacement.startsWith('top')
			? 'top-end'
			: 'bottom-end';
	}

	if (
		dropdownPlacement === 'top' ||
		dropdownPlacement === 'bottom' ||
		dropdownPlacement === 'top-start' ||
		dropdownPlacement === 'bottom-start'
	) {
		element.style.insetInlineStart = `${left}px`;
	} else if (
		dropdownPlacement === 'top-end' ||
		dropdownPlacement === 'bottom-end'
	) {
		element.style.insetInlineStart = `${Math.max(right - effectiveChildWidth, 0)}px`;
	}

	if (dropdownPlacement?.startsWith('top')) {
		element.style.insetBlockStart = `${top - childHeight}px`;
	} else if (dropdownPlacement?.startsWith('bottom')) {
		element.style.insetBlockStart = `${bottom}px`;
	}

	element.style.position = 'fixed';
};

export const getFloatingProps = (
	element: HTMLElement,
	parent: HTMLElement,
	placement: string
) => {
	if (!element || !parent) {
		return {
			top: 0,
			bottom: 0,
			right: 0,
			height: 0,
			width: 0,
			left: 0,
			childHeight: 0,
			childWidth: 0,
			correctedPlacement: placement,
			innerWidth: window.innerWidth,
			innerHeight: window.innerHeight
		};
	}

	const childRect = element.getBoundingClientRect();
	const { top, height, bottom, right, left, width } =
		parent.getBoundingClientRect();

	const { innerHeight, innerWidth } = window;

	let childHeight = childRect.height;
	let childWidth = childRect.width;

	if (placement === 'bottom' || placement === 'top') {
		childWidth = width > childWidth ? 0 : childWidth / 2;
	}
	if (placement === 'left' || placement === 'right') {
		childHeight = height > childHeight ? 0 : childHeight / 2;
	}

	const outsideBottom = Math.floor(bottom + childHeight) > innerHeight;
	const outsideTop = Math.ceil(top - childHeight) < 0;
	const outsideLeft = Math.ceil(left - childWidth) < 0;
	const outsideRight = Math.floor(right + childWidth) > innerWidth;

	let correctedPlacement = placement;

	if (placement.startsWith('bottom')) {
		if (outsideBottom) {
			if (!outsideTop) {
				correctedPlacement = placement?.replace('bottom', 'top');

				if (outsideLeft && outsideRight) {
					correctedPlacement = 'top';
				} else if (outsideLeft) {
					correctedPlacement = 'top-start';
				} else if (outsideRight) {
					correctedPlacement = 'top-end';
				}
			} else {
				// Both outsideBottom and outsideTop: keep bottom but still apply horizontal correction
				if (outsideLeft) {
					correctedPlacement = 'bottom-start';
				} else if (outsideRight) {
					correctedPlacement = 'bottom-end';
				}
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
			if (!outsideBottom) {
				correctedPlacement = placement?.replace('top', 'bottom');

				if (outsideLeft && outsideRight) {
					correctedPlacement = 'bottom';
				} else if (outsideLeft) {
					correctedPlacement = 'bottom-start';
				} else if (outsideRight) {
					correctedPlacement = 'bottom-end';
				}
			} else {
				// Both outsideTop and outsideBottom: keep top but still apply horizontal correction
				if (outsideLeft) {
					correctedPlacement = 'top-start';
				} else if (outsideRight) {
					correctedPlacement = 'top-end';
				}
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
			if (!outsideRight) {
				correctedPlacement = placement?.replace('left', 'right');

				if (outsideBottom && outsideTop) {
					correctedPlacement = 'right';
				} else if (outsideBottom) {
					correctedPlacement = 'right-end';
				} else if (outsideTop) {
					correctedPlacement = 'right-start';
				}
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
			if (!outsideLeft) {
				correctedPlacement = placement?.replace('right', 'left');

				if (outsideBottom && outsideTop) {
					correctedPlacement = 'left';
				} else if (outsideBottom) {
					correctedPlacement = 'left-end';
				} else if (outsideTop) {
					correctedPlacement = 'left-start';
				}
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
		innerHeight,
		outsideYBoth: outsideTop && outsideBottom
	};
};

const MAX_ANCESTOR_DEPTH = 10;
const ancestorCache = new WeakMap<HTMLElement, HTMLElement | null>();

const getAncestorHasCorrectedPlacement = (
	element: HTMLElement
): HTMLElement | null => {
	if (ancestorCache.has(element)) {
		return ancestorCache.get(element)!;
	}

	let current = element.parentElement;
	let anchor = 0;
	while (current && anchor < MAX_ANCESTOR_DEPTH) {
		if (current.dataset['correctedPlacement']) {
			ancestorCache.set(element, current);
			return current;
		}
		current = current.parentElement;
		anchor += 1;
	}

	ancestorCache.set(element, null);
	return null;
};

export const handleFixedPopover = ({
	element,
	parent,
	placement,
	forceAbsolute
}: {
	element: HTMLElement;
	parent: HTMLElement;
	placement?: string;
	forceAbsolute?: boolean;
}) => {
	if (!element || !parent) return;
	if (supportsAnchorPositioning()) {
		// The browser positions the element via CSS, we only sync the side.
		// `forceAbsolute` is still respected for the positioning scheme.
		element.style.position = forceAbsolute ? 'absolute' : '';
		syncAnchoredPlacement(
			element,
			parent,
			element.dataset?.['placement'] ?? placement ?? 'bottom'
		);
		return;
	}

	const parentComputedStyles = getComputedStyle(parent);
	const parentHasFloatingPosition = ['absolute', 'fixed'].includes(
		parentComputedStyles.position
	);
	const ancestorWithCorrectedPlacement =
		getAncestorHasCorrectedPlacement(element);
	const noFloatingAncestor =
		!ancestorWithCorrectedPlacement && !parentHasFloatingPosition;
	const computedStyle = getComputedStyle(element);

	// We skip if we don't have a floating popover
	if (
		computedStyle.position !== 'fixed' &&
		computedStyle.position !== 'absolute'
	) {
		return;
	}

	let distance = computedStyle.getPropertyValue('--db-popover-distance');

	if (!distance.length) {
		distance = '0px';
	}

	const elementPlacement =
		element?.dataset?.['placement'] ?? placement ?? 'bottom';

	let {
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
		innerHeight,
		outsideYBoth
	} = getFloatingProps(element, parent, elementPlacement);

	if (ancestorWithCorrectedPlacement) {
		const ancestorRect =
			ancestorWithCorrectedPlacement.getBoundingClientRect();

		left = Math.abs(left - ancestorRect.left);
		right = (width + Math.abs(right - ancestorRect.right)) * 1.5; // We add a transform -50% later
		top = Math.abs(top - ancestorRect.top);
		bottom = (height + Math.abs(bottom - ancestorRect.bottom)) * 1.5; // We add a transform -50% later
	}

	if (parentHasFloatingPosition) {
		/*
		 * If we have a floating element inside an element with position:absolute/fixed
		 * we need to calculate with relative values
		 * */
		left = 0;
		right = width;
		top = 0;
		bottom = height;
		if (['auto', 'inherit', '0'].includes(parentComputedStyles.zIndex)) {
			// We need the default zIndex for floating elements on the parent
			parent.style.zIndex = '1';
		}
	}

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
		} else {
			element.style.setProperty('--db-tooltip-arrow-inline-start', `50%`);
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
		} else {
			element.style.setProperty('--db-tooltip-arrow-block-start', `50%`);
		}
	}

	// Popover position
	// Reset shorthand inset properties from previous calls (e.g. outsideYBoth)
	// before writing new individual inset values
	element.style.insetBlock = '';
	element.style.insetInline = '';

	if (forceAbsolute) {
		if (
			correctedPlacement.startsWith('top') ||
			correctedPlacement.startsWith('bottom')
		) {
			left = 0;
			right = 0;
			bottom = height;
			top = height;
		}

		if (
			correctedPlacement.startsWith('right') ||
			correctedPlacement.startsWith('left')
		) {
			top = 0;
			bottom = 0;
			right = width;
			left = width;
		}
	}

	if (correctedPlacement === 'right' || correctedPlacement === 'left') {
		// center horizontally
		element.style.insetBlockStart = `${top + height / 2}px`;
	} else if (
		correctedPlacement === 'right-start' ||
		correctedPlacement === 'left-start'
	) {
		const end = top + childHeight;
		element.style.insetBlockStart = `${top}px`;
		element.style.insetBlockEnd = `${!parentHasFloatingPosition && end > innerHeight ? innerHeight : end}px`;
	} else if (
		correctedPlacement === 'right-end' ||
		correctedPlacement === 'left-end'
	) {
		const start = bottom - childHeight;
		element.style.insetBlockStart = `${!parentHasFloatingPosition && start < 0 ? 0 : start}px`;
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
		element.style.insetInlineEnd = `${!parentHasFloatingPosition && end > innerWidth ? innerWidth : end}px`;
	} else if (
		correctedPlacement === 'top-end' ||
		correctedPlacement === 'bottom-end'
	) {
		const start = right - childWidth;
		element.style.insetInlineStart = `${!parentHasFloatingPosition && start < 0 ? 0 : start}px`;
		element.style.insetInlineEnd = `${right}px`;
	}

	if (correctedPlacement?.startsWith('right')) {
		const end = right + childWidth;
		element.style.insetInlineStart = `calc(${right}px + ${distance})`;
		element.style.insetInlineEnd = `calc(${noFloatingAncestor && end > innerWidth ? innerWidth : end}px + ${distance})`;
	} else if (correctedPlacement?.startsWith('left')) {
		const start = left - childWidth;
		element.style.insetInlineStart = `calc(${noFloatingAncestor && start < 0 ? 0 : start}px - ${distance})`;
		element.style.insetInlineEnd = `calc(${right}px - ${distance})`;
	} else if (correctedPlacement?.startsWith('top')) {
		const start = top - childHeight;
		element.style.insetBlockStart = `calc(${noFloatingAncestor && start < 0 ? 0 : start}px - ${distance})`;
		element.style.insetBlockEnd = `calc(${parentHasFloatingPosition ? start : bottom}px - ${distance})`;
	} else if (correctedPlacement?.startsWith('bottom')) {
		const end = bottom + childHeight;
		element.style.insetBlockStart = `calc(${parentHasFloatingPosition ? end : bottom}px + ${distance})`;
		element.style.insetBlockEnd = `calc(${noFloatingAncestor && end > innerHeight ? innerHeight : end}px + ${distance})`;
	}

	// In this case we are outside of top and bottom so we need to scroll
	// We use the full height in this case
	if (outsideYBoth) {
		element.style.overflow = 'hidden auto';
		element.style.insetBlock = distance;
		element.style.maxBlockSize = `calc(${innerHeight}px - 2 * ${distance})`;
	} else {
		element.style.overflow = '';
		element.style.maxBlockSize = '';
	}

	element.style.position = forceAbsolute ? 'absolute' : 'fixed';
	element.dataset['correctedPlacement'] = correctedPlacement;

	// Set data-outside-vy / data-outside-vx for CSS-based flipping
	handleDataOutside(element);
};

/**
 * Detects whether a floating element overflows the viewport edges
 * and sets `data-outside-vy` / `data-outside-vx` attributes accordingly.
 * CSS rules can use these attributes to flip/reposition the element.
 *
 * If the element was already flipped (has existing data-outside-* attributes),
 * it checks whether the flipped position would overflow on the opposite side
 * using the parent's rect as reference, preventing infinite flip-flop.
 */
export interface DBDataOutsidePair {
	vx?: 'left' | 'right';
	vy?: 'top' | 'bottom';
}

export const handleDataOutside = (el: HTMLElement) => {
	if (!el) return;

	const { outTop, outBottom, outLeft, outRight } = isInView(el);
	let dataOutsidePair: DBDataOutsidePair = {};

	if (outTop || outBottom) {
		dataOutsidePair = { vy: outTop ? 'top' : 'bottom' };
		el.dataset['outsideVy'] = dataOutsidePair.vy!;
	} else {
		delete el.dataset['outsideVy'];
	}
	if (outLeft || outRight) {
		dataOutsidePair = {
			...dataOutsidePair,
			vx: outRight ? 'right' : 'left'
		};
		el.dataset['outsideVx'] = dataOutsidePair.vx!;
	} else {
		delete el.dataset['outsideVx'];
	}
};

const isInView = (el: HTMLElement) => {
	const { top, bottom, left, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;

	let outTop = top < 0;
	let outBottom = bottom > innerHeight;
	let outLeft = left < 0;
	let outRight = right > innerWidth;

	// We need to check if it was already outside
	const outsideY = el.dataset['outsideVy'];
	const outsideX = el.dataset['outsideVx'];
	const parentRect = el?.parentElement?.getBoundingClientRect();

	if (parentRect) {
		if (outsideY) {
			const position = el.dataset['outsideVy'];
			if (position === 'top') {
				outTop = parentRect.top - (bottom - parentRect.bottom) < 0;
			} else {
				outBottom =
					parentRect.bottom + (parentRect.top - top) > innerHeight;
			}
		}

		if (outsideX) {
			const position = el.dataset['outsideVx'];
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
