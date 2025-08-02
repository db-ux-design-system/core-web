import { useMetadata } from '@builder.io/mitosis';
import { DBPage } from '../index';

useMetadata({
	slots: {
		header: {
			angular: '<db-header header>Header Content</db-header>',
			vue: '<DBHeader>Header Content</DBHeader>',
			stencil: '<db-header slot="header">Header Content</db-header>',
			react: '<DBHeader>Header Content</DBHeader>'
		}
	}
});

export default function Page() {
	return (
		<>
			<h1>DBPage Documentation Examples</h1>

			<h2>1. Default Page</h2>
			<DBPage>__slots__ Main Page</DBPage>

			<h2>2. Document Overflow Variants</h2>
			<DBPage documentOverflow="hidden">
				__slots__ Main Page with Hidden Overflow
			</DBPage>
			<DBPage documentOverflow="auto">
				__slots__ Main Page with Auto Overflow
			</DBPage>

			<h2>3. Fade-In Effect</h2>
			<DBPage fadeIn={true}>__slots__ Main Page with Fade-In</DBPage>

			<h2>4. Variant Examples</h2>
			<DBPage variant="auto">__slots__ Page with Auto Variant</DBPage>
			<DBPage variant="fixed">__slots__ Page with Fixed Variant</DBPage>
		</>
	);
}
