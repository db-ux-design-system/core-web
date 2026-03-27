## Migration

### Migrating from v2 to v3

The Footer component is new in v3. If you previously used custom footer implementations, consider migrating to the new DBFooter component for consistency.

#### Key features

- Standardized footer layout with main and meta sections
- Built-in copyright text support
- Responsive width variants (full, small, medium, large)
- Consistent styling with the DB UX Design System

#### Example migration

**Before (custom implementation):**

```html
<footer class="custom-footer">
	<div class="footer-content">
		<!-- Custom footer content -->
	</div>
	<div class="footer-legal">
		<p>© Deutsche Bahn AG</p>
		<!-- Legal links -->
	</div>
</footer>
```

**After (DBFooter component):**

```html
<footer class="db-footer">
	<section class="db-footer-main">
		<div class="db-footer-content-container">
			<div class="db-footer-main-inner">
				<div>Footer Navigation</div>
			</div>
		</div>
	</section>
	<section class="db-footer-meta">
		<div class="db-footer-content-container">
			<div class="db-footer-meta-inner">
				<p class="db-footer-copyright">© Deutsche Bahn AG</p>
				<a class="db-link" href="#">Privacy</a>
				<a class="db-link" href="#">Imprint</a>
			</div>
		</div>
	</section>
</footer>
```
