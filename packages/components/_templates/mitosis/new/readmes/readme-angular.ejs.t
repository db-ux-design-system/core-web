---
to: "<%= readme ? `src/components/${name}/docs/Angular.md` : null %>"
---
## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DB<%= h.changeCase.pascal(name) %>Module } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DB<%= h.changeCase.pascal(name) %>Module],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-<%= name %>><%= h.changeCase.pascal(name) %></db-<%= name %>>
```


