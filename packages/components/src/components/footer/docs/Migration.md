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

```tsx
import { DBFooter, DBLink } from "@db-ux/react-core-components";

<DBFooter
	main={<div>Footer Navigation</div>}
	meta={
		<>
			<DBLink href="#">Privacy</DBLink>
			<DBLink href="#">Imprint</DBLink>
		</>
	}
/>;
```
