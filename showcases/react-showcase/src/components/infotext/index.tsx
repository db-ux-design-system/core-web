import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/infotext.json';
import { type DBInfotextProps } from '../../../../../output/react/src/components/infotext/model';
import { getVariants } from '../data';

const getInfotext = ({ variant, size, icon, children }: DBInfotextProps) => (
	<DBInfotext variant={variant} size={size} icon={icon}>
		{children}
	</DBInfotext>
);

const InfotextComponent = () => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={getVariants(
				defaultComponentVariants,
				getInfotext
			)}></DefaultComponent>
	);
};

export default InfotextComponent;
