import { DBControlPanelBrand } from '@components';
import { type DBControlPanelBrandProps } from '@components/src/components/control-panel-brand/model';
import defaultComponentVariants from '../../../../shared/brand.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getBrand = ({
	children,
	customLogo
}: DBControlPanelBrandProps & { customLogo: boolean }) => (
	<DBControlPanelBrand>
		{customLogo && (
			<img
				src={`${
					process?.env?.NEXT_PUBLIC_BASE_PATH ?? '/react-showcase'
				}/assets/images/placeholder.jpg`}
				alt="this is a fancy placeholder logo"
			/>
		)}
		{children}
	</DBControlPanelBrand>
);

const BrandComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBControlPanelBrand"
			variants={getVariants(
				defaultComponentVariants,
				getBrand,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default BrandComponent;
