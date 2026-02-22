# IDE Support

We try to support those IDEs:

- [JetBrain](https://www.jetbrains.com/) IDEs (like. IntelliJ IDEA, WebStorm, etc.)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

Most use cases of the Design System might work in other IDEs as well.

## Autocomplete for CSS classes and CSS Custom Properties (Variables)

You can enable auto-complete of CSS classes (like e.g. `db-color-cyan`) for `HTML` or `JSX` and CSS Custom Properties (like e.g. `var(--db-bg-basic-level-1-default)`) in `.css` or `.scss` files by including `@db-ux/core-foundations/build/ide`.

> **Note:** The contents of this directory shouldn't be included/referenced inside your app. It's only serving as a file containing declarations for autocompletion inside your IDE. All values for classes and properties don't reflect the real values, and neither does the CSS selector. The correct values my differ based on multiple circumstances like light-/dark-mode or screen-size etc. Therefore, there isn't a 1:1 mapping.

### JetBrain IDEs (like. IntelliJ IDEA, WebStorm, etc.)

1. Goto `File/Settings/Languages & Frameworks/JavaScript/Libraries`
2. Press the `Add` button and write `db-ux` into the "name" input. This name will be shown in the auto-complete popup during coding. You can change the name if you want to. Keep the rest of the settings as default: `Framework type: <Custom>` and `Visibility: Project`.
3. Next press the ➕ button below `Visibility` and select `Attach Directories...`
4. This will open a file manager. Navigate to your current projects `node_modules/@db-ux/core-foundations/build/ide` and select the `ide` folder. Press `OK`.
5. The folder should be included in the list below the ➕ button. Press `Apply` on the bottom.
6. Everything should work now. Close the settings and move to a `html` or `jsx/tsx` file and write `class="db-` as attribute to an element. You should see all `db-*` classes for auto-completion. Furthermore, you can go to a `.css` file and write inside a selector `color: db-`. You should see the autocomplete for CSS Custom Properties. By pressing `ENTER` this will automatically add `var(--db-xxx)`.

### VS Code

1. Install [the CSS Variable Autocomplete extension](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables).
2. If it doesn't exist, create a new file `.vscode/settings.json` in your project
3. Add this to `settings.json`:

```json settings.json
{
	"cssVariables.lookupFiles": [
		"**/*.css",
		"**/*.scss",
		"**/*.sass",
		"**/*.less",
		"node_modules/@db-ux/core-foundations/build/ide/db.ide.css"
	]
}
```

4. Go to a `.css` file and write inside a selector `color: db-`. You should see the autocomplete for CSS Custom Properties. By pressing `ENTER` this will automatically add `var(--db-xxx)`.

> **Note:** We couldn't find a good extension to work properly with the classes you could try out [the SCSS Everywhere extension](https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion). But we encountered some issues with this one.
