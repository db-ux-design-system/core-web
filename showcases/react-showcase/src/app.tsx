import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBControlPanelSkipNavigation,
	DBShell,
	DBShellContent,
	DBShellSubNavigation
} from '@components';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Actions1 from './control-panel/actions-1';
import Actions2 from './control-panel/actions-2';
import MetaNavigation from './control-panel/meta-navigation';
// Both DB-UX stylesheets are emitted as assets (`?url`); the active one is
// swapped at runtime via the "Adaptive coloring" switch (see the effect below).
// `db-ux.css` is the legacy color build, `db-ux-adaptive.css` drops the old
// colors and drives everything through the adaptive system.
import dbUxAdaptiveStyleUrl from './db-ux-adaptive.css?url';
import dbUxStyleUrl from './db-ux.css?url';
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
		shell,
		adaptiveColoring
	} = useQuery();

	useEffect(() => {
		const id = 'db-ux-stylesheet';
		let link = document.querySelector<HTMLLinkElement>(`#${id}`);
		if (!link) {
			link = document.createElement('link');
			link.id = id;
			link.rel = 'stylesheet';
			document.head.appendChild(link);
		}

		link.href = adaptiveColoring ? dbUxAdaptiveStyleUrl : dbUxStyleUrl;
	}, [adaptiveColoring]);

	if (page ?? fullscreen) {
		return (
			<div
				data-density={density}
				data-adaptive-coloring={adaptiveColoring ? 'true' : undefined}
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
			data-adaptive-coloring={adaptiveColoring ? 'true' : undefined}
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
			<DBShellContent data-density={density}>
				<Outlet />
			</DBShellContent>
		</DBShell>
	);
}
