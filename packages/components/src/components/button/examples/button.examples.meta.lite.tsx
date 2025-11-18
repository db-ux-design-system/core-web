export type ButtonExampleIdentifier =
	| 'density'
	| 'disabled'
	| 'multi-line-text'
	| 'no-text'
	| 'show-icon-leading'
	| 'show-icon-trailing'
	| 'size'
	| 'variant'
	| 'width';

export type ButtonExampleGroup =
	| 'Content'
	| 'Density'
	| 'Icons'
	| 'Layout'
	| 'Size'
	| 'State'
	| 'Variants';

export type ButtonExampleMeta = {
	/** Technical identifier */
	id: ButtonExampleIdentifier;

	/** Readable name */
	exampleName: string;

	/** Group to which the example belongs */
	group?: ButtonExampleGroup;

	/** Names of the Storybook stories that are created from this example. */
	storybookNames?: string[];
};

/**
 * All button examples, defined centrally.
 */
export const buttonExamplesMeta: ButtonExampleMeta[] = [
	{
		id: 'density',
		exampleName: 'Density',
		group: 'Density',
		storybookNames: ['Density']
	},
	{
		id: 'disabled',
		exampleName: 'Disabled',
		group: 'State',
		storybookNames: ['Disabled']
	},
	{
		id: 'multi-line-text',
		exampleName: 'Multi-line Text With Line Breaks',
		group: 'Content',
		storybookNames: ['Multi-line Text']
	},
	{
		id: 'no-text',
		exampleName: 'No Text',
		group: 'Content',
		storybookNames: ['Icon Only']
	},
	{
		id: 'show-icon-leading',
		exampleName: 'Show Icon Leading',
		group: 'Icons',
		storybookNames: ['Show Icon Leading']
	},
	{
		id: 'show-icon-trailing',
		exampleName: 'Show Icon Trailing',
		group: 'Icons',
		storybookNames: ['Show Icon Trailing']
	},
	{
		id: 'size',
		exampleName: 'Size',
		group: 'Size',
		storybookNames: ['Size']
	},
	{
		id: 'variant',
		exampleName: 'Variant',
		group: 'Variants',
		storybookNames: ['Outlined', 'Filled', 'Ghost', 'Brand']
	},
	{
		id: 'width',
		exampleName: 'Width',
		group: 'Layout',
		storybookNames: ['Width']
	}
];

export default function ButtonExamplesMeta() {
	return null;
}
