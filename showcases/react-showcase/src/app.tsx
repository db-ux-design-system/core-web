import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

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
			className="db-bg-neutral-0"
			type="fixedHeaderFooter"
			fadeIn
			slotHeader={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					slotBrand={
						<DBBrand title="React Showcase" anchorChildren>
							Showcase
						</DBBrand>
					}
					slotMetaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onTonalityChange={setTonality}
						/>
					}
					slotCallToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="text" noText>
							Search
						</DBButton>
					}
					slotActionBar={
						<>
							<DBButton icon="account" variant="text" noText>
								Profile
							</DBButton>
							<DBButton icon="alert" variant="text" noText>
								Notification
							</DBButton>
							<DBButton icon="help" variant="text" noText>
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
