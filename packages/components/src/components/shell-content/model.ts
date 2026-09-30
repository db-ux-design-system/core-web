import type {
	EndSlotProps,
	GlobalProps,
	GlobalState,
	StartSlotProps
} from '../../shared/model';

export const ShellContentVariantList = ['auto', 'fixed'] as const;
export type ShellContentVariantType = (typeof ShellContentVariantList)[number];

export type DBShellContentDefaultProps = {
	/**
	 * Adds `class` to `<main>` element
	 */
	mainClass?: string;

	/**
	 * Overrides the default `id` on the `<main>` element.
	 * This id is used as the target for the shell skip-navigation link.
	 * Only one `DBShellContent` should exist per page to avoid duplicate IDs.
	 * @default 'main-content'
	 */
	mainId?: string;

	/**
	 * Adds `aria-label` to `<main>` element
	 */
	mainLabel?: string;

	/**
	 * Change the scrolling behavior. `auto` scrolling on complete wrapper, `fixed` scrolling only in for main.
	 * @default auto
	 */
	variant?: ShellContentVariantType;
};

export type DBShellContentProps = DBShellContentDefaultProps &
	GlobalProps &
	StartSlotProps &
	EndSlotProps;

export type DBShellContentDefaultState = {};

export type DBShellContentState = DBShellContentDefaultState & GlobalState;
