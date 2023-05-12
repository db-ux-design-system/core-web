# Microsoft Power Apps

We generate components for Power Apps via mitosis and a custom plugin.
The base for Power Apps are "React Components" with a `.ts` wrapper file and a `.xml` description file.

## The magic

We have a custom mitosis plugin under `packages/components/plugins/power-apps` . This plugin uses the mitosis `useMetadata` hook to automate the building process for Power Apps components.
For example inside `packages/components/src/components/button/button.lite.tsx` we have this metadata (all [property types](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/manifest-schema-reference/property#remarks) are provided by MS):

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

We pass this config file to `hygen` and use the templates from `packages/components/_templates/power-apps/new` to generate all required files for power app components inside `build-power-apps` folder.

## How to test

Every component has its own `package.json` and testing environment.
For the button we need to do those steps to test:

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

For build run `npm run build:dotnet` or `build:msbuild`, based on what you installed e.g. [MSBuild](https://learn.microsoft.com/de-de/visualstudio/msbuild/msbuild?view=vs-2022).
Afterwards you should have a `.zip` file inside `build-power-apps/DBUI/bin/Release/DBUI.zip`.
