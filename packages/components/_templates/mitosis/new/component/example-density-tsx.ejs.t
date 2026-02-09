---
to: src/components/<%= name %>/examples/density.example.lite.tsx
---
import { Fragment, useMetadata } from '@builder.io/mitosis';
import DB<%= h.changeCase.pascal(name) %> from '../<%= name %>.lite';
import { Storybook<%= h.changeCase.pascal(name) %>ArgTypes } from './_<%= name %>.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', 'Regular', 'Expressive'],
	storybookArgTypes: Storybook<%= h.changeCase.pascal(name) %>ArgTypes
});

export default function <%= h.changeCase.pascal(name) %>Density() {
	return (
		<Fragment>
			<DB<%= h.changeCase.pascal(name) %> data-density="functional">
				Functional
			</DB<%= h.changeCase.pascal(name) %>>
			<DB<%= h.changeCase.pascal(name) %> data-density="regular">
				(Default) Regular
			</DB<%= h.changeCase.pascal(name) %>>
			<DB<%= h.changeCase.pascal(name) %> data-density="expressive">
				Expressive
			</DB<%= h.changeCase.pascal(name) %>>
		</Fragment>
	);
}

