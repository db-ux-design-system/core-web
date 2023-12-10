import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { DBButton, DBTag } from '../../../components/src';

const ColorOverview = () => {
	const [colorScheme, setColorScheme] = useState<string>('light');
	return (
		<DefaultPage>
			<h1>Color Schemes</h1>
			<div
				className="color-schemes-container"
				data-color-scheme={colorScheme}>
				<p>This container changes based on the state.</p>
				<DBTag variant="informational" emphasis="strong">
					{colorScheme}
				</DBTag>
				<DBButton
					icon={colorScheme === 'light' ? 'night' : 'day'}
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
		</DefaultPage>
	);
};

export default ColorOverview;
