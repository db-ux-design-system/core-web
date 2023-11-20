# Tonalities

-   You could use `Tonalities` to create visual "volume levels"
-   You could change the appearance of a container rather than a component
-   Best example is the navigation on our [main page](https://db-ui.github.io/mono/review/main/). Above the navigation is a smaller meta-navigation and even the component inside is smaller as well as all the spacings. The meta-navigation is above the real navigation, but focus of the user is on the real navigation, because the meta-navigation has less "volume"

There are three different `Tonalities`, you can use them to change the volume of a specific container or even the entire page based on the use-case, so change the default `tonality` when:

1. `functional`: e.g. use this for business apps with large tables
2. `regular`: e.g. use this for normal consumer apps
3. `expressive`: e.g. use this for marketing apps/ single pages

## How to include

For `CSS`, `SCSS` and `Tailwind` you don't have to include a specific file, just follow the documentation for [foundations](../../foundations/readme).

### How to use

We're providing [examples](./examples) to see the differences.

We set the `data-tonality` on a container like a `div`:

```html
<div data-tonality="functional">
	<!-- Everything inside here will be smaller -->
	<DBButton>Test</DBButton>
	<DBInput label="Test" />
</div>
```

Variants:

|       Variant       | CSS/SCSS/Tailwind            |
| :-----------------: | ---------------------------- |
|    `functional`     | `data-tonality="functional"` |
| `regular` (default) | `data-tonality="regular"`    |
|    `expressive`     | `data-tonality="expressive"` |

To change the `tonality` of the entire page use:

```html
<body data-tonality="functional">
	...
</body>
```
