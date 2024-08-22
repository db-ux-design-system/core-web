import type { FunctionComponent, ReactElement } from 'react';
import type { ReactDefaultComponentVariants } from '../../../shared/react-default-component-data';

export const getVariants = (
	defaultComponentVariants: ReactDefaultComponentVariants[],
	getExample: (properties: any) => ReactElement,
	codeSlots?: Record<string, FunctionComponent>
): ReactDefaultComponentVariants[] =>
	defaultComponentVariants.map((variant, variantIndex) => ({
		...variant,
		SlotCode:
			codeSlots?.[
				variant.codeFileName ?? variant.name.replaceAll(' ', '')
			],
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props?.id ?? example.name,
				children: example.props?.children ?? example.name
			})
		}))
	}));
