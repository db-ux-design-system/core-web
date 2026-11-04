export type FlattenOptions = {
	/** Remove @property rules after resolving (default: true) */
	removeAtProperty?: boolean;
	/** Remove declarations whose variables came from @property and are no longer referenced (default: true) */
	removeResolved?: boolean;
	/**
	 Variable prefixes that are always treated as dynamic (never resolved).
	 Default: ['--db-adaptive-']

	 When flattening a stylesheet that combines legacy CSS with the adaptive
	 coloring output of `@db-ux/core-theme-tools`, pass every runtime-dynamic
	 prefix so the adaptive tokens stay as `var()` while legacy tokens flatten:
	 `['--db-adaptive-', '--db-emphasis-transparency', '--db-pride-']`.
	 Any prefix omitted from this list is still left unresolved rather than
	 flattened to a fixed value, because the plugin only inlines prefixes it is
	 told are static.
	 */
	dynamicPrefixes?: string[];
};

export type VarEntry = {
	value: string;
	layer: string | undefined;
	file: string;
};

export const DEFAULT_DYNAMIC_PREFIXES = ['--db-adaptive-'];
