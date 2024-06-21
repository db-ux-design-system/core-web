import { DBDivider, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/divider.json';
import { type DBDividerProps } from '../../../../../output/react/src/components/divider/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getDivider = ({ variant, emphasis, children }: DBDividerProps) => (
	<>
		<DBInfotext size="small" semantic="informational">
			{children}
		</DBInfotext>
		<DBDivider variant={variant} emphasis={emphasis} />
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
