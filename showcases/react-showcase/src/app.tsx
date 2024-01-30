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
			type="fixedHeaderFooter"
			fadeIn
			header={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					brand={
						<DBBrand title="React Showcase" anchorChildren>
							Showcase
						</DBBrand>
					}
					metaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onTonalityChange={setTonality}
						/>
					}
					callToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="text" noText>
							Search
						</DBButton>
					}
					actionBar={
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
