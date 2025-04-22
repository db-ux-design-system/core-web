# Router usage

> **Note:** At the moment, router links can only be used within the **DBNavigationItem** component!

Unfortunately, the **DBLink** and **DBButton** components do not support router links. Explanation: Router links are usually rendered as anchor tags, which are not permitted within anchor or button tags.

## Supported routers

The following standard routers have been successfully implemented in the corresponding frameworks (Angular, React, Vue). Other routers should work in the same way, but have not yet been tested.

- [Angular router](https://angular.io/api/router)
- [React router](https://reactrouter.com/en/main)
- [Vue router](https://v3.router.vuejs.org/)

The routers are installed and used in accordance with the official docs:

## How to use

To create a DB Brand styled router link, place the corresponding router link component in the default slot of **DBNavigationItem**.

[How to use DBNavigationItem](https://design-system.deutschebahn.com/core-web/review/main/components/navigation-item/overview)

**Angular**

`RouterLink` must be imported from the `@angular/router` package.

```html
<db-navigation-item>
	<a [routerLink]="link.path"> {{ link.label }} </a>
</db-navigation-item>
```

**React**

`Link` must be imported from the `react-router-dom` package.

```html
<DBNavigationItem>
	<Link to={link.path}>
		{link.label}
	</Link>
</DBNavigationItem>
```

**Vue**

`RouterLink` can be used directly, as it is available globally.

```html
<DBNavigationItem>
	<RouterLink :to="link.path"> {{ link.label }} </RouterLink>
</DBNavigationItem>
```
