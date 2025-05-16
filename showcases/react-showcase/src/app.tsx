import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBButton,
	DBShell
} from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [density, setDensity, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName ?? fullscreen) {
		return (
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBShell
			fadeIn
			controlPanelDesktopPosition="left"
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					metaNavigation={
						<DBControlPanelMetaNavigation>
							<MetaNavigation
								onColorChange={setColor}
								onDensityChange={setDensity}
							/>
						</DBControlPanelMetaNavigation>
					}
					primaryActions={
						<DBControlPanelPrimaryActions>
							<DBButton
								icon="magnifying_glass"
								variant="ghost"
								noText>
								Search
							</DBButton>
						</DBControlPanelPrimaryActions>
					}
					secondaryActions={
						<DBControlPanelSecondaryActions>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</DBControlPanelSecondaryActions>
					}>
					<Navigation />
				</DBControlPanelDesktop>
			}>
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		</DBShell>
	);
};

export default App;
