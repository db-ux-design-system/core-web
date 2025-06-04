import { DBIcon, DBInfotext } from '@components';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/icon.json';
import { type DBIconProps } from '@components/src/components/icon/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
