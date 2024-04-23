## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
<<<<<<< HEAD:packages/components/src/components/switch/docs/Angular.md
import { DBSwitch } from '@db-ui/ngx-components';
=======
import { DBNotification } from '@db-ui/ngx-components';
>>>>>>> b171ef6b5fc68b075d15b6ef4b8c7b24c67ae1aa:packages/components/src/components/notification/docs/Angular.md

@Component({
  // ...
  standalone: true,
<<<<<<< HEAD:packages/components/src/components/switch/docs/Angular.md
  imports: [..., DBSwitch],
=======
  imports: [..., DBNotification],
>>>>>>> b171ef6b5fc68b075d15b6ef4b8c7b24c67ae1aa:packages/components/src/components/notification/docs/Angular.md
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<<<<<<< HEAD:packages/components/src/components/switch/docs/Angular.md
<db-switch>Switch</db-switch>
=======
<db-notification headline="Headline">Notification</db-notification>
>>>>>>> b171ef6b5fc68b075d15b6ef4b8c7b24c67ae1aa:packages/components/src/components/notification/docs/Angular.md
```
