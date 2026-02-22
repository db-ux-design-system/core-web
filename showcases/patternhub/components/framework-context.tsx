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

export const useFramework = () => {
	const context = useContext(FrameworkContext);
	if (!context) {
		throw new Error('useFramework must be used within a FrameworkProvider');
	}

	return context;
};

export const FrameworkProvider = ({ children }: { children: ReactNode }) => {
	const [framework, setFrameworkState] =
		useState<Framework>(DEFAULT_FRAMEWORK);

	// Initialize framework from localStorage or URL parameter
	useEffect(() => {
		if (globalThis.window !== undefined) {
			// Check URL parameter first
			const urlParameters = new URLSearchParams(
				globalThis.location.search
			);
			const frameworkParameter = urlParameters.get(
				'framework'
			) as Framework;

			if (
				frameworkParameter &&
				['angular', 'html', 'react', 'vue'].includes(frameworkParameter)
			) {
				setFrameworkState(frameworkParameter);
				localStorage.setItem(frameworkKey, frameworkParameter);
				return;
			}

			// Fallback to localStorage
			const savedFramework = localStorage.getItem(
				frameworkKey
			) as Framework;
			if (
				savedFramework &&
				['angular', 'html', 'react', 'vue'].includes(savedFramework)
			) {
				setFrameworkState(savedFramework);
			}
		}
	}, []);

	const setFramework = (newFramework: Framework) => {
		setFrameworkState(newFramework);

		if (globalThis.window !== undefined) {
			localStorage.setItem(frameworkKey, newFramework);

			// Update URL parameter to allow sharing
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
