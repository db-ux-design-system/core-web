import { DBButton, DBIcon, DBCard, DBDivider } from '../../../output/react/src';

function App() {
	return (
		<main>
			<h1>React</h1>
			<DBCard>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'stretch'
					}}>
					<DBDivider variant="vertical" />
					<DBButton variant="secondary">Test</DBButton>
					<DBDivider variant="vertical" />
					<DBButton text="Test" icon="account" />
					<DBIcon className="icon" icon="account" />
				</div>
			</DBCard>
		</main>
	);
}

export default App;
