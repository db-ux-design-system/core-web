import { DBIcon } from '../index';

export default function Icon() {
	return (
		<>
			<h1>DBIcon Documentation Examples</h1>

			<h2>1. Icon Variants</h2>
			<DBIcon icon="user" />
			<DBIcon icon="settings" />

			<h2>2. Icon Weights</h2>
			<DBIcon icon="user" weight="16" />
			<DBIcon icon="user" weight="24" />
			<DBIcon icon="user" weight="32" />

			<h2>3. Custom Class</h2>
			<DBIcon icon="user" className="my-custom-class" />

			{/*
			 * The heading carries the rationale on purpose: Mitosis strips JSX
			 * comments from the generated agent docs, so a comment here would not
			 * reach the reader of the generated example.
			 */}
			<h2>
				4. Informative icon: DBIcon always renders aria-hidden, so the
				accessible name goes on a wrapper
			</h2>
			<span role="img" aria-label="Coach">
				<DBIcon icon="coach" />
			</span>
		</>
	);
}
