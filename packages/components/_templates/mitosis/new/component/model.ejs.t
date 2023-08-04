---
to: src/components/<%= name %>/model.ts
---
import {
<% if(formValue!=="no"){   -%>
	ChangeEventProps,
	ChangeEventState,
	FocusEventProps,
	ValidEventProps,
	FocusEventState,
	FormProps,
	FormState,
<% } -%>
GlobalProps,
GlobalState } from '../../shared/model';

export interface DB<%= h.changeCase.pascal(name) %>DefaultProps {
}

export type DB<%= h.changeCase.pascal(name) %>Props =
	DB<%= h.changeCase.pascal(name) %>DefaultProps  &
	GlobalProps
<% if(formValue!=="no"){   -%>
	&
	ChangeEventProps &
    FocusEventProps &
    ValidEventProps &
    FormProps
<% } -%>
	;

export interface DB<%= h.changeCase.pascal(name) %>DefaultState {}

export type DB<%= h.changeCase.pascal(name) %>State =
	DB<%= h.changeCase.pascal(name) %>DefaultState &
	GlobalState
<% if(formValue!=="no"){   -%>
	&
	ChangeEventState &
	FocusEventState &
	FormState
<% } -%>
	;
