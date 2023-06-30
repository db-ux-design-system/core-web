import type { ReactElement } from 'react';
import type {
	DefaultComponentExample,
	DefaultComponentVariants
} from '../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExample: (props: any) => ReactElement,
	codeSlots: any[]
): DefaultComponentVariants[] => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		slotCode: codeSlots?.at(index) ?? 'No code available',
		examples: variant.examples.map((example: DefaultComponentExample) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props.id ?? example.name,
				children: example.props.children ?? example.name
			})
		}))
	}));
};
