import { useEffect, useState } from 'react';
import {
	COLOR,
	COLOR_CONST,
	DENSITY,
	DENSITY_CONST
} from '../../../../packages/components/src/shared/constants';
import useUniversalSearchParameters from './use-universal-search-parameters';

const useQuery = (redirectURLSearchParameters = true): any => {
	const [searchParameters, setSearchParameters] =
		useUniversalSearchParameters();

	const [density, setDensity] = useState<string>(
		searchParameters.get(DENSITY_CONST) ?? DENSITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? COLOR.NEUTRAL_BG_LEVEL_1
	);
	const [page, setPage] = useState<string | undefined>(undefined);
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [searchRead, setSearchRead] = useState<boolean>(false);

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
			}
		}

		setSearchRead(true);
	}, [searchParameters]);

	useEffect(() => {
		if (searchRead) {
			const nextQuery: any = { density, color };
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
	}, [color, density, page, fullscreen, searchRead]);

	return [density, setDensity, color, setColor, page, fullscreen];
};

export default useQuery;
