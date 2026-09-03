## Migration

DBFooter is a new composable wrapper for replacing custom footer implementations. Use it inside `DBPage variant="fixed"` and place `DBFooterContent` and `DBFooterMeta` inside it as needed. It deliberately does not collapse links into a mobile accordion, so links remain available to assistive technologies and browser search.

### Key features

- Explicit `DBFooterContent` and `DBFooterMeta` visual areas
- Optional copyright text through `DBFooterMeta copyright`
- Areas are omitted by leaving out their subcomponent
- Static inner content widths: `full`, `large`, `medium`, and `small`
- Full-width outer footer and visual areas

### Example

```tsx
<DBPage
	variant="fixed"
	footer={
		<DBFooter width="medium">
			<DBFooterContent>
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
			</DBFooterContent>
			<DBFooterMeta copyright="© Example Company">
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
			</DBFooterMeta>
		</DBFooter>
	}
>
	Page content
</DBPage>
```

The `width` value only constrains and centres the inner content. It does not make the footer itself narrower and is not a responsive breakpoint switch.
