---
to: "<%= showcases ? `../../showcases/react-showcase/src/components/${name}/meta-navigation.tsx` : null %>"
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/<%= name %>.json';
import type { DB<%= h.changeCase.pascal(name) %>Props } from '../../../../../output/react/src/components/<%= name %>/model';
import { getVariants } from '../data';
import type { BaseComponentProps } from "../base-component-data";

const get<%= h.changeCase.pascal(name) %> = ({ children }: DB<%= h.changeCase.pascal(name) %>Props) => (
	<DB<%= h.changeCase.pascal(name) %>>
		{children}
	</DB<%= h.changeCase.pascal(name) %>>
);

const <%= h.changeCase.pascal(name) %>Component = (props: BaseComponentProps) => {
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
