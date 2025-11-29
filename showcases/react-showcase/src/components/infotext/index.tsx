import { DBInfotext } from '@components';
import { type DBInfotextProps } from '@components/src/components/infotext/model';
import defaultComponentVariants from '../../../../shared/infotext.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getInfotext = ({
	semantic,
	size,
	icon,
	children,
	showIcon
}: DBInfotextProps) => (
	<DBInfotext semantic={semantic} size={size} icon={icon} showIcon={showIcon}>
		{children}
	</DBInfotext>
);

const InfotextComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={getVariants(
				defaultComponentVariants,
				getInfotext,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default InfotextComponent;
