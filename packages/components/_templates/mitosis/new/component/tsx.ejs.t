---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { Show, useMetadata, useStore, useRef, useDefaultProps } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";
import { cls } from "../../utils";
<% if(formValue!=="no"){   -%>
import {ChangeEvent, InteractionEvent} from "../../shared/model";
import { handleFrameworkEventAngular, handleFrameworkEventVue } from "../../utils/form-components";
<% } -%>

useMetadata({});

useDefaultProps< DB<%= h.changeCase.pascal(name) %>Props>({});

export default function DB<%= h.changeCase.pascal(name) %>(props: DB<%= h.changeCase.pascal(name) %>Props) {
  // This is used as forwardRef
  const _ref = useRef<HTMLDivElement | null>(null);
  // jscpd:ignore-start
  const state = useStore<DB<%= h.changeCase.pascal(name) %>State>({
      <% if(formValue!=="no"){   -%>
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			useTarget({
				angular: () => handleFrameworkEventAngular(this, event, <%= formValue %>),
				vue: () => handleFrameworkEventVue(this, event, <%= formValue %>)
			});
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
      <% } -%>
  });
  // jscpd:ignore-end

  return (
    <div
    	ref={ref}
    	id={props.id}
    	class={cls('db-<%= name %>', props.className)}
<% if(formValue!=="no"){   -%>
		onChange={(event: ChangeEvent<HTMLInputElement>) => state.handleChange(event)}
		onBlur={(event: InteractionEvent<HTMLInputElement>) => state.handleBlur(event)}
		onFocus={(event: InteractionEvent<HTMLInputElement>) => state.handleFocus(event)}
<% } -%>
    	>
      {props.children}
    </div>
  );
}
