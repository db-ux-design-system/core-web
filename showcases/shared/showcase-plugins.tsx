import ButtonShowcase from '@components/components/button/showcase/button.showcase';
import { type ReactElement } from 'react';

export type ShowcaseId = 'button'; // Add later 'button' | 'link' | 'input' | ...

export type ShowcaseHost = 'patternhub' | 'react-showcase' | 'storybook';

export type ShowcasePluginContext = {
	host: ShowcaseHost;
};

/**
 * Basic interface for a showcase plugin.
 */
export type ShowcasePlugin = {
	id: ShowcaseId;
	label: string;
	getShowcaseComponent: (
		context: ShowcasePluginContext
	) => ReactElement | undefined;
};

/**
 * Showcase plugin for the Button component.
 */
export const buttonShowcasePlugin: ShowcasePlugin = {
	id: 'button',
	label: 'Button',
	getShowcaseComponent({ host }) {
		if (host === 'patternhub') {
			return <ButtonShowcase isPatternhub />;
		}

		return <ButtonShowcase />;
	}
};

/**
 * Central registry of all showcase plugins.
 */
export const showcasePlugins: ShowcasePlugin[] = [buttonShowcasePlugin]; // Add more plugins here later

/**
 * Get a showcase plugin by its ID.
 * @param id - The ID of the showcase plugin.
 * @returns The showcase plugin if found, otherwise undefined.
 */
export const getShowcasePlugin = (id: ShowcaseId): ShowcasePlugin | undefined =>
	showcasePlugins.find((plugin) => plugin.id === id);
