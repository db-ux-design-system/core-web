import { useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
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
			<DBFooter width="full" aria-label="Full width footer">
				<DBFooterContent>
					<nav aria-label="Full footer navigation">
						<ul>
							<li>
								<a className="db-link" href="#full">
									Full
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Full legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#full-legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="large" aria-label="Large width footer">
				<DBFooterContent>
					<nav aria-label="Large footer navigation">
						<ul>
							<li>
								<a className="db-link" href="#large">
									Large
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Large legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#large-legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="medium" aria-label="Medium width footer">
				<DBFooterContent>
					<nav aria-label="Medium footer navigation">
						<ul>
							<li>
								<a className="db-link" href="#medium">
									Medium
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Medium legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#medium-legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="small" aria-label="Small width footer">
				<DBFooterContent>
					<nav aria-label="Small footer navigation">
						<ul>
							<li>
								<a className="db-link" href="#small">
									Small
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Small legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#small-legal">
									Legal
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</div>
	);
}
