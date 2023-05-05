import { DBDivider, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/divider.json';
import { type DBDividerProps } from '../../../../../output/react/src/components/divider/model';
import { getVariants } from '../data';

const getDivider = ({ variant, children }: DBDividerProps) => (
	<>
		<DBInfotext size="small" variant="informational">
			{' '}
			{children}
		</DBInfotext>
		<DBDivider variant={variant} />
	</>
);

const DividerComponent = () => {
	return (
		<DefaultComponent
			title="DBDivider"
			variants={getVariants(
				defaultComponentVariants,
				getDivider
			)}></DefaultComponent>
	);
};

export default DividerComponent;
