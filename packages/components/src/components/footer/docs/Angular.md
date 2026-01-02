## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Use component

#### Simple

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";
import { DBFooter } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter],
	template: `
		<db-footer>
			<div main>Footer Navigation</div>
			<div meta>Legal Links</div>
		</db-footer>
	`
})
export class AppComponent {}
```

#### With custom content

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";
import { DBFooter, DBLink } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter, DBLink],
	template: `
		<db-footer>
			<div main>
				<db-link href="#">About Us</db-link>
				<db-link href="#">Contact</db-link>
				<db-link href="#">Careers</db-link>
			</div>
			<div meta>
				<db-link href="#">Privacy Policy</db-link>
				<db-link href="#">Terms of Service</db-link>
				<db-link href="#">Imprint</db-link>
			</div>
		</db-footer>
	`
})
export class AppComponent {}
```

#### Without copyright

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";
import { DBFooter, DBLink } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter, DBLink],
	template: `
		<db-footer [showCopyright]="false">
			<div main>Footer Content</div>
			<div meta>
				<db-link href="#">Privacy</db-link>
				<db-link href="#">Legal</db-link>
			</div>
		</db-footer>
	`
})
export class AppComponent {}
```

#### Only meta section

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";
import { DBFooter, DBLink } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter, DBLink],
	template: `
		<db-footer [showMain]="false">
			<div meta>
				<db-link href="#">Privacy</db-link>
				<db-link href="#">Imprint</db-link>
			</div>
		</db-footer>
	`
})
export class AppComponent {}
```
