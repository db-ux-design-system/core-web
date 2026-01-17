import { DBDivider, DBInfotext } from '@components';
import { type DBDividerProps } from '@components/src/components/divider/model';
import defaultComponentVariants from '../../../../shared/divider.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getDivider = ({ variant, emphasis, children, width }: DBDividerProps) => (
	<>
		<DBInfotext size="small" semantic="informational">
			{children}
		</DBInfotext>
		<DBDivider variant={variant} emphasis={emphasis} width={width} />
	</>
);

const DividerComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBDivider"
			variants={getVariants(
				defaultComponentVariants,
				getDivider,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default DividerComponent;
