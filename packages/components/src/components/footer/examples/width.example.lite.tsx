import { useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['full', 'large', 'medium', 'small'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterWidth() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%'
			}}>
			<DBFooter
				width="full"
				meta={
					<nav aria-label="Full legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Full footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#full">
								Full
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
			<DBFooter
				width="large"
				meta={
					<nav aria-label="Large legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Large footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#large">
								Large
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
			<DBFooter
				width="medium"
				meta={
					<nav aria-label="Medium legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Medium footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#medium">
								Medium
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
			<DBFooter
				width="small"
				meta={
					<nav aria-label="Small legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Small footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#small">
								Small
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
		</div>
	);
}
