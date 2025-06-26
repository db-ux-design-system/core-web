import { Outlet } from 'react-router-dom';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBShell
} from '@components';
import useQuery from './hooks/use-query';
import MetaNavigation from './control-panel/meta-navigation';
import Navigation from './navigation';
import PrimaryActions from './control-panel/primary-actions';
import SecondaryActions from './control-panel/secondary-actions';

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
			subNavigation={
				settings.subNavigation === 'true' ? (
					<Navigation variant={settings.subNavigationVariant} />
				) : null
			}
			controlPanelMobile={
				<DBControlPanelMobile
					brandDrawer={
						<DBControlPanelBrand>Showcase</DBControlPanelBrand>
					}
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}
					metaNavigation={
						<MetaNavigation
							color={color}
							settings={settings}
							density={density}
							onSettingsChange={setSettings}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}>
					<Navigation variant={settings.navigationMobileVariant} />
				</DBControlPanelMobile>
			}
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					metaNavigation={
						<MetaNavigation
							color={color}
							settings={settings}
							density={density}
							onSettingsChange={setSettings}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}>
					<Navigation variant={settings.navigationDesktopVariant} />
				</DBControlPanelDesktop>
			}>
			<div data-density={density} className={`db-color-${color}`}>
				<Outlet />
			</div>
		</DBShell>
	);
};

export default App;
