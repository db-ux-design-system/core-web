---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";
import classNames from "classnames";

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
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
  });

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });
  // jscpd:ignore-end

  return (
    <div ref={component} class={state.getClassNames('db-<%= name %>', props.className)}>
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
      {props.children}
    </div>
  );
}
