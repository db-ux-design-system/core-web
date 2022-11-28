---
to: src/components/<%= name %>/model.ts
---
export interface DB<%= h.changeCase.pascal(name) %>DefaultProps {
	className?:string;
}

export interface DB<%= h.changeCase.pascal(name) %>WcProps {
  	stylePath?: string;
}

export type DB<%= h.changeCase.pascal(name) %>Props = DB<%= h.changeCase.pascal(name) %>DefaultProps & DB<%= h.changeCase.pascal(name) %>WcProps;

export interface DB<%= h.changeCase.pascal(name) %>State {
  	stylePath?: string;
}
