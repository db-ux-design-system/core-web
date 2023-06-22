import type { DefaultComponentVariants } from '../../shared/default-component-data';
import { ReactElement } from 'react';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExample: (props: any) => ReactElement,
	codeSlots: any[]
): DefaultComponentVariants[] => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		slotCode: codeSlots?.at(index) ?? 'No code available',
		examples: variant.examples.map((example: any) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props.id ?? example.name,
				children: example.props?.children
					? example.props.children
					: example.name
			})
		}))
	}));
};
