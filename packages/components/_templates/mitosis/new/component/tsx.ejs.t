---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";
import { cls } from "../../utils";
<% if(formValue!=="no"){   -%>
import {ChangeEvent, InteractionEvent} from "../../shared/model";
<% } -%>

useMetadata({
  isAttachedToShadowDom: true
});

export default function DB<%= h.changeCase.pascal(name) %>(props: DB<%= h.changeCase.pascal(name) %>Props) {
  // This is used as forwardRef
  const ref = useRef<HTMLDivElement>(null);
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

			const target = event.target as HTMLInputElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:<%= formValue %>", target.<%= formValue %>);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.<%= formValue %>);
			// ANGULAR: this.writeValue(target.<%= formValue %>);
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
