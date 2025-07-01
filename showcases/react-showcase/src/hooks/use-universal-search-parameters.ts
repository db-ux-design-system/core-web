import { useSearchParams } from 'react-router-dom';
import { useSearchParams as useSearchParametersNext, useRouter as useRouterNext, usePathname as usePathnameNext } from 'next/navigation';

const useUniversalSearchParameters = (): [URLSearchParams, (parameters: Record<string, string>) => void] => {
	const nextRouter = process.env.NEXT_SHOWCASE_VARIANT === 'next' ? useRouterNext() : undefined;
	const nextPathName = process.env.NEXT_SHOWCASE_VARIANT === 'next' ? usePathnameNext() : undefined;

	const [searchParameters, _setSearchParameters] = process.env.NEXT_SHOWCASE_VARIANT === 'next' ? [useSearchParametersNext()] : useSearchParams();

	const setSearchParameters = (parameters: Record<string, string>) => {
		if (typeof globalThis !== 'undefined') {
			const currentParameters = new URLSearchParams(globalThis.location.href.split('?')[1]);
			currentParameters.sort();
			const newParameters = new URLSearchParams(parameters);
			newParameters.sort();

			if (currentParameters.toString() === newParameters.toString()) {
				return;
			}
		}

		if (_setSearchParameters) {
			_setSearchParameters(parameters);
		} else if (nextPathName) {
			nextRouter?.push(`${nextPathName}?${new URLSearchParams(parameters).toString()}`);
		}
	};

	return [searchParameters, setSearchParameters];
};

export default useUniversalSearchParameters;
