import { DBCard, DBSection } from '../../../../../output/react/src';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import defaultComponentVariants from '../../../../shared/section.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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
