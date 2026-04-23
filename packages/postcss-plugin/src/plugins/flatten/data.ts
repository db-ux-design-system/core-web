export type FlattenOptions = {
	/** Remove @property rules after resolving (default: true) */
	removeAtProperty?: boolean;
	/** Remove declarations whose variables came from @property and are no longer referenced (default: true) */
	removeResolved?: boolean;
	/**
	 * Variable prefixes that are always treated as dynamic (never resolved).
	 * Default: ['--db-adaptive-']
	 */
	dynamicPrefixes?: string[];
};

export type VarEntry = {
	value: string;
	layer: string | null;
	file: string;
};

export const DEFAULT_DYNAMIC_PREFIXES = ['--db-adaptive-'];
