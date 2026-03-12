# DEV Research list

## Overview

| Design System                                                                           |                                                                              Component                                                                              | Comment                                                                                                                                                 |
| --------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                        [menu](https://atlassian.design/components/menu) / [dropdown-menu](https://atlassian.design/components/dropdown-menu)                        | `<div role="group">` + `<button>`, `<Section>` component with `heading` property, scrolling for complete menu or only for sections                      |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                                               [list-group](https://getbootstrap.com/docs/4.3/components/list-group/)                                                | `<ul>` + `<li>` for static content, `<div>` + `<a>` for interactive, badge as possible content                                                          |
| [GitHub Primer](https://github.com/primer/css)                                          |                                                 [action-list](https://primer.style/product/components/action-list/)                                                 | `<ul>` + `<li>` + `<button>`, trailing action extra button, `showDividers` on list component, inline and block descriptions                             |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                                                                                 ❌                                                                                  | --                                                                                                                                                      |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                               [list](https://v2.grommet.io/list) / [menu](https://v2.grommet.io/menu)                                               | `<ul role="listbox">` + `<li role="option" tabindex="1">` , `<div role="menu">` + `<button role="menuitem">`                                            |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                                             [contained-list](https://carbondesignsystem.com/components/contained-list)                                              | `<div>` + `<header id="header">` + `<ul aria-labelledby="header">` + `<li>` + `<button>`                                                                |
| [Material UI](https://github.com/mui/material-ui)                                       |                                                           [list](https://mui.com/material-ui/react-list/)                                                           | `<ul>` + `<li>` + `<hr>` + `<div role="button">`                                                                                                        |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                                                   [menu](https://www.mongodb.design/component/menu/live-example)                                                    | `<ul role="menu">` + `<li role="none">` + `<button role="menuitem">`, `<li role="separator">` , `aria-current="true"` with indicator + green background |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                                                                                 ❌                                                                                  | --                                                                                                                                                      |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       |                                       [menu](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-menu-sbb-menu--docs)                                        | no `<ul>` just `role="menuitem"` on child elements                                                                                                      |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                                                     [lists](https://polaris-react.shopify.com/components/lists)                                                     | different list components for every use-case, `<ul><li><div><h6>Section title</h6><ul>List Items</ul></div></li></ul>`                                  |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                                        [list-group](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/list-group/)                                         | simple `<ul>` + `<li>`                                                                                                                                  |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         | [lists](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/lists) / [menu](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/menu) | `<div role="list">` + `<div role="listitem">` + `<button>`                                                                                              |
| [Telekom Scale](https://github.com/telekom/scale)                                       |                               [flyout-menu](https://telekom.github.io/scale/?path=/docs/components-flyout-menu--cascading-menu) / ❌                                | `<div role="menu">` + `<div role="menuitem">`, extend other menu with click not hover                                                                   |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                                                                                 ❌                                                                                  | --                                                                                                                                                      |

## Conclusion

- We might add those components:
    - `<DBList>`
    - `<DBListGroup>`
    - `<DBListGroupTitle>`
    - `<DBListItem>`
    - optional subcomponents to work with `:has()` and grid:
        - `<DBListItemContentStart>`
        - `<DBListItemContentEnd>`
    - See [Example in HTML](#example-what-should-be-rendered-in-html)
- Based on the children inside `<DBListItem>` we might change the role of the `DBList` or `DBListGroup`
    - maybe we could just use the normal list semantics even for `<button>` or `<input/>` with additional JS for keyboard navigation, but we need to check how screen-readers will handle this
    - there should be also a property like `semanticRole="list" | "menu"` to override the default behavior and skip the check for children
    - if children are `<button>` and `<a>` we might use `role="menu"` + `role="menuitem"`
    - we need to check if how we can support `details` + `summary` inside a slot of `<DBListItem>`, maybe with `display: grid` and `subgrid`
- The "Menu" component will be an example `<DBPopover>` + `<DBList>`
- An `orientation` property on `DBList` and/or `DBListGroup` will handle the layout for `<DBListItem>`:
    - `horizontal` (Default):
        - ```css
          grid-template-areas:
          	"content-start icon text icon-trailing content-end"
          	"content-start icon description icon-trailing content-end";
          ```
    - `vertical`:
        - ````css
              grid-template-areas:
              	"content-start content-start"
              	"icon icon"
              	"text text"
              	"description icon-trailing"
              	"content-end content-end";
              ```
          ````
- `DBListGroup` has property `showDivider`, which might be a Mitosis component like this:
    - `<Fragment><li class="db-list-group"></li><Show when={showDivider}><li class="db-list-divider"></li></Show></Fragment>`
    - Maybe we should use `variant="divider"` on `DBList` to handle this for all `DBListGroup` ???
    - `variant="divider"` would allow us to use `variant="card"` to align with `DBAccordion` and `DBTable`
- `overflow` for `DBList` and `DBListGroup`
- `width`: `auto` or `full` for `DBListGroup`
- `<input type="checkbox">` or `<input type="radio">` with `:checked` will have `basic-bg-level-2`
- `disabled` property for `DBListItem`
- `descriptionVariant`: `block` and `inline` for `DBListItem`
- `noText` on `DBListGroup` & `DBList` to achieve example icon only menu
- We need to handle keyboard navigation for interactive items see [JS Keyboard Navigation](#js-keyboard-navigation) for resources and examples

### JS Keyboard Navigation

- [MDN Menu/Group/MenuItem Example](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role#:~:text=The%20following%20example%20uses%20the%20group%20role%20with%20a%20drop%2Ddown%20menu%20containing%20menuitems%3A)
- W3 Aria Patterns:
    - [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
    - [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)

- Interesting aria-roles:
    - [aria-activedescendant](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)

### Example what should be rendered in HTML

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Title</title>
		<style>
			ul,
			li {
				list-style: none;
			}

			[role="separator"] {
				/* We need some content to enforce screen-reader to read "separator" */
				&::before {
					content: "---";
					height: 1px;
					border-top: 1px solid black;
					display: block;
					font-size: 0;
				}
			}
		</style>
	</head>
	<body>
		<!-- <DBList> -->
		<div class="db-list">
			<ul aria-label="List 1">
				<!-- <DBListGroup> -->
				<li class="db-list-section" aria-labelledby="section-1">
					<!-- <DBListGroupTitle> -->
					<div class="db-list-group-title" id="section-1">
						Section 1
					</div>
					<ul>
						<!-- <DBListItem>-->
						<li class="db-list-item">Test 1</li>
						<li class="db-list-item">Test 2</li>
						<li class="db-list-item">Test 3</li>
					</ul>
				</li>
				<!-- showDivider inside <DBListGroup> -->
				<li class="db-list-divider" role="separator"></li>
				<li class="db-list-section" aria-labelledby="section-2">
					<div class="db-list-group-title" id="section-2">
						Section 2
					</div>
					<ul>
						<li class="db-list-item">Test 4</li>
						<li class="db-list-item">Test 5</li>
						<li class="db-list-item">Test 6</li>
					</ul>
				</li>
			</ul>
		</div>
	</body>
</html>
```

### Examples for JSX usage

#### Simple example without Groups

```tsx
// static
const App = () => {
	return (
		<DBList>
			<DBListItem>Item 1</DBListItem>
			<DBListItem>Item 2</DBListItem>
			<DBListItem>Item 3</DBListItem>
		</DBList>
	);
};
```

```tsx
// interactive button
const App = () => {
	return (
		<DBList>
			<DBListItem>
				<button>Item 1</button>
			</DBListItem>
			<DBListItem>
				<button>Item 2</button>
			</DBListItem>
			<DBListItem>
				<button>Item 3</button>
			</DBListItem>
		</DBList>
	);
};
```

```tsx
// interactive link
const App = () => {
	return (
		<DBList>
			<DBListItem>
				<a href="#">Item 1</a>
			</DBListItem>
			<DBListItem>
				<a href="#">Item 2</a>
			</DBListItem>
			<DBListItem>
				<a href="#">Item 3</a>
			</DBListItem>
		</DBList>
	);
};
```

```tsx
// interactive checkbox
const App = () => {
	return (
		<DBList>
			<DBListItem>
				<label>
					Item 1
					<input type="checkbox" />
				</label>
			</DBListItem>
			<DBListItem>
				<label>
					Item 2
					<input type="checkbox" />
				</label>
			</DBListItem>
			<DBListItem>
				<label>
					Item 3
					<input type="checkbox" />
				</label>
			</DBListItem>
		</DBList>
	);
};
```

```tsx
// contentEnd links
const App = () => {
	return (
		<DBList>
			<DBListItem
				contentEnd={
					<details>
						<summary>I should be a ghost button</summary>
						<DBList>
							<DBListItem>
								<a href="#">Sub-Item 1</a>
							</DBListItem>
							<DBListItem>
								<a href="#">Sub-Item 2</a>
							</DBListItem>
							<DBListItem>
								<a href="#">Sub-Item 3</a>
							</DBListItem>
						</DBList>
					</details>
				}
			>
				<a href="#">Item 1</a>
			</DBListItem>
			<DBListItem>
				<a href="#">Item 2</a>
			</DBListItem>
			<DBListItem>
				<a href="#">Item 3</a>
			</DBListItem>
		</DBList>
	);
};
```

```tsx
// contentEnd popover
const App = () => {
	return (
		<DBList>
			<DBListItem
				contentEnd={
					<DBPopover
						trigger={
							<DBButton
								variant="ghost"
								icon="chevron_left"
								noText
							>
								Hover on me
							</DBButton>
						}
					>
						<DBList>
							<DBListItem>
								<a href="#">Sub-Item 1</a>
							</DBListItem>
							<DBListItem>
								<a href="#">Sub-Item 2</a>
							</DBListItem>
							<DBListItem>
								<a href="#">Sub-Item 3</a>
							</DBListItem>
						</DBList>
					</DBPopover>
				}
			>
				Item 1
			</DBListItem>
			<DBListItem>
				<a href="#">Item 2</a>
			</DBListItem>
			<DBListItem>
				<a href="#">Item 3</a>
			</DBListItem>
		</DBList>
	);
};
```

### With Groups

```tsx
// static
const App = () => {
	return (
		<DBList>
			<DBListGroup showDivider>
				<DBListItem>Item 1</DBListItem>
				<DBListItem>Item 2</DBListItem>
				<DBListItem>Item 3</DBListItem>
			</DBListGroup>
			<DBListGroup>
				<DBListItem>Item 4</DBListItem>
				<DBListItem>Item 5</DBListItem>
				<DBListItem>Item 6</DBListItem>
			</DBListGroup>
		</DBList>
	);
};
```

```tsx
// ❌ invalid example mixing DBListItem and DBListGroup
const App = () => {
	return (
		<DBList>
			<DBListItem>Item 1</DBListItem>
			<DBListItem>Item 2</DBListItem>
			<DBListItem>Item 3</DBListItem>
			<DBListGroup>
				<DBListItem>Item 4</DBListItem>
				<DBListItem>Item 5</DBListItem>
				<DBListItem>Item 6</DBListItem>
			</DBListGroup>
		</DBList>
	);
};
```
