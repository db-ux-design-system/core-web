import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [density, setDensity, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName ?? fullscreen) {
		return (
			<div className={`db-density-${density} db-${color}`}>
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
					brand={<DBBrand>Showcase</DBBrand>}
					metaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					callToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="ghost" noText>
							Search
						</DBButton>
					}
					actionBar={
						<>
							<DBButton icon="account" variant="ghost" noText>
								Profile
							</DBButton>
							<DBButton icon="alert" variant="ghost" noText>
								Notification
							</DBButton>
							<DBButton icon="help" variant="ghost" noText>
								Help
							</DBButton>
						</>
					}>
					<Navigation />
				</DBHeader>
			}>
			<div className={`db-density-${density} db-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
