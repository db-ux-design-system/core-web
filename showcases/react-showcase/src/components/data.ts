import type { ReactDefaultComponentVariants } from '../../../shared/react-default-component-data';

export const getVariants = (
	defaultComponentVariants: ReactDefaultComponentVariants[],
	getExample: (properties: any) => any,
	codeSlots?: Record<string, any>
): ReactDefaultComponentVariants[] =>
	defaultComponentVariants.map((variant, variantIndex) => ({
		...variant,
		SlotCode:
			codeSlots?.[
				variant.codeFileName ?? variant.name.replaceAll(' ', '')
			],
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			// Ensure className from props is available on the example object
			className: example.className ?? example.props?.className,
			example: getExample({
				...example.props,
				id: example.props?.id ?? example.name,
				children: example.props?.children ?? example.name
			})
		}))
	}));
