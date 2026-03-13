---
to: src/components/<%= name %>/showcase/<%= name %>.showcase.lite.tsx
---
import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import <%= h.changeCase.pascal(name) %>Density from '../examples/density.example.lite';

export default function <%= h.changeCase.pascal(name) %>Showcase(props: PatternhubProps) {
	return (
		<ContainerWrapperShowcase
			title="DB<%= h.changeCase.pascal(name) %>"
			isPatternhub={props.isPatternhub}>
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<<%= h.changeCase.pascal(name) %>Density />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
