import type { DefaultComponentVariants } from '../../../shared/default-component-data.ts';

export const getVariantsWithExamples = <T>(
	defaultComponentVariants: any,
	exampleFn: (props: T) => string,
) => {
	return (defaultComponentVariants as DefaultComponentVariants[]).map((variant) => ({
		...variant,
		examples: variant.examples.map((ex) => ({
			...ex,
			example: exampleFn,
		})),
	}));
};

export const getPropsAsAttributes = (props: Record<string, any>) => {
	return Object.entries(props)
		.filter(([key, value]) => !(key === 'disabled' && value === false))
		.map(([key, value]) => (value === undefined ? '' : `${key}="${value}"`))
		.join(' ');
};
