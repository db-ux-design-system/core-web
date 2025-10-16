```scss
@use "@db-ux/core-foundations/build/styles/variables";

.my-component {
	inline-size: variables.$db-container-sm; // Use container for larger fixed widths
	block-size: variables.$db-sizing-lg; // Use sizing for fixed heights
	padding: variables.$db-spacing-fixed-sm; // Use fixed spacing for paddings
	margin: variables.$db-spacing-responsive-md; // Use responsive spacing for margins
	border-radius: variables.$db-border-radius-md; // Use border radius
	transition-duration: variables.$db-transition-duration-medium; // Use transition duration
	border-width: variables.$db-border-width-md; // Use border width
}
```

### SCSS Variables List

Use sizing's for fixed heights/widths e.g. the db-button has always a fixed height

- `$db-sizing-3xs`
- `$db-sizing-2xs`
- `$db-sizing-xs`
- `$db-sizing-sm`
- `$db-sizing-md`
- `$db-sizing-lg`
- `$db-sizing-xl`
- `$db-sizing-2xl`
- `$db-sizing-3xl`

Use fixed spacings for all kind of distances (margin, padding, ...)

- `$db-spacing-fixed-3xs`
- `$db-spacing-fixed-2xs`
- `$db-spacing-fixed-xs`
- `$db-spacing-fixed-sm`
- `$db-spacing-fixed-md`
- `$db-spacing-fixed-lg`
- `$db-spacing-fixed-xl`
- `$db-spacing-fixed-2xl`
- `$db-spacing-fixed-3xl`

The primary use case for responsive spacings are paddings/gaps in an application e.g. the <main> should have a responsive padding.

- `$db-spacing-responsive-3xs`
- `$db-spacing-responsive-2xs`
- `$db-spacing-responsive-xs`
- `$db-spacing-responsive-sm`
- `$db-spacing-responsive-md`
- `$db-spacing-responsive-lg`
- `$db-spacing-responsive-xl`
- `$db-spacing-responsive-2xl`
- `$db-spacing-responsive-3xl`

Use elevation for shadows

- `$db-elevation-sm`
- `$db-elevation-md`
- `$db-elevation-lg`

### Use border widths for borders

- `$db-border-width-3xs`
- `$db-border-width-2xs`
- `$db-border-width-xs`
- `$db-border-width-sm`
- `$db-border-width-md`
- `$db-border-width-lg`
- `$db-border-width-xl`
- `$db-border-width-2xl`
- `$db-border-width-3xl`

Use border radius for rounded corners

- `$db-border-radius-3xs`
- `$db-border-radius-2xs`
- `$db-border-radius-xs`
- `$db-border-radius-sm`
- `$db-border-radius-md`
- `$db-border-radius-lg`
- `$db-border-radius-xl`
- `$db-border-radius-2xl`
- `$db-border-radius-3xl`
- `$db-border-radius-full`

Use opacity for transparency effects

- `$db-opacity-3xs`
- `$db-opacity-2xs`
- `$db-opacity-xs`
- `$db-opacity-sm`
- `$db-opacity-md`
- `$db-opacity-lg`
- `$db-opacity-xl`
- `$db-opacity-2xl`
- `$db-opacity-3xl`
- `$db-opacity-full`

Use transition durations for animations

- `$db-transition-duration-extra-slow`
- `$db-transition-duration-slow`
- `$db-transition-duration-medium`
- `$db-transition-duration-fast`
- `$db-transition-duration-extra-fast`
- `$db-transition-timing-emotional`
- `$db-transition-timing-functional`
- `$db-transition-timing-show`
- `$db-transition-timing-hide`
- `$db-transition-straight-emotional`
- `$db-transition-straight-functional`
- `$db-transition-straight-show`
- `$db-transition-straight-hide`

Use screen sizes for responsive design breakpoints

- `$db-screen-xs`
- `$db-screen-sm`
- `$db-screen-md`
- `$db-screen-lg`
- `$db-screen-xl`

Use container sizes for fixed containers

- `$db-container-3xs`
- `$db-container-2xs`
- `$db-container-xs`
- `$db-container-sm`
- `$db-container-md`
- `$db-container-lg`
- `$db-container-xl`
- `$db-container-2xl`
- `$db-container-3xl`
