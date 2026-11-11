/*
 * Examples of the Foundations page "Variables" (formerly Patternhub
 * "Variable Examples"). The green and yellow boxes have the size of the
 * variable, in every density. They only visualize it: use spacing variables
 * for gaps and paddings, not for widths.
 * Hidden in the sidebar (`!dev`), shown on the page by
 * generate-foundations.ts.
 */
import { DBButton, DBCard, DBIcon, DBInfotext } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import './examples.css';

const DENSITIES = ['functional', 'regular', 'expressive'] as const;
const capitalize = (value: string) =>
	`${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const PerDensity = ({ children }: { children: ReactNode }) => (
	<div className="foundations-density-grid">
		{DENSITIES.map((density) => (
			<DBCard key={density} data-density={density} spacing="small">
				<DBInfotext icon="none" semantic="informational">
					{capitalize(density)}
				</DBInfotext>
				{children}
			</DBCard>
		))}
	</div>
);

/** A box with the size of the variable; the sizes are in examples.css. */
const Box = ({
	variable
}: {
	variable: 'spacing-fixed-xl' | 'spacing-responsive-sm';
}) => (
	<div
		className="foundations-variable-box"
		data-variable={variable}
		aria-hidden="true"
	/>
);

const meta = {
	title: 'Foundations Examples/Variables',
	tags: ['!dev', '!autodocs'],
	parameters: { docs: { canvas: { sourceState: 'none' } } }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/** `gap: var(--db-spacing-fixed-xl)` between two icons. */
export const SpacingFixed: Story = {
	render: () => (
		<PerDensity>
			<div className="foundations-variable-row">
				<DBIcon icon="x_placeholder">User</DBIcon>
				<Box variable="spacing-fixed-xl" />
				<DBIcon icon="pen">Edit</DBIcon>
			</div>
			<code>--db-spacing-fixed-xl</code>
		</PerDensity>
	)
};

/** `margin-inline: var(--db-spacing-responsive-sm)`, also changes with the viewport. */
export const SpacingResponsive: Story = {
	render: () => (
		<PerDensity>
			<div className="foundations-variable-row">
				<Box variable="spacing-responsive-sm" />
				<span>content</span>
				<Box variable="spacing-responsive-sm" />
			</div>
			<code>--db-spacing-responsive-sm</code>
		</PerDensity>
	)
};

/** `--db-sizing-md`, the height of a medium button. */
export const Sizing: Story = {
	render: () => (
		<PerDensity>
			<div className="foundations-variable-row">
				<DBButton>Button</DBButton>
				<div
					className="foundations-variable-sizing"
					aria-hidden="true"
				/>
			</div>
			<code>--db-sizing-md</code>
		</PerDensity>
	)
};
