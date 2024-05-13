import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/section.json';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../data';

const getSection = ({ width, spacing, children }: DBSectionProps) => (
	<DBSection
		className="db-informational-bg-lvl-2"
		spacing={spacing}
		width={width}>
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
