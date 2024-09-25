import {
	DBStack,
	DBInfotext,
	DBDivider
} from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/stack.json';
import type { DBStackProps } from '../../../../../output/react/src/components/stack/model';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import type { BaseComponentProps } from '../base-component-data';

const getStack = ({
	children,
	gap,
	alignment,
	wrap,
	variant,
	direction,
	justifyContent
}: DBStackProps) => (
	<DBStack>
		<DBInfotext size="small" icon="none" semantic="informational">
			{children}
		</DBInfotext>
		<DBStack
			className={
				(justifyContent ?? alignment)
					? 'stack-container stack-show-alignment'
					: 'stack-container'
			}
			gap={gap}
			alignment={alignment}
			wrap={wrap}
			variant={variant}
			direction={direction}
			justifyContent={justifyContent}>
			<a href="#" className="dummy-component">
				Content 1
			</a>
			{variant === 'divider' && <DBDivider />}
			<a href="#" className="dummy-component">
				Content 2
			</a>
			{variant === 'divider' && <DBDivider />}
			<a href="#" className="dummy-component">
				Content 3
			</a>
		</DBStack>
	</DBStack>
);

const StackComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBStack"
			variants={getVariants(
				defaultComponentVariants,
				getStack,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default StackComponent;
