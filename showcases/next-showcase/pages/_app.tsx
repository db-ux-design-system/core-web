import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBShell,
	DBShellSubNavigation
} from '@components';
import type { AppProps } from 'next/app';
import { useId } from 'react';
import MetaNavigation from 'react-showcase/src/control-panel/meta-navigation';
import PrimaryActions from 'react-showcase/src/control-panel/primary-actions';
import SecondaryActions from 'react-showcase/src/control-panel/secondary-actions';
import useQuery from '../../react-showcase/src/hooks/use-query';
import Navigation from '../../react-showcase/src/navigation';
import '../../showcase-styles.css';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
	const controlPanelDesktopId = useId();
	const controlPanelMobileId = useId();
	const shellId = useId();

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
				<Component {...pageProps} />
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
				<DBShellSubNavigation id={shellId}>
					<Navigation
						variant={settings.subNavigationVariant}
						aria-label="sub navigation"
					/>
				</DBShellSubNavigation>
			}
			controlPanelMobile={
				<DBControlPanelMobile
					id={controlPanelMobileId}
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
					id={controlPanelDesktopId}
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
				<Component {...pageProps} />
			</div>
		</DBShell>
	);
};

export default App;
