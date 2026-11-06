export type FlattenOptions = {
	/** Remove @property rules after resolving (default: true) */
	removeAtProperty?: boolean;
	/** Remove declarations whose variables came from @property and are no longer referenced (default: true) */
	removeResolved?: boolean;
	/**
	 Variable prefixes that are always treated as dynamic (never resolved).
	 Default: ['--db-adaptive-']
	 */
	dynamicPrefixes?: string[];
};

export type VarEntry = {
	value: string;
	layer: string | undefined;
	file: string;
};

export const DEFAULT_DYNAMIC_PREFIXES = [
	'--db-adaptive-',
	// Customizable layout breakpoints (DBShell / DBControlPanel / DBHeader /
	// DBNavigation / ...). The consumer-facing `--db-tablet-breakpoint` and
	// `--db-desktop-breakpoint`, and their registered `-min` / `-max` helpers,
	// must all stay live: the breakpoint values so consumers can override a
	// switch point at runtime, the helpers so their `@property` registrations
	// survive and the container style queries can compute
	// `min(var(--db-*-breakpoint), 100vi)` / `max(...)`. Flattening any of them
	// to its build-time default breaks the breakpoint switch entirely. One
	// prefix covers both the value and its `-min` / `-max` helpers.
	'--db-tablet-breakpoint',
	'--db-desktop-breakpoint'
];
