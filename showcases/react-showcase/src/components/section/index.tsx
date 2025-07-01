import { DBSection, DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/section.json';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getSection = ({ width, spacing, children }: DBSectionProps) => (
	<DBSection
		className="db-color-informational db-bg-color-basic-level-2  section-card-container"
		spacing={spacing}
		width={width}>
		<DBCard>{children}</DBCard>
		<DBCard>{children}</DBCard>
		<DBCard>{children}</DBCard>
		<DBCard>{children}</DBCard>
	</DBSection>
);

const SectionComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBSection'}
			variants={getVariants(
				defaultComponentVariants,
				getSection,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default SectionComponent;
