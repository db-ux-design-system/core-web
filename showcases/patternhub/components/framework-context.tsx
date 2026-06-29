import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode
} from 'react';
import { DEFAULT_FRAMEWORK, type Framework } from './framework-switcher/data';

type FrameworkContextType = {
	framework: Framework;
	setFramework: (framework: Framework) => void;
	getFrameworkIndex: () => number;
};

const FrameworkContext = createContext<FrameworkContextType | undefined>(
	undefined
);

const frameworkKey = 'db-ux-framework';

/**
 * Provides access to the currently selected framework and related helpers.
 */
export const useFramework = () => {
	const context = useContext(FrameworkContext);
	if (!context) {
		throw new Error('useFramework must be used within a FrameworkProvider');
	}

	return context;
};

/**
 * Stores the selected framework in URL/localStorage and keeps consumers in sync.
 */
export const FrameworkProvider = ({ children }: { children: ReactNode }) => {
	const [framework, setFrameworkState] =
		useState<Framework>(DEFAULT_FRAMEWORK);

	// URL has priority over localStorage so shared links open with the expected framework.
	useEffect(() => {
		if (globalThis.window !== undefined) {
			const urlParameters = new URLSearchParams(
				globalThis.location.search
			);
			const frameworkParameter = urlParameters.get('framework');

			if (
				frameworkParameter &&
				['angular', 'html', 'react', 'vue'].includes(frameworkParameter)
			) {
				const validFramework = frameworkParameter as Framework;
				setFrameworkState(validFramework);
				localStorage.setItem(frameworkKey, validFramework);
				// The card wrapper reads this event to refresh the "Show Code" target.
				globalThis.dispatchEvent(
					new CustomEvent('db-ux-framework-change', {
						detail: validFramework
					})
				);
				return;
			}

			// Fallback for direct visits without a framework query parameter.
			const savedFramework = localStorage.getItem(frameworkKey);
			if (
				savedFramework &&
				['angular', 'html', 'react', 'vue'].includes(savedFramework)
			) {
				setFrameworkState(savedFramework as Framework);
			}
		}
	}, []);

	const setFramework = (newFramework: Framework) => {
		setFrameworkState(newFramework);

		if (globalThis.window !== undefined) {
			localStorage.setItem(frameworkKey, newFramework);
			// Dispatch before replaceState so listeners can use the selected value immediately.
			globalThis.dispatchEvent(
				new CustomEvent('db-ux-framework-change', {
					detail: newFramework
				})
			);

			// Persist in the URL so links can be shared.
			const url = new URL(globalThis.location.href);
			url.searchParams.set('framework', newFramework);
			globalThis.history.replaceState({}, '', url.toString());
		}
	};

	const getFrameworkIndex = () => {
		const frameworks: Framework[] = ['angular', 'html', 'react', 'vue'];
		return frameworks.indexOf(framework);
	};

	return (
		<FrameworkContext.Provider
			value={{ framework, setFramework, getFrameworkIndex }}>
			{children}
		</FrameworkContext.Provider>
	);
};
