import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { useEffect, useState } from 'react';
import { defaultSettings } from '../../../settings';
import useUniversalSearchParameters from './use-universal-search-parameters';

const useQuery = (redirectURLSearchParameters = true) => {
	const [searchParameters, setSearchParameters] =
		useUniversalSearchParameters();

	const [density, setDensity] = useState(
		searchParameters.get(DENSITY_CONST) ?? DENSITY.REGULAR
	);
	const [color, setColor] = useState(
		searchParameters.get(COLOR_CONST) ?? SEMANTIC.NEUTRAL
	);
	const [page, setPage] = useState<string | undefined>(undefined);
	const [fullscreen, setFullscreen] = useState(false);
	// TODO: Remove shell state and `showcases/react-showcase/src/page` folder after v6.0.0
	const [shell, setShell] = useState<boolean>(true);
	const [searchRead, setSearchRead] = useState(false);

	const [settings, setSettings] = useState(
		searchParameters.has('settings')
			? JSON.parse(searchParameters.get('settings')!)
			: defaultSettings
	);

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
			if (value) {
				if (key === DENSITY_CONST && density !== value) {
					setDensity(value);
				}

				if (key === COLOR_CONST && color !== value) {
					setColor(value);
				}

				if (key === 'page' && page !== value.toLowerCase()) {
					setPage(value.toLowerCase());
				}

				if (key === 'shell' && shell !== (value === 'true')) {
					setShell(value === 'true');
				}

				if (key === 'fullscreen' && fullscreen !== (value === 'true')) {
					setFullscreen(value === 'true');
				}

				if (key === 'settings' && JSON.stringify(settings) !== value) {
					setSettings(JSON.parse(value));
				}
			}
		}

		setSearchRead(true);
	}, [searchParameters]);

	useEffect(() => {
		if (searchRead) {
			const nextQuery: Record<string, string> = {
				density,
				color,
				settings: JSON.stringify(settings)
			};
			if (page) {
				nextQuery.page = page;
			}

			if (shell) {
				nextQuery.shell = 'true';
			} else {
				nextQuery.shell = 'false';
			}

			if (fullscreen) {
				nextQuery.fullscreen = 'true';
			}

			if (redirectURLSearchParameters) {
				setSearchParameters(nextQuery);
			}
		}
	}, [color, density, page, fullscreen, searchRead, settings, shell]);

	return {
		density,
		setDensity,
		color,
		setColor,
		page,
		shell,
		setShell,
		fullscreen,
		settings,
		setSettings
	};
};

export default useQuery;
