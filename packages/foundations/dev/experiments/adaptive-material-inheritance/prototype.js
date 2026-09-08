const transparent = 'rgba(0, 0, 0, 0)';
const failures = [];
const colorModes = [
	{ id: 'neutral', label: 'Grey' },
	{ id: 'brand', label: 'Brand' },
	{ id: 'yellow', label: 'Yellow' },
	{ id: 'orange', label: 'Orange' },
	{ id: 'red', label: 'Red' },
	{ id: 'burgundy', label: 'Burgundy' },
	{ id: 'pink', label: 'Pink' },
	{ id: 'violet', label: 'Violet' },
	{ id: 'informational', label: 'Blue' },
	{ id: 'cyan', label: 'Cyan' },
	{ id: 'turquoise', label: 'Turquoise' },
	{ id: 'light-green', label: 'Light Green' },
	{ id: 'green', label: 'Green' }
];
const schemeModes = [
	{ id: 'light', label: 'Light' },
	{ id: 'dark', label: 'Dark' }
];
const materialModes = [
	{ id: 'filled-1', label: 'Filled Level 1' },
	{ id: 'filled-2', label: 'Filled Level 2' },
	{ id: 'filled-3', label: 'Filled Level 3' },
	{ id: 'vibrant', label: 'Vibrant' },
	{ id: 'origin', label: 'Origin' },
	{ id: 'inverted', label: 'Inverted' },
	{ id: 'transparent', label: 'Transparent' },
	{ id: 'transparent-semi', label: 'Transparent Semi' }
];
const emphasisModes = [
	{
		id: 'default',
		label: 'Default',
		bodyWeight: '400',
		headlineWeight: '400',
		opacity: '1'
	},
	{
		id: 'low',
		label: 'Low',
		bodyWeight: '400',
		headlineWeight: '400',
		opacity: '0.8'
	},
	{
		id: 'high',
		label: 'High',
		bodyWeight: '700',
		headlineWeight: '900',
		opacity: '1'
	}
];
const wcagModes = [
	{ id: 'aa', label: 'AA' },
	{ id: 'aaa', label: 'AAA' }
];
const contrastModes = [
	{ id: 'max', label: 'Max' },
	{ id: 'min', label: 'Min' }
];
const minContrastMaterials = new Set(['filled-1', 'filled-2', 'filled-3']);
const transparentMaterials = new Set(['transparent', 'transparent-semi']);
function minContrastApplies(material, parentMaterial) {
	return (
		minContrastMaterials.has(material) ||
		(transparentMaterials.has(material) &&
			minContrastMaterials.has(parentMaterial))
	);
}
const sizeModes = [
	{
		id: '3xs',
		label: '3XS',
		componentHeight: 16,
		componentPadding: 0,
		contentGap: 2,
		contentHeight: 16,
		contentPaddingBlock: 0,
		contentPaddingInline: 2,
		cornerRadius: 4,
		fontSize: 10.67,
		iconSize: 12,
		lineHeight: 16,
		rowPaddingInline: 2
	},
	{
		id: '2xs',
		label: '2XS',
		componentHeight: 18,
		componentPadding: 1,
		contentGap: 2,
		contentHeight: 16,
		contentPaddingBlock: 0,
		contentPaddingInline: 2,
		cornerRadius: 4,
		fontSize: 10.67,
		iconSize: 12,
		lineHeight: 16,
		rowPaddingInline: 2
	},
	{
		id: 'xs',
		label: 'XS',
		componentHeight: 20,
		componentPadding: 1,
		contentGap: 3,
		contentHeight: 18,
		contentPaddingBlock: 0,
		contentPaddingInline: 2,
		cornerRadius: 4,
		fontSize: 12,
		iconSize: 14,
		lineHeight: 18,
		rowPaddingInline: 2
	},
	{
		id: 'sm',
		label: 'SM',
		componentHeight: 24,
		componentPadding: 2,
		contentGap: 3,
		contentHeight: 20,
		contentPaddingBlock: 0,
		contentPaddingInline: 2,
		cornerRadius: 4,
		fontSize: 13.33,
		iconSize: 16,
		lineHeight: 20,
		rowPaddingInline: 3
	},
	{
		id: 'md',
		label: 'MD',
		componentHeight: 28,
		componentPadding: 2,
		contentGap: 2,
		contentHeight: 24,
		contentPaddingBlock: 0,
		contentPaddingInline: 4,
		cornerRadius: 4,
		fontSize: 16,
		iconSize: 20,
		lineHeight: 24,
		rowPaddingInline: 2
	},
	{
		id: 'lg',
		label: 'LG',
		componentHeight: 32,
		componentPadding: 2,
		contentGap: 2,
		contentHeight: 28,
		contentPaddingBlock: 2,
		contentPaddingInline: 4,
		cornerRadius: 4,
		fontSize: 16,
		iconSize: 20,
		lineHeight: 24,
		rowPaddingInline: 4
	},
	{
		id: 'xl',
		label: 'XL',
		componentHeight: 40,
		componentPadding: 4,
		contentGap: 2,
		contentHeight: 32,
		contentPaddingBlock: 4,
		contentPaddingInline: 4,
		cornerRadius: 4,
		fontSize: 16,
		iconSize: 20,
		lineHeight: 24,
		rowPaddingInline: 6
	},
	{
		id: '2xl',
		label: '2XL',
		componentHeight: 48,
		componentPadding: 4,
		contentGap: 2,
		contentHeight: 40,
		contentPaddingBlock: 8,
		contentPaddingInline: 4,
		cornerRadius: 4,
		fontSize: 16,
		iconSize: 20,
		lineHeight: 24,
		rowPaddingInline: 8
	}
];
const sizeCustomProperties = {
	'--prototype-component-height': 'componentHeight',
	'--prototype-component-padding': 'componentPadding',
	'--prototype-content-gap': 'contentGap',
	'--prototype-content-height': 'contentHeight',
	'--prototype-content-padding-block': 'contentPaddingBlock',
	'--prototype-content-padding-inline': 'contentPaddingInline',
	'--prototype-corner-radius': 'cornerRadius',
	'--prototype-font-size': 'fontSize',
	'--prototype-icon-size': 'iconSize',
	'--prototype-line-height': 'lineHeight',
	'--prototype-row-padding-inline': 'rowPaddingInline'
};

const previewContext = document.querySelector('[data-preview-context]');
const previewTitle = document.querySelector('[data-preview-title]');
const previewContextLabel = document.querySelector(
	'[data-preview-context-label]'
);
const nestedComponents = [
	...document.querySelectorAll('[data-nested-component]')
];
const parentSizeLabel = document.querySelector('[data-parent-size-label]');
const nestedSizeLabels = [
	...document.querySelectorAll('[data-nested-size-label]')
];
const sizeRelation = document.querySelector('[data-size-relation]');
const modeControls = document.querySelector('[data-mode-controls]');
const modeSelects = [...document.querySelectorAll('[data-mode-select]')];

function updatePreview() {
	for (const select of modeSelects) {
		previewContext.dataset[select.dataset.modeSelect] = select.value;
	}

	const scheme = schemeModes.find(
		(candidate) => candidate.id === previewContext.dataset.mode
	);
	const color = colorModes.find(
		(candidate) => candidate.id === previewContext.dataset.color
	);
	const material = materialModes.find(
		(candidate) => candidate.id === previewContext.dataset.material
	);
	const size = sizeModes.find(
		(candidate) => candidate.id === previewContext.dataset.size
	);
	const emphasis = emphasisModes.find(
		(candidate) => candidate.id === previewContext.dataset.emphasis
	);
	const wcag = wcagModes.find(
		(candidate) => candidate.id === previewContext.dataset.wcag
	);
	const contrast = contrastModes.find(
		(candidate) => candidate.id === previewContext.dataset.contrast
	);
	const sizeIndex = sizeModes.findIndex(
		(candidate) => candidate.id === size.id
	);
	const nestedSize = sizeModes[Math.max(0, sizeIndex - 1)];
	for (const component of nestedComponents) {
		component.dataset.size = nestedSize.id;
	}
	parentSizeLabel.textContent = size.label;
	for (const label of nestedSizeLabels) {
		label.textContent = nestedSize.label;
	}
	sizeRelation.textContent =
		sizeIndex === 0
			? `${size.label} → ${nestedSize.label} (kleinste Stufe)`
			: `${size.label} → ${nestedSize.label}`;
	previewTitle.textContent = material.label;
	previewContextLabel.textContent = `${scheme.label} · ${color.label} · ${size.label} · ${emphasis.label} · ${wcag.label} · ${contrast.label}`;
}

modeControls.addEventListener('change', updatePreview);
updatePreview();

const expectedFilled1 = {
	neutral: {
		light: {
			background: 'color(srgb 1 1 1)',
			text: 'color(srgb 0.0862745121 0.0941176489 0.1058823541)',
			border: 'color(srgb 0.8839196563 0.8849160075 0.8864106536)'
		},
		dark: {
			background: 'color(srgb 0.0862745121 0.0941176489 0.1058823541)',
			text: 'color(srgb 0.9294117689 0.9333333373 0.9411764741)',
			border: 'color(srgb 0.171542868 0.1789894104 0.1903575212)'
		}
	},
	brand: {
		light: {
			background: 'color(srgb 1 0.9725490212 0.9725490212)',
			text: 'color(srgb 0.2235294133 0 0.0039215689)',
			border: 'color(srgb 0.905392766 0.8540510535 0.8545288444)'
		},
		dark: {
			background: 'color(srgb 0.2235294133 0 0.0039215689)',
			text: 'color(srgb 1 0.9137254953 0.9137254953)',
			border: 'color(srgb 0.3159003556 0.1086991429 0.1121541858)'
		}
	},
	informational: {
		light: {
			background: 'color(srgb 0.9725490212 0.9764705896 1)',
			text: 'color(srgb 0.0078431377 0.0823529437 0.2352941185)',
			border: 'color(srgb 0.8512740135 0.8640693426 0.9038673639)'
		},
		dark: {
			background: 'color(srgb 0.0078431377 0.0823529437 0.2352941185)',
			text: 'color(srgb 0.9176470637 0.9294117689 0.9960784316)',
			border: 'color(srgb 0.1054925099 0.1732678711 0.3169491887)'
		}
	}
};

const expectedOriginAaa = {
	neutral: {
		background: 'color(srgb 0.2823529541 0.2941176593 0.3254902065)',
		text: 'color(srgb 1 1 1)',
		border: 'color(srgb 0.3492567241 0.3599246442 0.3883724511)'
	},
	brand: {
		background: 'color(srgb 0.611764729 0 0.0392156877)',
		text: 'color(srgb 1 0.9725490212 0.9725490212)',
		border: 'color(srgb 0.6771408916 0.1637705564 0.1963825971)'
	},
	yellow: {
		background: 'color(srgb 1 0.8470588326 0)',
		text: 'color(srgb 0.0745098069 0.0549019612 0)',
		border: 'color(srgb 0.8823834062 0.7463870049 0)'
	},
	orange: {
		background: 'color(srgb 0.9529411793 0.5725490451 0)',
		text: 'color(srgb 0.0980392173 0.0431372561 0)',
		border: 'color(srgb 0.8338151574 0.4987783432 0)'
	},
	red: {
		background: 'color(srgb 0.611764729 0 0.0392156877)',
		text: 'color(srgb 1 0.9725490212 0.9725490212)',
		border: 'color(srgb 0.6771408916 0.1637705564 0.1963825971)'
	},
	burgundy: {
		background: 'color(srgb 0.4941176474 0.1921568662 0.2666666806)',
		text: 'color(srgb 0.9882352948 0.9725490212 0.9764705896)',
		border: 'color(srgb 0.5472767949 0.2761145532 0.3430302143)'
	},
	pink: {
		background: 'color(srgb 0.9450980425 0.5490196347 0.6980392337)',
		text: 'color(srgb 0.1333333403 0.0117647061 0.0627451017)',
		border: 'color(srgb 0.8328911066 0.4747570753 0.6102250814)'
	},
	violet: {
		background: 'color(srgb 0.400000006 0.2235294133 0.470588237)',
		text: 'color(srgb 0.9843137264 0.9725490212 0.9882352948)',
		border: 'color(srgb 0.4596249759 0.2999614179 0.5234103799)'
	},
	informational: {
		background: 'color(srgb 0.0588235296 0.2745098174 0.631372571)',
		text: 'color(srgb 0.9725490212 0.9764705896 1)',
		border: 'color(srgb 0.1591993421 0.3516225517 0.6718675494)'
	},
	cyan: {
		background: 'color(srgb 0.2196078449 0.7137255073 0.9372549057)',
		text: 'color(srgb 0.0039215689 0.0627451017 0.0941176489)',
		border: 'color(srgb 0.1896430999 0.6232864857 0.8201200366)'
	},
	turquoise: {
		background: 'color(srgb 0 0.7490196228 0.7176470757)',
		text: 'color(srgb 0 0.0666666701 0.0627451017)',
		border: 'color(srgb 0 0.6545543671 0.6269821525)'
	},
	'light-green': {
		background: 'color(srgb 0.4470588267 0.7490196228 0.1019607857)',
		text: 'color(srgb 0.0235294122 0.0666666701 0)',
		border: 'color(srgb 0.3884150386 0.6545379758 0.087842837)'
	},
	green: {
		background: 'color(srgb 0.1529411823 0.3333333433 0.1254902035)',
		text: 'color(srgb 0.9333333373 0.9960784316 0.9254902005)',
		border: 'color(srgb 0.2306194454 0.3993013203 0.2051201761)'
	}
};

const normalizationProbe = document.createElement('span');
normalizationProbe.hidden = true;
document.body.append(normalizationProbe);

function normalizeColor(value) {
	normalizationProbe.style.color = value;
	return getComputedStyle(normalizationProbe).color;
}

function getColorFromProperty(style, property, scheme, context) {
	const token = style.getPropertyValue(property).trim();
	if (!token) {
		failures.push(`${context}: Token ${property} fehlt`);
		return transparent;
	}
	normalizationProbe.style.colorScheme = scheme;
	normalizationProbe.style.color = token;
	return getComputedStyle(normalizationProbe).color;
}

function getMinOnColor(style, scheme, context) {
	return getColorFromProperty(
		style,
		`--prototype-on-min-${scheme}`,
		scheme,
		context
	);
}

function getBaseOnColor(style, scheme, context) {
	return getColorFromProperty(
		style,
		`--prototype-on-base-${scheme}`,
		scheme,
		context
	);
}

function getMinVisualColor(style, scheme, context) {
	return getColorFromProperty(
		style,
		`--prototype-visual-min-${scheme}`,
		scheme,
		context
	);
}

function getExpectedOnColor(
	style,
	scheme,
	material,
	contrast,
	context,
	parentMaterial
) {
	return contrast === 'min' && minContrastApplies(material, parentMaterial)
		? getMinOnColor(style, scheme, context)
		: getBaseOnColor(style, scheme, context);
}

function getExpectedVisualColor(
	style,
	scheme,
	material,
	contrast,
	context,
	parentMaterial
) {
	return contrast === 'min' && minContrastApplies(material, parentMaterial)
		? getMinVisualColor(style, scheme, context)
		: getBaseOnColor(style, scheme, context);
}

function getContrastRatio(firstColor, secondColor) {
	const getLuminance = (color) => {
		const channels = color
			.match(/[\d.]+/g)
			.slice(0, 3)
			.map(Number);
		const srgbChannels = color.startsWith('color(')
			? channels
			: channels.map((channel) => channel / 255);
		const linearChannels = srgbChannels.map((channel) =>
			channel <= 0.04045
				? channel / 12.92
				: ((channel + 0.055) / 1.055) ** 2.4
		);
		return (
			0.2126 * linearChannels[0] +
			0.7152 * linearChannels[1] +
			0.0722 * linearChannels[2]
		);
	};
	const firstLuminance = getLuminance(firstColor);
	const secondLuminance = getLuminance(secondColor);
	return (
		(Math.max(firstLuminance, secondLuminance) + 0.05) /
		(Math.min(firstLuminance, secondLuminance) + 0.05)
	);
}

function checkColorSnapshot(style, expected, context) {
	const actualValues = {
		background: style.backgroundColor,
		text: style.color,
		border: style.borderTopColor
	};

	for (const [property, expectedValue] of Object.entries(expected)) {
		if (actualValues[property] !== normalizeColor(expectedValue)) {
			failures.push(
				`${context}: ${property} weicht vom Figma-Snapshot ab`
			);
		}
	}
}

function checkFilled1Snapshot(style, color, scheme, wcag, contrast, context) {
	const snapshot = expectedFilled1[color][scheme];
	const expectedText =
		contrast === 'min'
			? getExpectedOnColor(style, scheme, 'filled-1', contrast, context)
			: snapshot.text;
	const expected = {
		background: snapshot.background,
		text: expectedText
	};
	if (wcag !== 'aaa') {
		expected.border = snapshot.border;
	}
	checkColorSnapshot(style, expected, context);
}

function checkSizeSnapshot(style, size, context) {
	const expected = sizeModes.find((candidate) => candidate.id === size);

	for (const [property, valueKey] of Object.entries(sizeCustomProperties)) {
		const actualValue = style.getPropertyValue(property).trim();
		const expectedValue = `${expected[valueKey]}px`;
		if (actualValue !== expectedValue) {
			failures.push(
				`${context}: ${property} ist ${actualValue || 'nicht gesetzt'} statt ${expectedValue}`
			);
		}
	}

	const expectedComputedValues = {
		minBlockSize: `${expected.componentHeight}px`,
		paddingTop: `${expected.componentPadding}px`,
		borderTopLeftRadius: `${expected.cornerRadius}px`,
		fontSize: `${expected.fontSize}px`,
		lineHeight: `${expected.lineHeight}px`
	};
	for (const [property, expectedValue] of Object.entries(
		expectedComputedValues
	)) {
		if (style[property] !== expectedValue) {
			failures.push(
				`${context}: ${property} ist ${style[property]} statt ${expectedValue}`
			);
		}
	}
}

function checkEmphasisSnapshot(style, probe, emphasis, context) {
	const expected = emphasisModes.find(
		(candidate) => candidate.id === emphasis
	);
	const probeStyle = getComputedStyle(probe);
	const actualValues = {
		bodyWeight: style.fontWeight,
		headlineWeight: probeStyle.fontWeight,
		opacity: probeStyle.opacity
	};

	for (const property of ['bodyWeight', 'headlineWeight', 'opacity']) {
		if (actualValues[property] !== expected[property]) {
			failures.push(
				`${context}: Emphasis ${property} ist ${actualValues[property]} statt ${expected[property]}`
			);
		}
	}
}

function checkAdaptiveColorSnapshot(
	style,
	color,
	scheme,
	material,
	wcag,
	contrast,
	context
) {
	if (material !== 'origin') {
		return;
	}

	const expected =
		wcag === 'aaa'
			? {
					...expectedOriginAaa[color],
					border: expectedOriginAaa[color].text
				}
			: {
					background: style
						.getPropertyValue(`--prototype-bg-origin-${scheme}`)
						.trim(),
					text: style
						.getPropertyValue(`--prototype-on-origin-${scheme}`)
						.trim(),
					border: style
						.getPropertyValue(`--prototype-border-origin-${scheme}`)
						.trim()
				};

	if (contrast === 'min') {
		expected.text = getExpectedOnColor(
			style,
			scheme,
			material,
			contrast,
			context
		);
		if (wcag === 'aaa') {
			expected.border = style.borderTopColor;
		}
	}

	checkColorSnapshot(style, expected, context);
}

function checkContrastColor(
	style,
	scheme,
	material,
	contrast,
	context,
	parentMaterial
) {
	const expectedText = getExpectedOnColor(
		style,
		scheme,
		material,
		contrast,
		context,
		parentMaterial
	);
	if (style.color !== expectedText) {
		failures.push(
			`${context}: Contrast-On-Farbe ist nicht als erwarteter Palette- oder Basis-Token aufgelöst`
		);
	}

	const expectedVisual = getExpectedVisualColor(
		style,
		scheme,
		material,
		contrast,
		context,
		parentMaterial
	);
	const actualVisual = getColorFromProperty(
		style,
		`--prototype-visual-active-${scheme}`,
		scheme,
		context
	);
	if (actualVisual !== expectedVisual) {
		failures.push(
			`${context}: Contrast-Visual-Farbe ist nicht als erwarteter Palette- oder Basis-Token aufgelöst`
		);
	}
}

function checkSurface(
	surface,
	emphasisProbe,
	color,
	scheme,
	material,
	size,
	emphasis,
	wcag,
	contrast,
	context,
	parentMaterial
) {
	const style = getComputedStyle(surface);

	if (style.color === transparent) {
		failures.push(`${context}: Textfarbe fehlt`);
	}
	if (style.borderTopWidth === '0px') {
		failures.push(`${context}: Border-Geometrie fehlt`);
	}
	if (material.startsWith('transparent')) {
		if (style.borderTopColor !== transparent) {
			failures.push(`${context}: Border ist nicht transparent`);
		}
	} else {
		if (style.backgroundColor === transparent) {
			failures.push(`${context}: Background fehlt`);
		}
		if (style.borderTopColor === transparent) {
			failures.push(`${context}: Decorative Border fehlt`);
		}
		if (style.borderTopColor === style.backgroundColor) {
			failures.push(`${context}: Decorative Border ist nicht sichtbar`);
		}
		if (
			wcag === 'aaa' &&
			getContrastRatio(style.borderTopColor, style.backgroundColor) < 3
		) {
			failures.push(
				`${context}: AAA-Outline unterschreitet 3 : 1 zum Background`
			);
		}
	}
	if (style.colorScheme !== scheme) {
		failures.push(
			`${context}: Scheme ist ${style.colorScheme} statt ${scheme}`
		);
	}
	if (material === 'filled-1' && expectedFilled1[color]) {
		checkFilled1Snapshot(style, color, scheme, wcag, contrast, context);
	}
	checkAdaptiveColorSnapshot(
		style,
		color,
		scheme,
		material,
		wcag,
		contrast,
		context
	);
	if (contrast === 'min') {
		checkContrastColor(
			style,
			scheme,
			material,
			contrast,
			context,
			parentMaterial
		);
	}
	checkSizeSnapshot(style, size, context);
	checkEmphasisSnapshot(style, emphasisProbe, emphasis, context);
}

const fixture = document.createElement('div');
fixture.className = 'scheme-boundary';
fixture.setAttribute('aria-hidden', 'true');
Object.assign(fixture.style, {
	position: 'fixed',
	insetInlineStart: '-10000px',
	inlineSize: '20rem'
});
const inheritedSurface = document.createElement('div');
inheritedSurface.className = 'surface component';
const emphasisProbe = document.createElement('strong');
emphasisProbe.textContent = 'Emphasis probe';
inheritedSurface.append(emphasisProbe);
fixture.append(inheritedSurface);
document.body.append(fixture);

let checkedCombinationCount = 0;
for (const color of colorModes) {
	for (const scheme of schemeModes) {
		for (const material of materialModes) {
			for (const size of sizeModes) {
				for (const emphasis of emphasisModes) {
					for (const wcag of wcagModes) {
						for (const contrast of contrastModes) {
							fixture.dataset.color = color.id;
							fixture.dataset.mode = scheme.id;
							fixture.dataset.material = material.id;
							fixture.dataset.size = size.id;
							fixture.dataset.emphasis = emphasis.id;
							fixture.dataset.wcag = wcag.id;
							fixture.dataset.contrast = contrast.id;
							checkSurface(
								inheritedSurface,
								emphasisProbe,
								color.id,
								scheme.id,
								material.id,
								size.id,
								emphasis.id,
								wcag.id,
								contrast.id,
								`${scheme.id}/${color.id}/${material.id}/${size.id}/${emphasis.id}/${wcag.id}/${contrast.id}`
							);
							checkedCombinationCount += 1;
						}
					}
				}
			}
		}
	}
}

if (
	inheritedSurface.hasAttribute('data-mode') ||
	inheritedSurface.hasAttribute('data-color') ||
	inheritedSurface.hasAttribute('data-material') ||
	inheritedSurface.hasAttribute('data-size') ||
	inheritedSurface.hasAttribute('data-emphasis') ||
	inheritedSurface.hasAttribute('data-wcag') ||
	inheritedSurface.hasAttribute('data-contrast')
) {
	failures.push('Testfläche trägt Mode-Attribute statt sie zu erben');
}

fixture.dataset.color = 'brand';
fixture.dataset.mode = 'light';
fixture.dataset.material = 'filled-1';
fixture.dataset.size = 'md';
fixture.dataset.emphasis = 'default';
fixture.dataset.wcag = 'aa';
fixture.dataset.contrast = 'max';

inheritedSurface.dataset.color = 'informational';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'informational',
	'light',
	'filled-1',
	'md',
	'default',
	'aa',
	'max',
	'lokaler Color-Override'
);
delete inheritedSurface.dataset.color;

inheritedSurface.dataset.mode = 'dark';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'dark',
	'filled-1',
	'md',
	'default',
	'aa',
	'max',
	'lokaler Scheme-Override'
);
delete inheritedSurface.dataset.mode;

inheritedSurface.dataset.material = 'origin';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'light',
	'origin',
	'md',
	'default',
	'aa',
	'max',
	'lokaler Material-Override'
);
delete inheritedSurface.dataset.material;

inheritedSurface.dataset.size = '2xl';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'light',
	'filled-1',
	'2xl',
	'default',
	'aa',
	'max',
	'lokaler Size-Override'
);
delete inheritedSurface.dataset.size;

inheritedSurface.dataset.emphasis = 'high';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'light',
	'filled-1',
	'md',
	'high',
	'aa',
	'max',
	'lokaler Emphasis-Override'
);
delete inheritedSurface.dataset.emphasis;

fixture.dataset.material = 'origin';
inheritedSurface.dataset.wcag = 'aaa';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'light',
	'origin',
	'md',
	'default',
	'aaa',
	'max',
	'lokaler WCAG-Override'
);
delete inheritedSurface.dataset.wcag;

fixture.dataset.mode = 'dark';
fixture.dataset.material = 'inverted';
inheritedSurface.dataset.contrast = 'min';
checkSurface(
	inheritedSurface,
	emphasisProbe,
	'brand',
	'dark',
	'inverted',
	'md',
	'default',
	'aa',
	'min',
	'lokaler Contrast-Override'
);
delete inheritedSurface.dataset.contrast;

fixture.remove();

const nestedFixture = document.createElement('div');
nestedFixture.className = 'scheme-boundary';
nestedFixture.setAttribute('aria-hidden', 'true');
Object.assign(nestedFixture.style, {
	position: 'fixed',
	insetInlineStart: '-10000px',
	inlineSize: '20rem'
});
const nestedParentSurface = document.createElement('div');
nestedParentSurface.className = 'surface component';
const nestedTransparentSurface = document.createElement('div');
nestedTransparentSurface.className = 'surface component';
const nestedProbe = document.createElement('strong');
nestedProbe.textContent = 'Nested emphasis probe';
nestedTransparentSurface.append(nestedProbe);
nestedTransparentSurface.dataset.material = 'transparent';
nestedParentSurface.append(nestedTransparentSurface);
nestedFixture.append(nestedParentSurface);
document.body.append(nestedFixture);

for (const color of colorModes) {
	for (const scheme of schemeModes) {
		for (const parentMaterial of [
			'filled-1',
			'filled-2',
			'filled-3',
			'vibrant'
		]) {
			for (const material of transparentMaterials) {
				for (const contrast of contrastModes) {
					nestedFixture.dataset.color = color.id;
					nestedFixture.dataset.mode = scheme.id;
					nestedFixture.dataset.material = parentMaterial;
					nestedFixture.dataset.size = 'md';
					nestedFixture.dataset.emphasis = 'default';
					nestedFixture.dataset.wcag = 'aa';
					nestedFixture.dataset.contrast = contrast.id;
					nestedTransparentSurface.dataset.material = material;
					checkSurface(
						nestedTransparentSurface,
						nestedProbe,
						color.id,
						scheme.id,
						material,
						'md',
						'default',
						'aa',
						contrast.id,
						`${scheme.id}/${color.id}/${parentMaterial}/${material}/${contrast.id}`,
						parentMaterial
					);
				}
			}
		}
	}
}

nestedFixture.remove();
normalizationProbe.remove();

const expectedCombinationCount =
	colorModes.length *
	schemeModes.length *
	materialModes.length *
	sizeModes.length *
	emphasisModes.length *
	wcagModes.length *
	contrastModes.length;
if (checkedCombinationCount !== expectedCombinationCount) {
	failures.push(
		`${checkedCombinationCount} statt ${expectedCombinationCount} Kombinationen geprüft`
	);
}

const result = document.querySelector('[data-test-result]');
result.dataset.status = failures.length === 0 ? 'passed' : 'failed';
result.textContent =
	failures.length === 0
		? `Bestanden: Alle ${expectedCombinationCount} Kombinationen erben ihre Modes korrekt.`
		: `Fehlgeschlagen: ${failures.join('; ')}`;
