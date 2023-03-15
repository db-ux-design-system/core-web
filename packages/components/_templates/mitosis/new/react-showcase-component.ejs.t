---
to: ../../showcases/react-showcase/src/components/<%= name %>/index.tsx
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/<%= name %>';
import { DefaultComponentExample } from '../../../../shared/default-component-data';
import { DB<%= h.changeCase.pascal(name) %>DefaultProps } from '../../../../../output/react/src/components/<%= name %>/model';
import { getVariants } from '../../utils';

const get<%= h.changeCase.pascal(name) %> = ({ to, do }: DB<%= h.changeCase.pascal(name) %>Props) => (
	<DB<%= h.changeCase.pascal(name) %>>
		<%= h.changeCase.pascal(name) %>
	</DBSection>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => []

const <%= h.changeCase.pascal(name) %>Component = () => {
	return (
		<DefaultComponent
			title="DB<%= h.changeCase.pascal(name) %>"
			variants={getVariants(
                     				defaultComponentVariants,
                     				getExampleMatrix
                     			)}></DefaultComponent>
	);
};

export default <%= h.changeCase.pascal(name) %>Component;
