import type { ReactElement } from 'react';
import type { DefaultComponentExample } from '../../shared/default-component-data';
import type { ReactDefaultComponentVariants } from '../../shared/react-default-component-data';

export const getVariants = (
	defaultComponentVariants: ReactDefaultComponentVariants[],
	getExample: (properties: any) => ReactElement,
	codeSlots: any[]
): ReactDefaultComponentVariants[] => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		slotCode: codeSlots?.at(index) ?? 'No code available',
		examples: variant.examples.map((example: DefaultComponentExample) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props?.id ?? example.name,
				children: example.props?.children ?? example.name
			})
		}))
	}));
};
