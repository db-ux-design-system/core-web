import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBControlPanelSkipNavigation,
	DBShell,
	DBShellContent,
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
			<div
				data-density={density}
				className={`fullscreen-container db-color-${color}`}>
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
			showSubNavigation={settings.subNavigation === 'true'}>
			<DBShellSubNavigation>
				<Navigation
					variant={settings.subNavigationVariant}
					aria-label="sub navigation"
				/>
			</DBShellSubNavigation>
			<DBControlPanelMobile
				skipNavigation={
					<DBControlPanelSkipNavigation>
						<a href="#main-content">Skip navigation</a>
					</DBControlPanelSkipNavigation>
				}
				brand={<DBControlPanelBrand data-logo="db-systel" />}
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
			<DBControlPanelDesktop
				skipNavigation={
					<DBControlPanelSkipNavigation>
						<a href="#main-content">Skip navigation</a>
					</DBControlPanelSkipNavigation>
				}
				brand={<DBControlPanelBrand data-logo="db-systel" />}
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
			<DBShellContent data-density={density} className={`db-${color}`}>
				<Outlet />
			</DBShellContent>
		</DBShell>
	);
};

export default App;
