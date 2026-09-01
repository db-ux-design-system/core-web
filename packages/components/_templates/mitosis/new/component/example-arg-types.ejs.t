---
to: src/components/<%= name %>/examples/_<%= name %>.arg.types.ts
---
import type { InputType } from 'storybook/internal/csf';

export const Storybook<%= h.changeCase.pascal(name) %>ArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
};
