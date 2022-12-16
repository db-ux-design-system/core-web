import { DBButton, DBIcon, DBCard, DBDivider, DBInput } from '../../../output/react/src';

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

			<div
				style={{
					display: 'flex',
					gap: '1rem',
					margin: '1rem 0'
				}}>
				<section className="db-ui-expressive">
					<DBInput
						description="Das ist die Beschreibung"
						label="Textlabel"
						placeholder="irgendein Text"
						iconBefore="edit"
					/>
				</section>

				<section className="db-ui-expressive">
					<DBInput
						description="Das ist die Beschreibung"
						label="Textlabel"
						placeholder="irgendein Text"
						iconBefore="edit"
						iconAfter="heart"
						variant="error"
					/>
				</section>

				<section className="db-ui-regular">
					<DBInput label="Textlabel" placeholder="irgendein Text" />
				</section>

				<section className="db-ui-functional">
					<DBInput />
				</section>
			</div>
		</main>
	);
}

export default App;
