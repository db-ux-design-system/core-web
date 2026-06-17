import type { ReplaceInFileConfig } from 'replace-in-file';

/*
 * Only unambiguous, tabs-specific replacements are included here.
 * The bare `alignment` / `width` DBTabs prop renames are intentionally NOT
 * auto-replaced because those words are far too common across a codebase and
 * would cause many false positives. Consumers should rename those props
 * (`alignment` -> `tabItemAlignment`, `width` -> `tabItemWidth`) manually as
 * described in the migration guide.
 */
export const v400_v500: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /onTabSelect/g,
		to: 'onIndexChange'
	},
	{
		files: '',
		from: /data-alignment/g,
		to: 'data-tab-item-alignment'
	},
	{
		files: '',
		from: /data-width/g,
		to: 'data-tab-item-width'
	}
];
