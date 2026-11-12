import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { useEffect, useState } from 'react';
import {
	type ColoringMode,
	COLORING_MODES,
	defaultColoringMode,
	defaultSettings
} from '../../../settings';
import useUniversalSearchParameters from './use-universal-search-parameters';

const isColoringMode = (value: string): value is ColoringMode =>
	(COLORING_MODES as readonly string[]).includes(value);

const useQuery = (shouldRedirectURLSearchParameters = true) => {
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
	const [coloringMode, setColoringMode] =
		useState<ColoringMode>(defaultColoringMode);
	const [searchRead, setSearchRead] = useState(false);

	const [settings, setSettings] = useState(() => {
		if (searchParameters.has('settings')) {
			try {
				return JSON.parse(searchParameters.get('settings')!);
			} catch {
				return defaultSettings;
			}
		}
		return defaultSettings;
	});

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
			if (!value) {
				continue;
			}

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

			if (
				key === 'coloring' &&
				isColoringMode(value) &&
				coloringMode !== value
			) {
				setColoringMode(value);
			}

			if (key === 'fullscreen' && fullscreen !== (value === 'true')) {
				setFullscreen(value === 'true');
			}

			if (key === 'settings' && JSON.stringify(settings) !== value) {
				try {
					setSettings(JSON.parse(value));
				} catch {
					// Ignore malformed settings JSON in URL
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
				settings: JSON.stringify(settings),
				...(page && { page }),
				shell: shell ? 'true' : 'false',
				coloring: coloringMode,
				...(fullscreen && { fullscreen: 'true' })
			};

			if (shouldRedirectURLSearchParameters) {
				setSearchParameters(nextQuery);
			}
		}
	}, [
		color,
		density,
		page,
		fullscreen,
		searchRead,
		settings,
		shell,
		coloringMode
	]);

	return {
		density,
		setDensity,
		color,
		setColor,
		page,
		shell,
		setShell,
		coloringMode,
		setColoringMode,
		fullscreen,
		settings,
		setSettings
	};
};

export default useQuery;
