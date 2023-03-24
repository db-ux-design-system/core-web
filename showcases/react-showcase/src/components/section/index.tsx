import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/section.json';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../data';

const getSection = ({ variant, size, children }: DBSectionProps) => (
	<DBSection className="db-bg-informational" size={size} variant={variant}>
		{children}
	</DBSection>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getSection({ children: exampleName, variant: 'full' })
		},
		{
			example: getSection({ children: exampleName, variant: 'medium' })
		},
		{
			example: getSection({ children: exampleName, variant: 'large' })
		}
	],
	[
		{
			example: getSection({ children: exampleName })
		},
		{
			example: getSection({ children: exampleName, size: 'large' })
		},
		{
			example: getSection({ children: exampleName, size: 'small' })
		}
	]
];

const SectionComponent = () => {
	return (
		<DefaultComponent
			title={'DBSection'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default SectionComponent;
