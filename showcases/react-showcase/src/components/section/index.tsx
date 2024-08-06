import { DBSection } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/section.json';
import { type DBSectionProps } from '../../../../../output/react/src/components/section/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getSection = ({ width, spacing, children }: DBSectionProps) => (
	<DBSection
		className="db-informational-bg-basic-level-2"
		spacing={spacing}
		width={width}>
		{children}
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
