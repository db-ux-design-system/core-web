import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { useEffect, useState } from 'react';
import { defaultSettings } from '../../../shared/default-component-data';
import useUniversalSearchParameters from './use-universal-search-parameters';

const useQuery = (redirectURLSearchParameters = true) => {
	const [searchParameters, setSearchParameters] =
		useUniversalSearchParameters();

	const [density, setDensity] = useState<string>(
		searchParameters.get(DENSITY_CONST) ?? DENSITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? SEMANTIC.NEUTRAL
	);
	const [page, setPage] = useState<string | undefined>(undefined);
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [searchRead, setSearchRead] = useState<boolean>(false);

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

				if (key === 'fullscreen' && fullscreen !== Boolean(value)) {
					setFullscreen(Boolean(value));
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
			const nextQuery: any = {
				density,
				color,
				settings: JSON.stringify(settings)
			};
			if (page) {
				nextQuery.page = page;
			}

			if (fullscreen) {
				nextQuery.fullscreen = true;
			}

			if (redirectURLSearchParameters) {
				setSearchParameters(nextQuery);
			}
		}
	}, [color, density, page, fullscreen, searchRead, settings]);

	return {
		density,
		setDensity,
		color,
		setColor,
		page,
		fullscreen,
		settings,
		setSettings
	};
};

export default useQuery;
