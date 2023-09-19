---
to: "<%= showcases ? `../../showcases/react-showcase/src/components/${name}/index.tsx` : null %>"
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/<%= name %>.json';
import type { DB<%= h.changeCase.pascal(name) %>Props } from '../../../../../output/react/src/components/<%= name %>/model';
import { getVariants } from '../data';

const get<%= h.changeCase.pascal(name) %> = ({ children }: DB<%= h.changeCase.pascal(name) %>Props) => (
	<DB<%= h.changeCase.pascal(name) %>>
		{children}
	</DB<%= h.changeCase.pascal(name) %>>
);

const <%= h.changeCase.pascal(name) %>Component = () => {
	return (
		<DefaultComponent
			title="DB<%= h.changeCase.pascal(name) %>"
			variants={getVariants(
                     				defaultComponentVariants,
                     				get<%= h.changeCase.pascal(name) %>
                     			)}></DefaultComponent>
	);
};

export default <%= h.changeCase.pascal(name) %>Component;
