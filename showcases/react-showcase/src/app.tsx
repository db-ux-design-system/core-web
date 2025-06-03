import { Outlet } from 'react-router-dom';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBShell
} from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './control-panel/meta-navigation';
import Navigation from './navigation';
import PrimaryActions from './control-panel/primary-actions';
import SecondaryActions from './control-panel/secondary-actions';
import { useEffect, useState } from 'react';
import {
	defaultSettings,
	DefaultSettings
} from '../../shared/default-component-data';

const App = () => {
	const { density, setDensity, color, setColor, pageName, fullscreen } =
		useQuery();

	const [subNavigationVariant, setSubNavigationVariant] = useState(
		defaultSettings.subNavigationVariant
	);
	const [subNavigation, setSubNavigation] = useState(
		defaultSettings.subNavigation
	);
	const [navigationDesktopVariant, setNavigationDesktopVariant] = useState(
		defaultSettings.navigationDesktopVariant
	);
	const [navigationMobileVariant, setNavigationMobileVariant] = useState(
		defaultSettings.navigationMobileVariant
	);
	const [subNavigationDesktopPosition, setSubNavigationDesktopPosition] =
		useState(defaultSettings.subNavigationDesktopPosition);
	const [controlPanelDesktopPosition, setControlPanelDesktopPosition] =
		useState(defaultSettings.controlPanelDesktopPosition);
	const [controlPanelMobilePosition, setControlPanelMobilePosition] =
		useState(defaultSettings.controlPanelMobilePosition);
	const [subNavigationMobilePosition, setSubNavigationMobilePosition] =
		useState(defaultSettings.subNavigationMobilePosition);

	const onSettingsChange = (_settings: DefaultSettings) => {
		if (_settings.subNavigationVariant !== undefined) {
			setSubNavigationVariant(_settings.subNavigationVariant);
		}
		if (_settings.subNavigation !== undefined) {
			setSubNavigation(_settings.subNavigation);
		}
		if (_settings.navigationDesktopVariant !== undefined) {
			setNavigationDesktopVariant(_settings.navigationDesktopVariant);
		}
		if (_settings.navigationMobileVariant !== undefined) {
			setNavigationMobileVariant(_settings.navigationMobileVariant);
		}
		if (_settings.subNavigationDesktopPosition !== undefined) {
			setSubNavigationDesktopPosition(
				_settings.subNavigationDesktopPosition
			);
		}
		if (_settings.controlPanelDesktopPosition !== undefined) {
			setControlPanelDesktopPosition(
				_settings.controlPanelDesktopPosition
			);
		}
		if (_settings.controlPanelMobilePosition !== undefined) {
			setControlPanelMobilePosition(_settings.controlPanelMobilePosition);
		}
		if (_settings.subNavigationMobilePosition !== undefined) {
			setSubNavigationMobilePosition(
				_settings.subNavigationMobilePosition
			);
		}
	};

	if (pageName ?? fullscreen) {
		return (
			<div data-density={density} className={`db-color-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBShell
			fadeIn
			controlPanelDesktopPosition={controlPanelDesktopPosition}
			controlPanelMobilePosition={controlPanelMobilePosition}
			subNavigationDesktopPosition={subNavigationDesktopPosition}
			subNavigationMobilePosition={subNavigationMobilePosition}
			subNavigation={
				subNavigation === 'true' ? (
					<Navigation variant={subNavigationVariant} />
				) : null
			}
			controlPanelMobile={
				<DBControlPanelMobile
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}
					metaNavigation={
						<MetaNavigation
							onSettingsChange={onSettingsChange}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}>
					<Navigation variant={navigationMobileVariant} />
				</DBControlPanelMobile>
			}
			controlPanelDesktop={
				<DBControlPanelDesktop
					brand={<DBControlPanelBrand>Showcase</DBControlPanelBrand>}
					metaNavigation={
						<MetaNavigation
							onSettingsChange={onSettingsChange}
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					primaryActions={<PrimaryActions />}
					secondaryActions={<SecondaryActions />}>
					<Navigation variant={navigationDesktopVariant} />
				</DBControlPanelDesktop>
			}>
			<div data-density={density} className={`db-color-${color}`}>
				<Outlet />
			</div>
		</DBShell>
	);
};

export default App;
