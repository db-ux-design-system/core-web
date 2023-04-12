import type { ReactElement } from 'react';
import type { DefaultComponentVariants } from '../../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExample: (props: any) => ReactElement
): DefaultComponentVariants[] =>
	defaultComponentVariants.map((variant) => ({
		...variant,
		examples: variant.examples.map((example) => ({
			...example,
			example: getExample({
				...example.props,
				children: example.props.children ?? example.name
			})
		}))
	}));
