# How to develop a component

## Generate all required files

1. Run `npm run generate:component` in a terminal.

2. Enter the name of your new component (e.g. my-awesome-component) and answer all prompts with "yes".

3. The generation process will generate files mainly in these directories:

- `packages/components`
- `showcases`

## Start developing

- Your main work for the component will be inside `packages/components/src/components/my-awesome-component`.

- To start developing your component, run `npm run dev`, which will present you with several options to choose from. When you begin "scribbling" (html+scss) with a component you can select `plain-html`. _Advanced users_ can skip this step and develop directly for a specific framework (HTML, SCSS, and TypeScript); see [Test Frameworks with Showcases](#test-frameworks-with-showcases).

### Styling with SCSS

Starting with `packages/components/src/components/my-awesome-component/my-awesome-component.scss`, there are a few important points to note:

1. The most important dependency are the `variables` included via `@use "@db-ux/core-foundations/build/styles/variables";`. They enable you to use e.g. `$db-spacing-fixed-md` for paddings, margins etc.
2. A lot of times you have to force another `font-size` / `line-height`, you can do it with `@use "@db-ux/core-foundations/build/styles/density/font;` and the corresponding placeholder extend: `@extend %db-overwrite-font-size-sm;`.
3. Some components have an 'adaptive' styling. We exclude it in an own file `@use "@db-ux/core-components/build/styles/internal/component";` so you might use this dependency. As a reference look at another component e.g. [`packages/components/src/components/button/button.scss`](../packages/components/src/components/button/button.scss).
4. If you have to set a specific color (informational, warning, etc.) directly you can use `@use "@db-ux/core-foundations/build/styles/colors";`. You can take a look at the `notification` component for an example `packages/components/src/components/notification/notification.scss` you might use the `@each` to reduce the amount of code for color-variants.
5. To set a fixed icon you might use `@use "@db-ux/core-foundations/build/styles/icons/icon-helpers" as icons;` as dependency and e.g. `@include icons.icon("arrow_forward", "after");`. For a dynamic icon you could prefer integrating it in HTML code with the `data-icon` attribute.

### Component structure with HTML

In addition to the `SCSS`, you need to modify the HTML code for your component. If you start with `plain-html`, you can test your component using `packages/components/src/components/my-awesome-component/index.html`; _Advanced_ users can directly modify the `JSX` in `packages/components/src/components/my-awesome-component/my-awesome-component.lite.tsx`.

There are some things you have to know:

1. There are some reserved `data-*` attributes. For example `data-icon="xxx"` or `data-icon-trailing="xxx"` which will set an icon as `::before` / `::after` contents.
2. Moreover, there are some `data-*` attributes with the same meaning which we try to align across all components. For example `data-width` should be always `auto` or `full-width` to have the same possible options. We've additionally summarized those by providing models / types for these. For a closer look on this ask the Design Team for the glossary.
3. Try to use native HTML tags. For example if you have something like an Accordion use `<details><summary>`, so you would reduce the amount of custom JS/TS code for the components.

### Define the API in `model.ts`

If you're happy with the styling and your HTML code, the next step is to define all possible properties for the component. Update the `packages/components/src/components/my-awesome-component/model.ts` to include properties and/or states for your component. Many properties are already predefined in `packages/components/src/shared/model.ts`. To include them, import the file as follows:

```ts
import { WidthProps } from '../../shared/model';

export type DBMyAwesomeComponentProps =
	DBMyAwesomeComponentDefaultProps &
	WidthProps;

...
```

### Code the 'real' Component

We use [Mitosis](https://github.com/BuilderIO/Mitosis/tree/main/docs) to develop our components for all kinds of frameworks. The component will be placed in `packages/components/src/components/my-awesome-component/my-awesome-component.lite.tsx`. You can add your HTML code here inside the `return`. Afterwards, map all `data-*` attributes to the corresponding properties defined in `model.ts`. Check out the existing components to get an idea of how to develop a new component.

### Good to know

1. You cannot use functions directly in a Mitosis component. A function has to be inside the `state`. So add your function to the `model.ts` `DBMyAwesomeComponentDefaultState`. Then you can define your component inside the `.tsx` file and use it in the `jsx` with `state.myAwsomeFunction()`.
2. Try to enable multiple ways of data-binding: For example in `select` you are able to pass in a list of `<option>` via the `props.children` similiar to standard HTML composition, but we also give the developers the possibility to pass in a stripped down option list via another property: `options?: DBSelectOptionType[]`. We populate this with the internal `<For>` from Mitosis.
   Why do we do this? We have multiple frameworks and all behave differently. With multiple ways of data-binding we try to provide a JS framework native experience as closely as we can.
3. Try to parameterize a lot: For example if your component includes an icon button you should give it a text for accessibility. You should provide a default text, so it can't be empty, but you should also let the user change it with a property e.g. `iconButtonText`.
4. To enable some native functionalities for Vue and Angular (`v-model` and `[(ng-model)]`) you might need to add some extra code to your component. At the generation process you might select `formValue` anyhow, but otherwise take a look at the `input` to see what you need to add to make this work.
5. Angular can be challenging; here are some issues to be aware of:
    1. Angular generates custom HTML tags as wrappers, which may affect your `CSS` selectors. For example if we have a button inside our component and we try to change the styling with `.db-button: {xxx:abc;}` it would not add the styling to the button. As a workaround you should write `.db-button, .db-button > button: {xxx:abc;}` to cover Angular as well:

    ```html
    <db-my-awesome-component>
    	<div>
    		My Awesome Component
    		<db-button>
    			<!-- Styling would be here -->
    			<button>Icon Button</button>
    			<!-- not here -->
    		</db-button>
    	</div>
    </db-my-awesome-component>
    ```

    2. You cannot use multiple slots with the same name. In other frameworks you can use the `<Slot name="bla">` multiple times like this `<div class="my-awesome-component"><Slot name="bla"><Slot name="bla"></div>` but in Angular only the last one would be shown in the DOM. As a workaround you have to create a `Directive`. We automate this via the `packages/components/scripts/post-build/components.js` as an example look at the `header` to see how it works.

## Test Frameworks with Showcases

Our goal is to support at least the three major frameworks (Angular, React, Vue) used at Deutsche Bahn, so you should test your component in every framework. To have the same testing possibilities we generate `showcases/shared/my-awesome-component.json`. This file is used by every framework to pass in the same properties. You should add the same blocks you see in the designs to this file.

Afterwards you need to enable those properties inside all frameworks.

### Angular

Go to `showcases/angular-showcase/src/app/components/my-awesome-component` and update the properties inside the `my-awesome-component.html` with `exampleProps.xxx`. If you need some additional `JS` logic you have to add it to the `.ts` file. Again check out some existing component to get a feeling for this.

Maybe you need to change the navigation to see the component: `showcases/angular-showcase/src/app/utils/navigation-item.ts`

### React

Go to `showcases/react-showcase/src/components/my-awesome-component/index.tsx` and update the properties inside the `getMyAwsomeComponent` function and inside the `tsx` component. Again check out some existing component to get a feeling for this.

Maybe you need to change the navigation to see the component: `showcases/react-showcase/src/utils/navigation-item.tsx`

### Vue

Go to `showcases/vue-showcase/src/components/my-awesome-component/MyAwesomeComponent.vue` and update the properties inside the `DBMyAwsomeComponent` with `exampleProps.xxx`. Again check out some existing component to get a feeling for this.

Maybe you need to change the navigation to see the component: `showcases/vue-showcase/src/utils/navigation-items.ts`

### Patternhub

To show the component on GitHub pages we use another showcase. After you generated the component you need to add your component to the correct sub-item inside `showcases/patternhub/data/routes.ts`.

## Write Tests for Quality Assurance

We have multiple tests you should update:

1. Component Test: `packages/components/src/components/my-awesome-component/my-awesome-component.spec.tsx`. Just test all attributes here with screenshot tests and accessibility testing.
2. Showcase Test: `showcases/e2e/my-awesome-component/showcase-my-awesome-component.spec.ts`. Test the styling in a specific framework here and also the functionality/events.

To run all tests/update the screenshots you need `Docker`. More information here: `e2e/README.md`.

## Manual audit conducted by accessibility experts

After creating a component and writing all test, we need some manually third party accessibility review to prove that the component is stable. This process is internal and will be handled by a team specialized in accessibility testing.
During this process you should track the progress of this manual test inside `showcases/shared/_accessibility-review.json`.
Add a new entry like this:

```json
	{
		"name": "button",
		"status": "REVIEW",
		"date": "2023-11-23"
	},
```

You should change the `date` prop when the first manual test starts or when it gets any update.

The `status` can be:

- `REVIEW`, if the manual accessibility review should happen
- `PROGRESS`, if there are any open issues after the test
- `DONE`, if the component passed the accessibility review
