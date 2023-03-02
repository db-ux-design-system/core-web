---
to: ../../showcases/react-showcase/src/components/<%= name %>/index.tsx
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/<%= name %>';
import { DefaultComponentExample } from '../../../../shared/default-component-data';
import { DB<%= h.changeCase.pascal(name) %>DefaultProps } from '../../../../../output/react/src/components/section/model';

const get<%= h.changeCase.pascal(name) %> = ({ to, do }: DB<%= h.changeCase.pascal(name) %>Props) => (
	<DB<%= h.changeCase.pascal(name) %>>
		<%= h.changeCase.pascal(name) %>
	</DBSection>
);

const exampleMatrix: DefaultComponentExample[][] = []

const variants = defaultComponentVariants.map((variant, index) => ({
	...variant,
	examples: variant.examples.map((example, exampleIndex) => ({
		...example,
		...exampleMatrix[index][exampleIndex]
	}))
}));

const <%= h.changeCase.pascal(name) %>Component = () => {
	return (
		<DefaultComponent
			title="DB<%= h.changeCase.pascal(name) %>"
			variants={variants}></DefaultComponent>
	);
};

export default <%= h.changeCase.pascal(name) %>Component;
