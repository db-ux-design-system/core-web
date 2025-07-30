import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBShell,
	DBShellSubNavigation
} from '@components';
import { Outlet } from 'react-router-dom';
import MetaNavigation from './control-panel/meta-navigation';
import PrimaryActions from './control-panel/primary-actions';
import SecondaryActions from './control-panel/secondary-actions';
import useQuery from './hooks/use-query';
import Navigation from './navigation';

const App = () => {
	const {
		density,
		setDensity,
		color,
		setColor,
		page,
		fullscreen,
		setSettings,
		settings
	} = useQuery();

	if (page ?? fullscreen) {
		return (
			<div data-density={density} className={`db-color-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBShell
			fadeIn
			controlPanelDesktopPosition={settings.controlPanelDesktopPosition}
			controlPanelMobilePosition={settings.controlPanelMobilePosition}
			subNavigationDesktopPosition={settings.subNavigationDesktopPosition}
			subNavigationMobilePosition={settings.subNavigationMobilePosition}
			showSubNavigation={settings.subNavigation === 'true'}
			subNavigation={
				<DBShellSubNavigation>
					<Navigation
						variant={settings.subNavigationVariant}
						aria-label="sub navigation"
					/>
				</DBShellSubNavigation>
			}
			controlPanelMobile={
				<DBControlPanelMobile
					drawerHeadlinePlain="Showcase"
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					primaryActions={
						<PrimaryActions
							color={color}
							settings={settings}
							density={density}
							onSettingsChange={setSettings}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					secondaryActions={<SecondaryActions />}
					metaNavigation={<MetaNavigation />}>
					<Navigation variant={settings.navigationMobileVariant} />
				</DBControlPanelMobile>
			}
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					metaNavigation={<MetaNavigation />}
					primaryActions={
						<PrimaryActions
							color={color}
							settings={settings}
							density={density}
							onSettingsChange={setSettings}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					secondaryActions={<SecondaryActions />}>
					<Navigation variant={settings.navigationDesktopVariant} />
				</DBControlPanelDesktop>
			}>
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		</DBShell>
	);
};

export default App;
