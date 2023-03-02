import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/section';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';

const getSection = ({ variant, size }: DBSectionProps) => (
	<DBSection
		className="db-bg-information-light"
		size={size}
		variant={variant}>
		Content
	</DBSection>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{ example: getSection({ variant: 'full' }) },
		{
			example: getSection({ variant: 'medium' })
		},
		{ example: getSection({ variant: 'large' }) }
	],
	[
		{ example: getSection({}) },
		{
			example: getSection({ size: 'large' })
		},
		{ example: getSection({ size: 'small' }) }
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
