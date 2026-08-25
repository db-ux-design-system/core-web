## Migration

DBFooter is a new, component-driven wrapper for replacing custom footer implementations. Use it inside `DBPage variant="fixed"` and provide semantic navigation in the slots. It deliberately does not collapse links into a mobile accordion, so links remain available to assistive technologies and browser search.

### Key features

- Default slot for flexible main content and a named `meta` slot
- Optional built-in copyright text
- `showMain`, `showMeta`, and `showCopyright` visibility properties
- Static inner content widths: `full`, `large`, `medium`, and `small`
- Full-width outer footer and visual areas

### Example

```tsx
<DBPage
	variant="fixed"
	footer={
		<DBFooter
			width="medium"
			meta={
				<nav aria-label="Legal navigation">
					<ul>
						<li>
							<a href="/privacy">Privacy</a>
						</li>
						<li>
							<a href="/imprint">Imprint</a>
						</li>
					</ul>
				</nav>
			}
		>
			<nav aria-label="Footer navigation">
				<ul>
					<li>
						<a href="/about">About us</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</DBFooter>
	}
>
	Page content
</DBPage>
```

The `width` value only constrains and centres the inner content. It does not make the footer itself narrower and is not a responsive breakpoint switch.
