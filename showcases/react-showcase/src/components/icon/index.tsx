import { DBIcon, DBInfotext } from '../../../../../output/react/src';
import { type DBIconProps } from '../../../../../output/react/src/components/icon/model';
import defaultComponentVariants from '../../../../shared/icon.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getIcon = ({ children }: DBIconProps) => (
	<>
		<DBInfotext icon="none" size="small" semantic="informational">
			{children}
		</DBInfotext>
		<DBIcon icon="x_placeholder">{children}</DBIcon>
	</>
);

const IconComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBIcon'}
			variants={getVariants(
				defaultComponentVariants,
				getIcon,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default IconComponent;
