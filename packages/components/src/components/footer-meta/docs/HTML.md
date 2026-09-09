## HTML

Use `.db-footer-meta` as the secondary visual area inside a native `.db-footer`. The wrapper is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Copyright text is optional.

```html index.html
<footer class="db-footer">
	<div class="db-footer-meta">
		<div class="db-footer-container">
			<p class="db-footer-copyright">&copy;&nbsp;Example Company</p>
			<nav aria-label="Legal navigation">...</nav>
		</div>
	</div>
</footer>
```

The copyright and the secondary content sit side by side from a footer width of 768 px upwards, with the copyright aligned to the top of the row. Below that the secondary content moves under the copyright and takes the full width. The switch measures the footer rather than the viewport, so a footer narrowed by its surroundings, such as a shell with an open side panel, stacks even while a wide window is open.
