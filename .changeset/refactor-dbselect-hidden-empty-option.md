---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

refactor(DBSelect): hide the empty option with the native `hidden` attribute

The empty option of a `placeholder` or floating label select was hidden through CSS that reacted to `option[data-show-empty-option="false"]` combined with `:has()` and `:open`. It now carries the native `hidden` attribute instead, so the state lives in the markup rather than in a conditional style rule.

Consumers who wrote the markup by hand and relied on `data-show-empty-option="false"` being hidden by our stylesheet need to set `hidden` on that option instead. The option is now also removed from the accessibility tree while hidden, which is what the updated aria snapshots reflect.
