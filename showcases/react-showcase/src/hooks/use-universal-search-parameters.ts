import {
	usePathname as usePathnameNext,
	useRouter as useRouterNext,
	useSearchParams as useSearchParametersNext
} from 'next/navigation';
// Pages Router hook. `next/navigation`'s `useSearchParams` does not reliably
// reflect the URL query string in the Pages Router under `output: 'export'`
// (it can lag behind or return empty after a `router.push`), so the SSR
// variant reads its params from `next/router` instead.
import { useRouter as useRouterNextPages } from 'next/router';
import { useSearchParams } from 'react-router-dom';

// The catch-all route (`pages/[[...slug]].tsx`) injects the matched path
// segments into `router.query` under the `slug` key. That is route state, not
// a search parameter, so it must be filtered out when reconstructing the query.
const NEXT_DYNAMIC_ROUTE_PARAM = 'slug';

const isNextSsrVariant = () => process.env.NEXT_SHOWCASE_VARIANT === 'next-ssr';

const isNextVariant = () =>
	process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next');

const useUniversalSearchParameters = (): [
	URLSearchParams,
	(parameters: Record<string, string>) => void
] => {
	// Pages Router (`next-ssr`): source the params from `next/router`, whose
	// `query` object stays in sync with the URL after client-side updates.
	const nextPagesRouter = isNextSsrVariant()
		? useRouterNextPages()
		: undefined;

	const nextRouter =
		isNextVariant() && !isNextSsrVariant() ? useRouterNext() : undefined;
	const nextPathName =
		isNextVariant() && !isNextSsrVariant() ? usePathnameNext() : undefined;

	const nextSearchParameters =
		isNextVariant() && !isNextSsrVariant()
			? useSearchParametersNext()
			: undefined;

	const [reactRouterSearchParameters, reactRouterSetSearchParameters] =
		isNextVariant() ? [undefined, undefined] : useSearchParams();

	let searchParameters: URLSearchParams;
	if (nextPagesRouter) {
		const parameters = new URLSearchParams();
		for (const [key, value] of Object.entries(nextPagesRouter.query)) {
			if (key === NEXT_DYNAMIC_ROUTE_PARAM || value === undefined) {
				continue;
			}

			parameters.set(key, Array.isArray(value) ? value.join(',') : value);
		}

		searchParameters = parameters;
	} else if (nextSearchParameters) {
		searchParameters = new URLSearchParams(nextSearchParameters.toString());
	} else {
		searchParameters = reactRouterSearchParameters ?? new URLSearchParams();
	}

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

		if (nextPagesRouter) {
			// `next/router` waits for `isReady` before the query is populated.
			// Writing before then would drop the params that are still being
			// parsed from the URL.
			if (!nextPagesRouter.isReady) {
				return;
			}

			// Keep the resolved route (e.g. `/02/button`) and only swap the
			// query string. `asPath` already excludes the configured
			// `basePath`, which is exactly what `router.replace` expects, so
			// there is no need to reconstruct the `[[...slug]]` template.
			const { asPath } = nextPagesRouter;
			const queryStringStart = asPath.indexOf('?');
			const basePath =
				queryStringStart === -1
					? asPath
					: asPath.slice(0, queryStringStart);

			void nextPagesRouter.replace(
				`${basePath}?${new URLSearchParams(parameters).toString()}`,
				undefined,
				{ shallow: true }
			);
		} else if (reactRouterSetSearchParameters) {
			reactRouterSetSearchParameters(parameters);
		} else if (nextPathName) {
			nextRouter?.push(
				`${nextPathName}?${new URLSearchParams(parameters).toString()}`
			);
		}
	};

	return [searchParameters, setSearchParameters];
};

export default useUniversalSearchParameters;
