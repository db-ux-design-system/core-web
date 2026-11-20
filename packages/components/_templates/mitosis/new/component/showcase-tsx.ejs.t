---
to: "<%= subComponent ? null : `src/components/${name}/showcase/${name}.showcase.lite.tsx` %>"
---
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import <%= h.changeCase.pascal(name) %>Density from '../examples/density.example.lite';

export default function <%= h.changeCase.pascal(name) %>Showcase() {
	return (
		<ContainerWrapperShowcase title="DB<%= h.changeCase.pascal(name) %>">
			<LinkWrapperShowcase exampleName="Density">
				<CardWrapperShowcase>
					<<%= h.changeCase.pascal(name) %>Density />
				</CardWrapperShowcase>
			</LinkWrapperShowcase>
		</ContainerWrapperShowcase>
	);
}
