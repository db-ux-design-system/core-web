import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBNavigation,
	DBNavigationItem,
	DBShell
} from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './control-panel/meta-navigation';
import Navigation from './navigation';
import PrimaryActions from './control-panel/primary-actions';
import SecondaryActions from './control-panel/secondary-actions';
import NavItem from './navigation/nav-item';

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
			fadeIn /*
			controlPanelDesktopPosition="left"
			controlPanelMobilePosition="bottom"*/
			subNavigationDesktopPosition="left"
			subNavigationMobilePosition="top"
			subNavigation={<Navigation />}
			controlPanelMobile={
				<DBControlPanelMobile
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}
					metaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}>
					<Navigation />
				</DBControlPanelMobile>
			}
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					metaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}>
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
