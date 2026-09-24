import { readdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// --- DTCG token loading ---
//
// The token source lives in `generate-css/new/<Collection>/<Mode>.tokens.json`.
// Each file is one mode of a Figma variable collection, exported in the DTCG
// (Design Tokens Community Group) shape: a tree of groups whose leaves carry a
// `$value` (and `$type`). The mode name is stored on the file-level
// `$extensions["com.figma.modeName"]`.
//
// This loader is deliberately generic: it flattens each file into a flat map of
// `dashed-key-path -> numeric value`, so new roles added in Figma flow through
// without code changes. Group nesting is joined with `-`
// (e.g. `stacked.line-height-fixed` -> `stacked-line-height-fixed`).

const TOKENS_ROOT = join(
	dirname(fileURLToPath(import.meta.url)),
	'..',
	'new'
);

type DtcgLeaf = { $value: number | string; $type?: string };
type DtcgNode = { [key: string]: DtcgNode | DtcgLeaf } & {
	$value?: number | string;
	$extensions?: Record<string, unknown>;
};

const isLeaf = (node: unknown): node is DtcgLeaf =>
	typeof node === 'object' &&
	node !== null &&
	Object.prototype.hasOwnProperty.call(node, '$value');

/** A single mode of a collection: its Figma mode name and its flattened tokens. */
export type TokenMode = {
	mode: string;
	values: Map<string, number>;
	/** Insertion order of the flattened keys, so emitted CSS stays deterministic. */
	order: string[];
};

/**
 * Flatten a DTCG tree into `dashed-path -> value`. Only numeric leaves are
 * kept (every role in these collections is a length in px); non-numeric values
 * would need a different CSS mapping and are skipped intentionally.
 */
const flatten = (
	node: DtcgNode,
	prefix: string,
	out: Map<string, number>,
	order: string[]
): void => {
	for (const [key, child] of Object.entries(node)) {
		if (key.startsWith('$')) continue;
		const path = prefix ? `${prefix}-${key}` : key;
		if (isLeaf(child)) {
			if (typeof child.$value === 'number') {
				out.set(path, child.$value);
				order.push(path);
			}
			continue;
		}
		flatten(child as DtcgNode, path, out, order);
	}
};

/**
 * Load every `*.tokens.json` mode file inside a collection folder. The folder
 * name is passed verbatim (it contains an emoji prefix in the source, e.g.
 * `🌐 Layout`).
 */
export const loadCollection = (folderName: string): TokenMode[] => {
	const dir = join(TOKENS_ROOT, folderName);
	const files = readdirSync(dir).filter((f) => f.endsWith('.tokens.json'));

	return files.map((file) => {
		const raw = JSON.parse(readFileSync(join(dir, file), 'utf-8')) as DtcgNode;
		const mode =
			(raw.$extensions?.['com.figma.modeName'] as string | undefined) ??
			file.replace(/\.tokens\.json$/, '');
		const values = new Map<string, number>();
		const order: string[] = [];
		flatten(raw, '', values, order);
		return { mode, values, order };
	});
};
