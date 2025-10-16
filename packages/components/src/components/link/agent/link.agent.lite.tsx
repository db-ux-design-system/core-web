import { DBLink } from '../index';

export default function Link() {
	return (
		<>
			<h1>DBLink Documentation Examples</h1>

			<h2>1. Default Link</h2>
			<DBLink href="https://example.com">Default Link</DBLink>

			<h2>2. Disabled Link</h2>
			<DBLink href="https://example.com" disabled>
				Disabled Link
			</DBLink>

			<h2>3. Target Variants</h2>
			<DBLink href="https://example.com" target="_self">
				Self Target
			</DBLink>
			<DBLink href="https://example.com" target="_blank">
				Blank Target
			</DBLink>

			<h2>4. Custom Class</h2>
			<DBLink href="https://example.com" className="my-custom-class">
				Custom Class
			</DBLink>

			<h2>5. Rel Attribute</h2>
			<DBLink href="https://example.com" rel="noopener noreferrer">
				No Referrer
			</DBLink>

			<h2>6. Link Variants</h2>
			<DBLink href="https://example.com" variant="adaptive">
				Adaptive Variant
			</DBLink>
			<DBLink href="https://example.com" variant="brand">
				Brand Variant
			</DBLink>
			<DBLink href="https://example.com" variant="inline">
				Inline Variant
			</DBLink>

			<h2>7. Link Sizes</h2>
			<DBLink href="https://example.com" size="medium">
				Medium Size
			</DBLink>
			<DBLink href="https://example.com" size="small">
				Small Size
			</DBLink>

			<h2>8. Link Content</h2>
			<DBLink href="https://example.com" content="external">
				External Content
			</DBLink>
			<DBLink href="https://example.com" content="internal">
				Internal Content
			</DBLink>
		</>
	);
}
