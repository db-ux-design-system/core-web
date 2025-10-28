import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ButtonDensityExpressive from '../examples/density/expressive.example.lite';
import ButtonDensityFunctional from '../examples/density/functional.example.lite';
import ButtonDensityRegular from '../examples/density/regular.example.lite';

export default function ButtonDensity() {
	return (
		<CardWrapperShowcase>
			<ButtonDensityFunctional />
			<ButtonDensityRegular />
			<ButtonDensityExpressive />
		</CardWrapperShowcase>
	);
}
