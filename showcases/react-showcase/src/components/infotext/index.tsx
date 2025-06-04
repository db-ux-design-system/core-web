import { DBInfotext } from '@components';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/infotext.json';
import { type DBInfotextProps } from '@components/src/components/infotext/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
