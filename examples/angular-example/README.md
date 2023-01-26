# Angular example

1. init new angular project `ng new angular-example`
2. Select:
3. Would you like to add Angular routing? `No`
4. Which stylesheet format would you like to use? `SCSS`
5. `$ cd angular-example`
6. `$ npm i @db-ui/ngx-components`
7. Add this to `src/styles.scss`:

```scss
// Combined dependencies like variables, colors and tonality and all components
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
// We use $db-spacing-fixed-md variable so we need to import the file where the variable is defined
@use "@db-ui/foundations/build/scss/variables.global" as *;
// Color-classes are optional, we use them in the example to have easy access to colors
@import "@db-ui/foundations/build/scss/color-classes";
```

6. Goto `src/app/app.component.html` and replace content with:

```html
<main>
  <div>
    <h1>db-ui-functional</h1>
    <p>Use this as default for enterprise apps</p>
  </div>
  <div>
    <h1>db-ui-regular</h1>
    <p>Use this as default for consumer apps</p>
  </div>
  <div>
    <h1>db-ui-expressive</h1>
    <p>Use this as default for marketing apps</p>
  </div>
</main>
```

7. Start the app with `npm run start`
8. All texts should have the same size
9. Goto `src/app/app.component.html` and update the `class` for each `<div>` with those classes:
10. `db-ui-functional`
11. `db-ui-regular`
12. `db-ui-expressive`
13. Goto browser; All texts should have different sizes
14. Goto `src/app/app.component.html` and add additonal classes for each `<div>`:
15. `db-bg-neutral-3`
16. `db-bg-success`
17. `db-bg-success-light`
18. Goto browser; All containers should have different background and foreground colors
19. Goto `src/styles.scss` and append a new class:

```scss
.container-with-padding {
  padding: $db-spacing-fixed-md;
}
```

14. Goto `src/src/app/app.component.html` and add `container-with-padding` class for each `<div>`
15. Goto browser; All containers should have different paddings
16. Goto `src/app/app.module.ts` and replace content with:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DBButtonModule } from "@db-ui/ngx-components";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DBButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

18. Goto `src/app/app.component.html` and add `<db-button icon="account">Test</db-button>` inside each div
19. Goto browser; Button should be visible with different paddings
