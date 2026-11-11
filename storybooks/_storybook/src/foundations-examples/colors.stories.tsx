/*
 * Examples of the Foundations page "Colors" (formerly Patternhub "Color
 * Schemes" and "Color Modes"). Hidden in the sidebar (`!dev`), shown on the
 * page by generate-foundations.ts.
 */
import { DBButton, DBCard, DBSwitch, DBTag } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import './examples.css';

const SEMANTIC = [
	'neutral',
	'brand',
	'critical',
	'successful',
	'warning',
	'informational'
];
const ADDITIONAL = [
	'yellow',
	'orange',
	'red',
	'pink',
	'violet',
	'blue',
	'cyan',
	'turquoise',
	'green',
	'light-green',
	'burgundy'
];
const BACKGROUNDS = [
	'basic-level-1',
	'basic-level-2',
	'basic-level-3',
	'basic-transparent-full',
	'basic-transparent-semi'
];
/** Emphasis 70 and below have too little contrast for text. */
const ON_BACKGROUNDS = [
	'emphasis-100',
	'emphasis-90',
	'emphasis-80',
	'emphasis-70',
	'emphasis-60',
	'emphasis-50'
];
const LOW_CONTRAST = new Set(['emphasis-70', 'emphasis-60', 'emphasis-50']);

type GridProps = {
	values: string[];
	/** `data-color`, `data-bg-color` or `data-on-bg-color` */
	attribute: string;
	/** Class prefix of the same declaration, e.g. `db-color-` */
	prefix: string;
	note?: (value: string) => string | undefined;
};

const ColorGrid = ({ values, attribute, prefix, note }: GridProps) => {
	const [isClass, setIsClass] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [hasCheckerboard, setHasCheckerboard] = useState(false);
	return (
		<div className="foundations-example">
			<div className="foundations-example-switches">
				<DBSwitch
					checked={isClass}
					onChange={(event) => {
						setIsClass(event.target.checked);
					}}>
					Show classes instead of data attributes
				</DBSwitch>
				<DBSwitch
					checked={isDark}
					onChange={(event) => {
						setIsDark(event.target.checked);
					}}>
					Preview Dark Mode
				</DBSwitch>
				<DBSwitch
					checked={hasCheckerboard}
					onChange={(event) => {
						setHasCheckerboard(event.target.checked);
					}}>
					Show checkerboard
				</DBSwitch>
			</div>
			<div
				className="foundations-color-grid"
				data-mode={isDark ? 'dark' : 'light'}
				data-checkerboard={hasCheckerboard ? 'true' : 'false'}>
				{values.map((value) => {
					const label = isClass
						? `${prefix}${value}`
						: `${attribute}="${value}"`;
					return (
						<div
							key={value}
							{...(isClass
								? { className: `${prefix}${value}` }
								: { [attribute]: value })}>
							<code>
								{label}
								{note?.(value)}
							</code>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const meta = {
	title: 'Foundations Examples/Colors',
	tags: ['!dev', '!autodocs'],
	parameters: { docs: { canvas: { sourceState: 'none' } } }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * `data-color` (or the class `db-color-*`) gives a container a monochromatic
 * adaptive color scheme: texts, icons and backgrounds inside adapt to it.
 * Neutral is the regular scheme of the root. To style your own components, use
 * the CSS custom properties instead of these declarations.
 */
export const SemanticColorSchemes: Story = {
	render: () => (
		<ColorGrid
			values={SEMANTIC}
			attribute="data-color"
			prefix="db-color-"
		/>
	)
};

/** Additional color schemes without a semantic meaning. */
export const AdditionalColorSchemes: Story = {
	render: () => (
		<ColorGrid
			values={ADDITIONAL}
			attribute="data-color"
			prefix="db-color-"
		/>
	)
};

/**
 * `data-bg-color` sets the background, e.g. the elevation level, in the
 * current color scheme.
 */
export const BackgroundColors: Story = {
	render: () => (
		<ColorGrid
			values={BACKGROUNDS}
			attribute="data-bg-color"
			prefix="db-bg-color-"
		/>
	)
};

/**
 * `data-on-bg-color` sets the contrast of texts and icons in the current color
 * scheme. Emphasis 70 and below have too little contrast for text.
 */
export const OnBackgroundColors: Story = {
	render: () => (
		<ColorGrid
			values={ON_BACKGROUNDS}
			attribute="data-on-bg-color"
			prefix="db-on-bg-color-"
			note={(value) =>
				LOW_CONTRAST.has(value) ? ' – not for text' : undefined
			}
		/>
	)
};

const ModeToggle = ({
	mode,
	onToggle
}: {
	mode: 'light' | 'dark';
	onToggle: () => void;
}) => (
	<>
		<p>
			This container uses <code>data-mode="{mode}"</code>.{' '}
			<DBTag semantic="informational" emphasis="strong">
				{mode}
			</DBTag>
		</p>
		<DBButton icon={mode === 'light' ? 'moon' : 'sun'} onClick={onToggle}>
			Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
		</DBButton>
	</>
);

const ColorModesExample = () => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	return (
		<div className="foundations-color-modes" data-mode={mode}>
			<ModeToggle
				mode={mode}
				onToggle={() => {
					setMode(mode === 'light' ? 'dark' : 'light');
				}}
			/>
			<section data-mode="light">
				<strong>Always light</strong>
				<p>
					<code>data-mode="light"</code> keeps this section light,
					independent of its parent.
				</p>
			</section>
			<section data-mode="dark">
				<strong>Always dark</strong>
				<p>
					<code>data-mode="dark"</code> keeps this section dark,
					independent of its parent.
				</p>
			</section>
		</div>
	);
};

/** `data-mode="light"` or `"dark"` forces a mode on a container and its content. */
export const ColorModes: Story = { render: () => <ColorModesExample /> };

const CardsAndLevelsExample = () => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	return (
		<div className="foundations-color-modes" data-mode={mode}>
			<ModeToggle
				mode={mode}
				onToggle={() => {
					setMode(mode === 'light' ? 'dark' : 'light');
				}}
			/>
			<div className="foundations-color-cards">
				{SEMANTIC.map((color) => (
					<DBCard
						key={color}
						spacing="medium"
						elevationLevel="3"
						className={`db-color-${color}`}>
						<DBCard spacing="medium" elevationLevel="2">
							<DBCard spacing="medium">{color}</DBCard>
						</DBCard>
					</DBCard>
				))}
			</div>
		</div>
	);
};

/** Cards on the elevation levels in every semantic color scheme, in both modes. */
export const CardsAndLevels: Story = {
	render: () => <CardsAndLevelsExample />
};
