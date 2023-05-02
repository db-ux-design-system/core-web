import type { ReactElement } from 'react';
import type { DefaultComponentVariants } from '../../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExample: (props: any) => ReactElement
): DefaultComponentVariants[] =>
	defaultComponentVariants.map((variant, variantIndex) => ({
		...variant,
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props.id ?? example.name,
				children: example.props.children ?? example.name
			})
		}))
	}));
