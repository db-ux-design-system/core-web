---
to: ../../showcases/react-showcase/src/components/<%= name %>/index.tsx
---
import { DB<%= h.changeCase.pascal(name) %> } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { type DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [];

const <%= h.changeCase.pascal(name) %>Component = () => {
	return (
		<DefaultComponent
			title={'DB<%= h.changeCase.pascal(name) %>'}
			variants={variants}></DefaultComponent>
	);
};

export default <%= h.changeCase.pascal(name) %>Component;
