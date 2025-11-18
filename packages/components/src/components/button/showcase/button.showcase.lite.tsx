import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';

import ButtonDensity from '../examples/density.example.lite';
import ButtonDisabled from '../examples/disabled.example.lite';
import ButtonMultiLineText from '../examples/multi-line-text.example.lite';
import ButtonNoText from '../examples/no-text.example.lite';
import ButtonShowIconLeading from '../examples/show-icon-leading.example.lite';
import ButtonShowIconTrailing from '../examples/show-icon-trailing.example.lite';
import ButtonSize from '../examples/size.example.lite';
import ButtonVariant from '../examples/variant.example.lite';
import ButtonWidth from '../examples/width.example.lite';

import {
	buttonExamplesMeta,
	type ButtonExampleIdentifier
} from '../examples/button.examples.meta.lite';

const getExampleName = (id: ButtonExampleIdentifier): string =>
	(buttonExamplesMeta.find((example) => example.id === id)?.exampleName ??
		id) as string;

export default function ButtonShowcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DBButton"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName={getExampleName('density')}>
				<CardWrapperShowcase>
					<ButtonDensity />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName={getExampleName('disabled')}>
				<CardWrapperShowcase>
					<ButtonDisabled />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase
				exampleName={getExampleName('multi-line-text')}>
				<CardWrapperShowcase>
					<ButtonMultiLineText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName={getExampleName('no-text')}>
				<CardWrapperShowcase>
					<ButtonNoText />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase
				exampleName={getExampleName('show-icon-leading')}>
				<CardWrapperShowcase>
					<ButtonShowIconLeading />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase
				exampleName={getExampleName('show-icon-trailing')}>
				<CardWrapperShowcase>
					<ButtonShowIconTrailing />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName={getExampleName('size')}>
				<CardWrapperShowcase>
					<ButtonSize />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName={getExampleName('variant')}>
				<CardWrapperShowcase>
					<ButtonVariant />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
			<LinkWrapperShowcase exampleName={getExampleName('width')}>
				<CardWrapperShowcase>
					<ButtonWidth />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
