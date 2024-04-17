---
force: true
to: src/components/<%= name %>/docs/Angular.md
---
## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DB<%= h.changeCase.pascal(name) %>Module } from '@db-ui/ngx-components';

@Component({
  // ...
  imports: [..., DB<%= h.changeCase.pascal(name) %>Module],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-<%= name %>><%= h.changeCase.pascal(name) %></db-<%= name %>>
```


