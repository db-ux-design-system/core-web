---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";
import { cls, uuid } from "../../utils";
import {DEFAULT_ID} from "../../shared/constants";
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
		_id: DEFAULT_ID,
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

  onMount(() => {
  	state._id = props.id || '<%= name %>-' + uuid();
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });
  // jscpd:ignore-end

  return (
    <div
    	ref={ref}
    	id={state._id}
    	class={cls('db-<%= name %>', props.className)}
<% if(formValue!=="no"){   -%>
		onChange={(event: ChangeEvent<HTMLInputElement>) => state.handleChange(event)}
		onBlur={(event: InteractionEvent<HTMLInputElement>) => state.handleBlur(event)}
		onFocus={(event: InteractionEvent<HTMLInputElement>) => state.handleFocus(event)}
<% } -%>
    	>
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
      {props.children}
    </div>
  );
}
