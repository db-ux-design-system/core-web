import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ButtonVariantBrand from '../examples/variant/brand.example.lite';
import ButtonVariantGhost from '../examples/variant/ghost.example.lite';
import ButtonVariantOutlined from '../examples/variant/outlined.example.lite';
import ButtonVariantFilled from '../examples/variant/filled.example.lite';

export default function ButtonVariant() {
	return (
		<CardWrapperShowcase>
			<ButtonVariantOutlined />
			<ButtonVariantFilled />
			<ButtonVariantGhost />
			<ButtonVariantBrand />
		</CardWrapperShowcase>
	);
}
