import { DBBrand } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/brand.json';
import { type DBBrandProps } from '../../../../../output/react/src/components/brand/model';
import { getVariants } from '../data';

const getButton = ({
	children,
	hideLogo,
	customLogo
}: DBBrandProps & { customLogo: boolean }) => (
	<DBBrand hideLogo={hideLogo}>
		{customLogo && (
			<img
				src={`${
					process?.env?.NEXT_PUBLIC_BASE_PATH ?? '/react-showcase'
				}/assets/images/db_logo.svg`}
			/>
		)}
		{children}
	</DBBrand>
);

const BrandComponent = () => {
	return (
		<DefaultComponent
			title="DBBrand"
			variants={getVariants(
				defaultComponentVariants,
				getButton
			)}></DefaultComponent>
	);
};

export default BrandComponent;
