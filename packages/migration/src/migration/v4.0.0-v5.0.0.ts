import type { ReplaceInFileConfig } from 'replace-in-file';

/*
 * The tabs-specific event renames are auto-replaced here:
 *   - `onTabSelect` -> `onIndexChange` (React callback prop)
 *   - `tabSelect`   -> `indexChange`   (Angular/Vue/Web Component event name)
 *
 * The `alignment` / `width` DBTabs prop renames are intentionally NOT
 * auto-replaced: in JS/JSX usage they are passed as `tabItemAlignment` /
 * `tabItemWidth`, while the bare `data-alignment` / `data-width` attributes
 * only appear in raw HTML output. A global replace of those generic
 * `data-*` attributes would corrupt unrelated usages in consumer code, so
 * those renames must be done manually as described in the migration guide.
 */
export const v400_v500: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /onTabSelect/g,
		to: 'onIndexChange'
	},
	{
		files: '',
		from: /(?<!on)tabSelect/g,
		to: 'indexChange'
	}
];
