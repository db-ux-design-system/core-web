import {
	usePathname as usePathnameNext,
	useRouter as useRouterNext,
	useSearchParams as useSearchParametersNext
} from 'next/navigation';
import { useSearchParams } from 'react-router-dom';

const useUniversalSearchParameters = (): [
	URLSearchParams,
	(parameters: Record<string, string>) => void
] => {
	const nextRouter = process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next')
		? useRouterNext()
		: undefined;
	const nextPathName = process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next')
		? usePathnameNext()
		: undefined;

	const [searchParameters, _setSearchParameters] =
		process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next')
			? [useSearchParametersNext()]
			: useSearchParams();

	const setSearchParameters = (parameters: Record<string, string>) => {
		if (
			globalThis.window !== undefined &&
			globalThis.location !== undefined
		) {
			const searchPart = globalThis.location.search || '';
			const currentParameters = new URLSearchParams(searchPart);
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
			nextRouter?.push(
				`${nextPathName}?${new URLSearchParams(parameters).toString()}`
			);
		}
	};

	return [searchParameters, setSearchParameters];
};

export default useUniversalSearchParameters;
