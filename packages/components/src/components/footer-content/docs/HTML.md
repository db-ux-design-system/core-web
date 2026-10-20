## HTML

Use `.db-footer-content` as the primary visual area inside a native `.db-footer`. Lists lay out as a single line, which fits up to seven links. From eight links onward, group them by topic and give each group a unique heading naming its content; such a group lays its list out vertically.

```html index.html
<footer class="db-footer">
	<div class="db-footer-content">
		<div class="db-footer-container">
			<nav aria-label="Footer navigation">...</nav>
		</div>
	</div>
</footer>
```
