import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	COLOR,
	COLOR_CONST,
	TONALITY,
	TONALITY_CONST
} from '../../../../packages/components/src/shared/constants';

const useQuery = (): any => {
	const [searchParameters, setSearchParameters] = useSearchParams();
	const [tonality, setTonality] = useState<string>(
		searchParameters.get(TONALITY_CONST) ?? TONALITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? COLOR.BASE
	);
	const [page, setPage] = useState<string | undefined>(undefined);
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [searchRead, setSearchRead] = useState<boolean>(false);

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
			if (value) {
				if (key === TONALITY_CONST && tonality !== value) {
					setTonality(value);
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
			const nextQuery: any = { tonality, color };
			if (page) {
				nextQuery.page = page;
			}

			if (fullscreen) {
				nextQuery.fullscreen = true;
			}

			setSearchParameters(nextQuery);
		}
	}, [color, tonality, page, fullscreen, searchRead]);

	return [tonality, setTonality, color, setColor, page, fullscreen];
};

export default useQuery;
