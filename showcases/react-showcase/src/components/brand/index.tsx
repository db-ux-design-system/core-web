import { DBBrand } from '../../../../../output/react/src';
import { type DBBrandProps } from '../../../../../output/react/src/components/brand/model';
import defaultComponentVariants from '../../../../shared/brand.json';
import { getVariants } from '../data';
import DefaultComponent from '../index';

const getBrand = ({
	imgAlt,
	imgHeight,
	imgSrc,
	imgWidth,
	anchorChildren,
	anchorRef,
	anchorTitle,
	anchorRelation,
	hideDefaultAsset,
	children,
	className,
	describedbyid,
	id,
	key,
	tabIndex,
	title
}: DBBrandProps) => (
	<DBBrand
		imgAlt={imgAlt}
		imgHeight={imgHeight}
		imgSrc="https://db-ui.github.io/images/db_logo.svg"
		imgWidth={imgWidth}
		anchorChildren={anchorChildren}
		anchorRef={anchorRef}
		anchorTitle={anchorTitle}
		anchorRelation={anchorRelation}
		hideDefaultAsset={hideDefaultAsset}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		tabIndex={tabIndex}
		title={title}>
		{children}
	</DBBrand>
);

const BrandComponent = () => {
	return (
		<DefaultComponent
			title="DBBrand"
			variants={getVariants(
				defaultComponentVariants,
				getBrand
			)}></DefaultComponent>
	);
};

export default BrandComponent;
