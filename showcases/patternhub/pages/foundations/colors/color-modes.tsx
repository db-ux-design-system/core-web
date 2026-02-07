import { DBButton, DBCard, DBTag } from '@db-ux/react-core-components/src';
import { useState } from 'react';
import { SEMANTICS } from '../../../../../packages/components/src/shared/constants';
import DefaultPage from '../../../components/default-page';

const colors = ['neutral', ...SEMANTICS];

const ColorOverview = () => {
	const [colorScheme, setColorScheme] = useState<string>('light');
	const [colorScheme2, setColorScheme2] = useState<string>('light');
	return (
		<DefaultPage>
			<h1>Color Schemes</h1>
			<p>
				You can use <code>data-mode="light|dark"</code> to force a
				container/component to enforce the mode:
			</p>
			<div className="color-modes-container" data-mode={colorScheme}>
				<p>This container changes based on the state.</p>
				<DBTag semantic="informational" emphasis="strong">
					{colorScheme}
				</DBTag>
				<DBButton
					icon={colorScheme === 'light' ? 'moon' : 'sun'}
					onClick={() => {
						setColorScheme(
							colorScheme === 'light' ? 'dark' : 'light'
						);
					}}>
					Interact with me for{' '}
					{colorScheme === 'light' ? 'dark' : 'light'}
					-mode
				</DBButton>

				<section data-mode="light">
					<h2>Permanent Light</h2>
					<p>I'll be always light colored independent from parent</p>
				</section>
				<section data-mode="dark">
					<h2>Permanent Dark</h2>
					<p>I'll be always dark colored independent from parent</p>
				</section>
			</div>

			<h2>Cards &amp; Levels</h2>
			<div className="color-modes-container" data-mode={colorScheme2}>
				<p>This container changes based on the state.</p>
				<DBTag semantic="informational" emphasis="strong">
					{colorScheme2}
				</DBTag>
				<DBButton
					icon={colorScheme === 'light' ? 'moon' : 'sun'}
					onClick={() => {
						setColorScheme2(
							colorScheme2 === 'light' ? 'dark' : 'light'
						);
					}}>
					Interact with me for{' '}
					{colorScheme2 === 'light' ? 'dark' : 'light'}
					-mode
				</DBButton>
				<section className="color-cards">
					{colors.map((color) => (
						<DBCard
							spacing="medium"
							elevationLevel="3"
							className={`db-color-${color}`}
							key={color}>
							<DBCard spacing="medium" elevationLevel="2">
								<DBCard spacing="medium">{color}</DBCard>
							</DBCard>
						</DBCard>
					))}
				</section>
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
