import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';
import useQuery from './hooks/use-query';

const App = () => {
	const [tonality, setTonality, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName || fullscreen) {
		return (
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBPage
			type="fixedHeaderFooter"
			slotHeader={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
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
			}>
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
