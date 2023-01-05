---
to: src/components/<%= name %>/model.ts
---
import { GlobalProps, GlobalState } from '../../shared/model';

export interface DB<%= h.changeCase.pascal(name) %>DefaultProps {
}

export type DB<%= h.changeCase.pascal(name) %>Props = DB<%= h.changeCase.pascal(name) %>DefaultProps  & GlobalProps;

export interface DB<%= h.changeCase.pascal(name) %>DefaultState {}

export type DB<%= h.changeCase.pascal(name) %>State = DB<%= h.changeCase.pascal(name) %>DefaultState & GlobalState;
