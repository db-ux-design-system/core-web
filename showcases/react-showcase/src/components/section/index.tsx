import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/section.json';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../data';

const getSection = ({ variant, size, children }: DBSectionProps) => (
	<DBSection className="db-bg-informational" size={size} variant={variant}>
		{children}
	</DBSection>
);

const SectionComponent = () => {
	return (
		<DefaultComponent
			title={'DBSection'}
			variants={getVariants(
				defaultComponentVariants,
				getSection
			)}></DefaultComponent>
	);
};

export default SectionComponent;
