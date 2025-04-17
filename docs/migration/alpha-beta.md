# Migration Alpha (0.0.x) ➡ Beta (0.1.x)

## Foundations

### Breaking Changes

| Name                               | Description                                                                                                                                                                                                                                                    | Action                                                                                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔄 renamed `Tonality` to `Density` | class names and data-attributes changed from <br/>`.db-ux-#{$tonality},[data-tonality="#{$tonality}"] {` to <br/>`.db-#{density},[data-density="#{density}"] {`                                                                                                | search `tonality` & replace with `density`                                                                                                                                                                    |
| ❌ removed `opacity` tokens        | we use only 1 opacity (0.4) for all components                                                                                                                                                                                                                 | If you use some of the tokens like `--db-opacity-sm` you might run into issues with your layout                                                                                                               |
| 🔄 updated `border` tokens         | we add all shirt-sizes `3xs`-`3xl` as tokens                                                                                                                                                                                                                   | If you use some of the tokens like `db-border-height-sm` you might run into issues with your layout, because the values behind it changed                                                                     |
| 🔄 moved `_font-sizes.scss`        | We moved the file to another folder to align the same structure as icons or colors. We add `css` classes, you can use them by importing `@db-ux/core-foundations/scss/fonts/classes/all.css`                                                                   | If you use some placeholder like `%db-overwrite-font-size-sm` you might need to import the `_font-sizes.scss` like this: `@use "@db-ux/core-foundations/build/scss/fonts";`                                   |
| 🔄 ❗ refactored `colors`          | All colors changed. We use color-palettes to generate speaking-names (check `@db-ux/core-foundations/scss/colors/_variables.scss` to see a list of available tokens). We removed `base` color, it was the same like `neutral`. Add different background level. | 1. Replace all `base` colors with `neutral`<br/>2. If you use the color class replace `db-bg-x` with `db-x-bg-lvl-1`<br/>3. Replace `border-strong`/ `border-weak` tokens with `contrast-high`/`contrast-low` |
| 🔄 renamed timing variables        | renamed `$db-transition-emotional-timing` to `$db-transition-timing-emotional` / `--db-transition-emotional-timing` to `--db-transition-timing-emotional`                                                                                                      | Replace `transition-emotional-timing` by `transition-timing-emotional`                                                                                                                                        |

### Internal

| Name                              | Description                                                                                              | Action |
| --------------------------------- | -------------------------------------------------------------------------------------------------------- | ------ |
| ❌ removed `style-dictonary`      | all variables will be generated in [theme-builder](https://github.com/db-ux-design-system/theme-builder) | ---    |
| ❌ removed `zeplin-styleguide.js` | we use `Figma` in the future                                                                             | ---    |

## Components

> **Note**: All components have different colors and opacities based on the changes in foundations.

Some components may have different dimensions based on changes of spacing tokens.

We removed the default elevation (box-shadow) for card and some card-like components.

The prop variant (`variant="informational"`,`variant="successful"`,`variant="warning"`,`variant="critical"`) has been renamed to `semantic`.

The prop labelVariant for form-components (input, checkbox, ...) has been renamed to `variant`.

| Name                                                                                                           | Description                                                                                                                             | Action                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔄 renamed `db-alert` to `db-notification`                                                                     | renamed `alert` to `notification` and add/changed some additional properties                                                            | 1. Replace `DBAlert`, `db-alert` by `DBNotification` / `db-notification`<br/>2. `Link` was removed, add a normal `a` or `DBLink` to the `slotLink`<br/>3. `props.type` has been changed to `props.variant`<br/>4. `onClick` has been changed to `onClose` |
| 🔄 renamed `db-main-navigation` to `db-navigation`                                                             | renamed `main-navigation` to `navigation`                                                                                               | Replace `DBMainNavigation`, `db-main-navigation` by `DBNavigation` / `db-navigation`                                                                                                                                                                      |
| 🔄 changed `db-button` variants                                                                                | We renamed the variants for the button                                                                                                  | `primary` ➡ `brand`<br/>`solid` ➡ `filled`<br/>`text` ➡ `ghost`                                                                                                                                                                                        |
| 🔄 changed `db-card` elevation                                                                                 | We replaced the box-shadow elevation with bg-level                                                                                      | 1. `props.elevation` ➡ `props.elevationLevel` (1,2,3) <br/>2. `props.variant` ➡ `props.behaviour` <br/>3. Removed card-image                                                                                                                            |
| 🆕 valid/invalid message form-components                                                                       | We add additional messages for `required` form-components like `DBInput` etc.                                                           | Use `validMessage="XXX"` and `invalidMessage="XXX"` to display the required information for form-components. Otherwise you will see a default message with a `TODO: ...`                                                                                  |
| 🔄 changed `db-link` variant                                                                                   | We renamed the variants for the link                                                                                                    | `primary` ➡ `brand`                                                                                                                                                                                                                                      |
| ❌ removed `data-variant="information/critical/..."` for form-components like `input`, `select` and `textarea` | We don't support the colors changes anymore. Use `required`, `pattern`, `min` etc. to trigger `user-valid` for green and red components | `data-variant` changes the label variant now                                                                                                                                                                                                              |
| 🔄 changed `db-accordion` title                                                                                | We replaced `title` with `headlinePlain` because there is already a html default `title`, which caused trouble                          | Rename `title` to `headlinePlain` or use the slot `headline`                                                                                                                                                                                              |
| ❌ removed prop `areaPopup` from `db-navigation-item`                                                          | We no longer support opening sub-navigations from via prop.                                                                             | There is no alternative at the moment.                                                                                                                                                                                                                    |
| 🔄 changed `db-header` slot names                                                                              | The slot names for "action" containers changed                                                                                          | 1. `callToAction` ➡ `primaryAction` <br/>2. `actionBar` ➡ `secondaryAction`                                                                                                                                                                             |
| 🔄 renamed `size` & `variant` in `db-section`                                                                  | The properties `size` and `variant` in `db-section` were renamed to `spacing` & `width` to align it with other components               | Search for every `db-section` and replace `size` with `spacing` and `variant` with `width`                                                                                                                                                                |

### React

`slot` prefix was removed for all components containing another child element, for example:

```tsx
<DBHeader slotBrand={...
```

becomes

```tsx
<DBHeader brand={...
```

This is related to the following properties:

- `slotHeader`
- `slotBrand`
- `slotMetaNavigation`
- `slotCallToAction` (`primaryAction`)
- `slotActionBar` (`secondaryAction`)
- `slotHeadline`
- `slotDrawerHeader`
- `slotSubNavigation`

## Styling

We add some more information about our styling and try to generate classes and data-attributes to use in the project, based on user-preferences.
Moreover, we add all optional styles to `db-ux-42` which may increase the size, but reduces the complexity for using the Design-System with all features.

If you encounter performance issues try to reduce your loaded styles with this [documentation](https://github.com/db-ux-design-system/core-web/blob/main/packages/components/README.md#optimize-dependencies) or by using a tool like [purgecss](https://purgecss.com/).
