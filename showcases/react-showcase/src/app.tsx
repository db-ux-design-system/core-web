import {
	DBButton,
	DBIcon,
	DBTabBar,
	DBTab,
	DBCard
} from '../../../packages/core/output/react/src';

function App() {
	return (
		<main>
			<h1>React</h1>
			<DBCard>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'center'
					}}>
					<DBButton variant="secondary">Test</DBButton>
					<DBButton text="Test" icon="account" />
					<DBIcon icon="account" />
				</div>
			</DBCard>

			<div
				style={{
					display: 'flex',
					gap: '4px',
					flexDirection: 'column'
				}}>
				<h2>TabBar</h2>
				<DBTabBar>
					<DBTab name="tab-bar-1" label="Tab1">
						<strong>Content 1-1</strong>
					</DBTab>
					<DBTab name="tab-bar-1" label="Tab2" active={true}>
						Content 1-2
					</DBTab>
				</DBTabBar>

				<DBTabBar
					tabs={[
						{
							name: 'tab-bar-2',
							label: '2-Tab1',
							active: true,
							children: <strong>Content 2-1</strong>
						},
						{
							name: 'tab-bar-2',
							label: '2-Tab2',
							content: 'Content 2-2'
						}
					]}
				/>
			</div>
		</main>
	);
}

export default App;
