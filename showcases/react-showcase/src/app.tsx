import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	const [tonality, setTonality] = useState<string>();
	const [color, setColor] = useState<string>();

	return (
		<DBPage
			type="fixedHeaderFooter"
			slotHeader={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggleDrawer={(open) => setDrawerOpen(open)}
					slotBrand={<DBBrand anchorChildren>React Showcase</DBBrand>}
					slotMetaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onTonalityChange={setTonality}
						/>
					}
					slotCallToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="ghost">
							Search
						</DBButton>
					}
					slotActionBar={
						<>
							<DBButton icon="account" variant="ghost">
								Profile
							</DBButton>
							<DBButton icon="alert" variant="ghost">
								Notification
							</DBButton>
							<DBButton icon="help" variant="ghost">
								Help
							</DBButton>
						</>
					}>
					<Navigation />
				</DBHeader>
			}
			slotFooter={<div>FOOTER</div>}>
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
