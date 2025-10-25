# How to test components

1. Edit a test file inside `src/components/xxx/xxx.spec.tsx` (after the build from 2. you can edit it also in `output/react/src/components/xxx/xxx.spec.tsx` directly and copy it back to skip 2.)
2. Call `npm run build`, this generates `react` and `vue` tests inside `output/react/src/components/xxx/xxx.spec.tsx`/`output/vue/vue3/src/components/xxx/xxx.spec.tsx`
3. Run the playwright test with your IDE or via [console](https://playwright.dev/docs/running-tests) or with the ui:

```shell
pnpm exec playwright test --config output/react/playwright.config.ts --ui
```

## React vs. Vue

We write the tests for `react`, but also use them for `vue` with `jsx`. If there are a special cases like for example a `slot`, you can add the `vue` specific part with a comment (will be replaced during build), like this example:

```tsx
<DBPopover
	animation="disabled"
	data-testid="popover"
	slotTrigger={<DBButton data-testid="button">Button</DBButton>}
>
	{/*<template v-slot:trigger>
				<DBButton data-testid="button">Button</DBButton>
			</template>*/}
	Test
</DBPopover>
```
