import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { DBButton, DBTag, DBCard } from '../../../components/src';
import { SEMANTICS } from '../../../components/src/shared/constants';

const colors = ['neutral', ...SEMANTICS];

const ColorOverview = () => {
	const [colorScheme, setColorScheme] = useState<string>('light');
	const [colorScheme2, setColorScheme2] = useState<string>('light');
	return (
		<DefaultPage>
			<h1>Color Schemes</h1>
			<p>
				You can use <code>data-color-scheme="light/dark"</code> to force
				a container/component to keep the color-scheme:
			</p>
			<div
				className="color-schemes-container"
				data-color-scheme={colorScheme}>
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
					Click me for {colorScheme === 'light' ? 'dark' : 'light'}
					-mode
				</DBButton>

				<section data-color-scheme="light">
					<h2>Permanent Light</h2>
					<p>I'll be always light independent from parent</p>
				</section>
				<section data-color-scheme="dark">
					<h2>Permanent Dark</h2>
					<p>I'll be always dark independent from parent</p>
				</section>
			</div>

			<h2>Cards & Levels</h2>
			<div
				className="color-schemes-container"
				data-color-scheme={colorScheme2}>
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
					Click me for {colorScheme2 === 'light' ? 'dark' : 'light'}
					-mode
				</DBButton>
				<section className="color-cards">
					{colors.map((color) => (
						<div key={color} className={`db-${color}-bg-lvl-1`}>
							<DBCard spacing="medium" elevationLevel="3">
								<DBCard spacing="medium" elevationLevel="2">
									<DBCard spacing="medium">{color}</DBCard>
								</DBCard>
							</DBCard>
						</div>
					))}
				</section>
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
