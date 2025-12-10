import { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@components';
import { plagrounds } from './data';
import PlaygroundCard from './playground-card';

const Index = () => {
	return (
		<DBTabs>
			<DBTabList>
				<DBTabItem>StackBlitz</DBTabItem>
				<DBTabItem>CodeSandbox</DBTabItem>
			</DBTabList>
			{['stackblitz', 'codesandbox'].map((type) => (
				<DBTabPanel key={`${type}-playground`}>
					<section className="playground">
						<h2>
							{type === 'stackblitz'
								? 'StackBlitz'
								: 'CodeSandbox'}
						</h2>
						{plagrounds.map((playground) => (
							<PlaygroundCard
								key={`${type}-${playground.headline}`}
								type={type}
								{...playground}
							/>
						))}
					</section>
				</DBTabPanel>
			))}
		</DBTabs>
	);
};

export default Index;
