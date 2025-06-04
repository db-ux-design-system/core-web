import { DBDivider, DBInfotext } from '@components';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/divider.json';
import { type DBDividerProps } from '@components/src/components/divider/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
