type ReactDefaultComponentExample = {
	[key: string]: any;
	name: string;
	className?: string;
	props?: Record<string, any>;
};

type ReactDefaultComponentVariants = {
	[key: string]: any;
	name: string;
	codeFileName?: string;
	examples: ReactDefaultComponentExample[];
};

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
