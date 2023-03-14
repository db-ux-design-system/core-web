---
to: src/components/<%= name %>/<%= name %>.lite.tsx
---
import { onMount, Show, useMetadata, useStore } from "@builder.io/mitosis";
import { DB<%= h.changeCase.pascal(name) %>State, DB<%= h.changeCase.pascal(name) %>Props } from "./model";

useMetadata({
  isAttachedToShadowDom: true,
  component: {
    includeIcon: false,
    properties: [],
  },
});

export default function DB<%= h.changeCase.pascal(name) %>(props: DB<%= h.changeCase.pascal(name) %>Props) {
  // This is used as forwardRef
  let component: any;
  const state = useStore<DB<%= h.changeCase.pascal(name) %>State>({});

  onMount(() => {
    if (props.stylePath) {
      state.stylePath = props.stylePath;
    }
  });

  return (
    <div ref={component} class={'db-<%= name %>' + (props.className ? ' ' + props.className : '')}>
      <Show when={state.stylePath}>
        <link rel="stylesheet" href={state.stylePath} />
      </Show>
    </div>
  );
}
