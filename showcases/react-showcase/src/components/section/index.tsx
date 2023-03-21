import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/section';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../../utils';

const getSection = ({ variant, size, children }: DBSectionProps) => (
	<DBSection className="db-bg-informational" size={size} variant={variant}>
		{children}
	</DBSection>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getSection({ children: exampleName, variant: 'full' }),
			code: '<DBSection>Section</DBSection>'
		},
		{
			example: getSection({ children: exampleName, variant: 'medium' }),
			code: '<DBSection variant="medium">Section</DBSection>'
		},
		{
			example: getSection({ children: exampleName, variant: 'large' }),
			code: '<DBSection variant="large">Section</DBSection>'
		}
	],
	[
		{
			example: getSection({ children: exampleName }),
			code: '<DBSection>Section</DBSection>'
		},
		{
			example: getSection({ children: exampleName, size: 'large' }),
			code: '<DBSection size="large">Section</DBSection>'
		},
		{
			example: getSection({ children: exampleName, size: 'small' }),
			code: '<DBSection size="small">Section</DBSection>'
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
