---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";
import { cls, uuid } from "../../utils";
import {DEFAULT_ID} from "../../shared/constants";

useMetadata({
  isAttachedToShadowDom: true,
  component: {
	// MS Power Apps
    includeIcon: false,
    properties: [],
  },
});

export default function DB<%= h.changeCase.pascal(name) %>(props: DB<%= h.changeCase.pascal(name) %>Props) {
  // This is used as forwardRef
  let component: any;
  // jscpd:ignore-start
  const state = useStore<DB<%= h.changeCase.pascal(name) %>State>({
      <% if(formValue!=="no"){   -%>
		_id: DEFAULT_ID,
    	_isValid: undefined,
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:<%= formValue %>", event.target.<%= formValue %>);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(event.target.<%= formValue %>);
			// ANGULAR: this.writeValue(event.target.<%= formValue %>);
		},
		handleBlur: (event: any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: any) => {
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
    	ref={component}
    	id={state._id}
    	class={cls('db-<%= name %>', props.className)}
<% if(formValue!=="no"){   -%>
		onChange={(event) => state.handleChange(event)}
		onBlur={(event) => state.handleBlur(event)}
		onFocus={(event) => state.handleFocus(event)}
<% } -%>
    	>
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
      {props.children}
    </div>
  );
}
