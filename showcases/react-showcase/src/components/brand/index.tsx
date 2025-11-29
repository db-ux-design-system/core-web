/* eslint-disable @typescript-eslint/no-deprecated */

import { DBBrand } from '@components';
import { type DBBrandProps } from '@components/src/components/brand/model';
import defaultComponentVariants from '../../../../shared/brand.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getBrand = ({
	children,
	hideLogo,
	customLogo
}: DBBrandProps & { customLogo: boolean }) => (
	<DBBrand hideLogo={hideLogo}>
		{customLogo && (
			<img
				src={`${process?.env?.NEXT_PUBLIC_BASE_PATH ?? '/react-showcase'}/assets/images/placeholder.jpg`}
				alt="this is a fancy placeholder logo"
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
