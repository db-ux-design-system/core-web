import { DBBrand } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/brand.json';
import { type DBBrandProps } from '../../../../../output/react/src/components/brand/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getBrand = ({
	children,
	hideLogo,
	customLogo
}: DBBrandProps & { customLogo: boolean }) => (
	<DBBrand hideLogo={hideLogo}>
		{customLogo && (
			<img
				src={`${
					process?.env?.NEXT_PUBLIC_BASE_PATH ?? '/react-showcase'
				}/assets/images/placeholder.jpg`}
				alt="logo"
			/>
		)}
		{children}
	</DBBrand>
);

const BrandComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBBrand"
			variants={getVariants(
				defaultComponentVariants,
				getBrand,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default BrandComponent;
