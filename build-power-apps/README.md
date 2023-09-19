# Microsoft Power Apps

We generate components for Power Apps via Mitosis and a custom plugin.
The base for Power Apps are "React Components" with a `.ts` wrapper file and a `.xml` description file.

## The magic

We have a custom Mitosis plugin under `packages/components/plugins/power-apps`. This plugin uses the Mitosis `useMetadata` hook to automate the building process for Power Apps components.
For example inside `packages/components/src/components/button/button.lite.tsx` we have this metadata (all [property types](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/manifest-schema-reference/property#remarks) are provided by Microsoft):

```tsx

useMetadata({
	...
	component: {
		includeIcon: true,
		hasDisabledProp: true,
		hasOnClick: true,
		properties: [
			{ name: 'children', type: 'SingleLine.Text' },
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Primary', name: 'Primary', value: 'primary' },
					{ key: 'Outlined', name: 'Outlined', value: 'outlined' },
					{ key: 'Text', name: 'Text', value: 'text' },
					{ key: 'Solid', name: 'Solid', value: 'solid' }
				]
			},
			{
				name: 'icon',
				type: 'Icon' // <-- This is a custom type provided by us
			},
			{ name: 'noText', type: 'TwoOptions' },
			{
				name: 'width',
				type: 'Enum',
				values: [
					{ key: 'Full', name: 'Full', value: 'full' },
					{ key: 'Auto', name: 'Auto', value: 'auto' }
				]
			}
		]
	}
});

```

We pass this config file to `hygen` and use the templates from `packages/components/_templates/power-apps/new` to generate all required files for Power Apps components inside `build-power-apps` folder.

All translations for the display keys (`name` value defined in the components file like e.g. `button.lite.tsx` plus the suffix `_Display_Key` like e.g. `headline_Display_Key` in this case) are being maintained with the related `.resx` files (like e.g. `build-power-apps/button/DBButton/strings/DBButton.de.resx`), which are referenced within each components config files `resources` node.

## How to test

Every component has its own `package.json` and testing environment.
For the button we need to do those steps to test (after at least doing an `npm run build` previously):

1. `cd build-power-apps/button`
2. `npm i`
3. `npm run refreshTypes`
4. `npm run start`

This opens a new browser window with a low-code editor and your component.

## How to build

To deploy a new component you need to include it to the `build-power-apps/DBUI/DBUI.cdsproj` file.
Find `ProjectReference` and add your component there:

```text
<ItemGroup>
	<--- your new component
    <ProjectReference Include="..\button\DBButton.pcfproj" />
    ...
</ItemGroup>
```

For build run `npm run build:dotnet` or `npm run build:msbuild`, based on what you installed e.g. [MSBuild](https://learn.microsoft.com/de-de/visualstudio/msbuild/msbuild?view=vs-2022).
Afterwards you should have a `.zip` file inside `build-power-apps/DBUI/bin/Release/DBUI.zip`.

## How to deploy

1. You can test your components with an upload to [PowerApps](https://make.powerapps.com/).
2. In the header is a dropdown for environments, select one with the rights to upload own components (your personal environment might not have the rights in a company account).
3. Goto `Solutions` on the right navigation and click on `import solution`.
4. Select the `build-power-apps/DBUI/bin/Release/DBUI.zip` file.
5. Create a new Power App and [add the custom components](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps#add-components-to-a-canvas-app).
