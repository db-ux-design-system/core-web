import type {
	DefaultComponentExample,
	DefaultComponentVariants
} from '../../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExampleMatrix: (exampleName: string) => DefaultComponentExample[][]
): DefaultComponentVariants[] => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			...getExampleMatrix(example.name ?? '')[index][exampleIndex]
		}))
	}));
};
