import type {
	DefaultComponentExample,
	DefaultComponentVariants
} from '../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExampleMatrix: (exampleName: string) => DefaultComponentExample[][],
	codeSlots: any[]
): DefaultComponentVariants[] => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		slotCode: codeSlots?.at(index) ?? 'No code available',
		examples: variant.examples.map((example: any, exampleIndex: any) => ({
			...example,
			...getExampleMatrix(example.name ?? '')[index][exampleIndex]
		}))
	}));
};
