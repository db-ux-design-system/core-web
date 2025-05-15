import { DBControlPanelMobile } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/control-panel-mobile.json';
import type { DBControlPanelMobileProps } from '../../../../../output/react/src/components/control-panel-mobile/model';
import { getVariants } from '../data';
import type { BaseComponentProps } from "../base-component-data";

const getControlPanelMobile = ({ children }: DBControlPanelMobileProps) => (
	<DBControlPanelMobile>
		{children}
	</DBControlPanelMobile>
);

const ControlPanelMobileComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBControlPanelMobile"
			variants={getVariants(
                     				defaultComponentVariants,
                     				getControlPanelMobile
                     			)}></DefaultComponent>
	);
};

export default ControlPanelMobileComponent;
