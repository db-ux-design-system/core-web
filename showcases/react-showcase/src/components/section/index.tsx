import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/section';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';

const getSection = ({ variant, size }: DBSectionProps) => (
	<DBSection
		className="db-bg-informational-light"
		size={size}
		variant={variant}>
		Content
	</DBSection>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{
			example: getSection({ variant: 'full' }),
			code: '<DBSection>Content</DBSection>'
		},
		{
			example: getSection({ variant: 'medium' }),
			code: '<DBSection variant="medium">Content</DBSection>'
		},
		{
			example: getSection({ variant: 'large' }),
			code: '<DBSection variant="large">Content</DBSection>'
		}
	],
	[
		{ example: getSection({}), code: '<DBSection>Content</DBSection>' },
		{
			example: getSection({ size: 'large' }),
			code: '<DBSection size="large">Content</DBSection>'
		},
		{
			example: getSection({ size: 'small' }),
			code: '<DBSection size="small">Content</DBSection>'
		}
	]
];
const variants = defaultComponentVariants.map((variant, index) => ({
	...variant,
	examples: variant.examples.map((example, exampleIndex) => ({
		...example,
		...exampleMatrix[index][exampleIndex]
	}))
}));

const SectionComponent = () => {
	return (
		<DefaultComponent
			title={'DBSection'}
			variants={variants}></DefaultComponent>
	);
};

export default SectionComponent;
