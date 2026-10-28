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
// The DB-UX stylesheets are emitted as assets (`?url`); the active one is
// swapped at runtime via the "Coloring" select (see the effect below).
// - `db-ux.css`: the legacy color build.
// - `db-ux-adaptive.css`: drops the legacy colors and drives everything through
//   the adaptive system.
// - `db-ux-legacy-adaptive.css`: loads both bundles so legacy and adaptive can
//   coexist on one page (`[data-adaptive-coloring="true"]` opts a subtree in).
import dbUxAdaptiveStyleUrl from './db-ux-adaptive.css?url';
import dbUxLegacyAdaptiveStyleUrl from './db-ux-legacy-adaptive.css?url';
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
		setShell,
		coloringMode,
		setColoringMode
	} = useQuery();

	// "adaptive" forces the whole document into adaptive coloring. "legacy" and
	// "legacy-adaptive" render legacy by default; "legacy-adaptive" additionally
	// loads the adaptive bundle so a `[data-adaptive-coloring="true"]` subtree
	// can opt in.
	const rootAdaptive = coloringMode === 'adaptive' ? 'true' : undefined;

	useEffect(() => {
		const id = 'db-ux-stylesheet';
		let link = document.querySelector<HTMLLinkElement>(`#${id}`);
		if (!link) {
			link = document.createElement('link');
			link.id = id;
			link.rel = 'stylesheet';
			document.head.appendChild(link);
		}

		if (coloringMode === 'adaptive') {
			link.href = dbUxAdaptiveStyleUrl;
		} else if (coloringMode === 'legacy-adaptive') {
			link.href = dbUxLegacyAdaptiveStyleUrl;
		} else {
			link.href = dbUxStyleUrl;
		}
	}, [coloringMode]);

	if (page ?? fullscreen) {
		return (
			<div
				data-density={density}
				data-adaptive-coloring={rootAdaptive}
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
			data-adaptive-coloring={rootAdaptive}
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
						shell={shell}
						coloringMode={coloringMode}
						onSettingsChange={setSettings}
						onColorChange={setColor}
						onDensityChange={setDensity}
						onShellChange={setShell}
						onColoringModeChange={setColoringMode}
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
						shell={shell}
						coloringMode={coloringMode}
						onSettingsChange={setSettings}
						onColorChange={setColor}
						onDensityChange={setDensity}
						onShellChange={setShell}
						onColoringModeChange={setColoringMode}
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
