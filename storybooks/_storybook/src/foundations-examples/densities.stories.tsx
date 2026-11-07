/*
 * Examples of the Foundations page "Densities" (formerly Patternhub "Density
 * Examples"). Hidden in the sidebar (`!dev`), shown on the page by
 * generate-foundations.ts.
 */
import { DBButton, DBCard, DBInput } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import './examples.css';

const DENSITIES = ['functional', 'regular', 'expressive'] as const;
const capitalize = (value: string) =>
	`${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const meta = {
	title: 'Foundations Examples/Densities',
	tags: ['!dev', '!autodocs'],
	parameters: { docs: { canvas: { sourceState: 'none' } } }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/** The same form in every density; inspect it to compare spacing and sizing. */
export const SideBySide: Story = {
	render: () => (
		<div className="foundations-density-grid">
			{DENSITIES.map((density) => (
				<div key={density} data-density={density}>
					<DBCard spacing="small">
						<strong>{capitalize(density)}: Login</strong>
						<p>Sign in to see your bookings.</p>
						<DBInput label="Username" />
						<DBInput label="Password" type="password" />
						<DBButton width="full" variant="brand">
							Login
						</DBButton>
					</DBCard>
				</div>
			))}
		</div>
	)
};

/** Several densities on one page: functional for secondary content. */
export const Combined: Story = {
	render: () => (
		<div className="foundations-example">
			<div
				className="foundations-density-row"
				data-density="functional"
				style={{ '--columns': 5 } as CSSProperties}>
				{[
					['neutral', 'We are functional'],
					['informational', 'even though we have'],
					['successful', 'a color,'],
					['warning', 'the user should not'],
					['critical', 'focus on us']
				].map(([color, text]) => (
					<DBCard
						key={color}
						className={`db-color-${color} db-bg-color-basic-level-2`}
						spacing="small">
						{text}
					</DBCard>
				))}
			</div>
			<div data-density="expressive">
				<DBCard spacing="medium">
					I am expressive: the user should focus on me first
				</DBCard>
			</div>
			<div className="foundations-density-row" data-density="regular">
				<DBCard spacing="small">We</DBCard>
				<DBCard spacing="small">are</DBCard>
				<DBCard spacing="small">regular</DBCard>
			</div>
		</div>
	)
};
