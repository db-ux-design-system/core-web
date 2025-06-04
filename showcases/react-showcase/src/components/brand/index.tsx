import { DBControlPanelBrand } from '@components';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/brand.json';
import { type DBControlPanelBrandProps } from '@components/src/components/control-panel-brand/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
