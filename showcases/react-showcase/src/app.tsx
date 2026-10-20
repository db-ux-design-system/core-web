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
import Actions1 from './control-panel/actions-1';
import Actions2 from './control-panel/actions-2';
import MetaNavigation from './control-panel/meta-navigation';
import useQuery from './hooks/use-query';
import Navigation from './navigation';
import Page from './page/page';

export default function App() {
	const {
		density,
		setDensity,
		color,
		setColor,
		page,
		fullscreen,
		setSettings,
		settings,
		shell
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

	if (!shell) {
		return <Page />;
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
					label="sub navigation"
				/>
			</DBShellSubNavigation>
			<DBControlPanelMobile
				skipNavigation={
					<DBControlPanelSkipNavigation>
						<a href="#main-content">Skip navigation</a>
					</DBControlPanelSkipNavigation>
				}
				brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
				actions1={
					<Actions1
						color={color}
						settings={settings}
						density={density}
						onSettingsChange={setSettings}
						onColorChange={setColor}
						onDensityChange={setDensity}
					/>
				}
				actions2={<Actions2 />}
				meta={<MetaNavigation />}>
				<Navigation
					label="mobile"
					variant={settings.navigationMobileVariant}
				/>
			</DBControlPanelMobile>
			<DBControlPanelDesktop
				skipNavigation={
					<DBControlPanelSkipNavigation>
						<a href="#main-content">Skip navigation</a>
					</DBControlPanelSkipNavigation>
				}
				brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
				meta={<MetaNavigation />}
				actions1={
					<Actions1
						color={color}
						settings={settings}
						density={density}
						onSettingsChange={setSettings}
						onColorChange={setColor}
						onDensityChange={setDensity}
					/>
				}
				actions2={<Actions2 />}>
				<Navigation
					label="desktop"
					variant={settings.navigationDesktopVariant}
				/>
			</DBControlPanelDesktop>
			<DBShellContent
				data-density={density}
				className={`db-color-${color}`}>
				<Outlet />
			</DBShellContent>
		</DBShell>
	);
}
