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
			example: getExample({
				...example.props,
				id: example.props?.id ?? example.name,
				// Prefer explicit JSON content when present (but only if not empty string), fallback to provided children, then name
				children:
					((example as any)?.content !== undefined && (example as any)?.content !== '')
						? (example as any)?.content
						: (example.props?.children ?? example.name)
			})
		}))
	}));
