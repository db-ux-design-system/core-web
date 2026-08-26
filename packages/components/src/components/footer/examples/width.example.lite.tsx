import { useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
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
					<span
						class="dummy-component"
						style={{ inlineSize: '100%' }}>
						Full inner content width
					</span>
					<nav aria-label="Full footer navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#full">
									Full
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Full legal navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#full-legal">
									Legal
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="large" aria-label="Large width footer">
				<DBFooterContent>
					<span
						class="dummy-component"
						style={{ inlineSize: '100%' }}>
						Large inner content width
					</span>
					<nav aria-label="Large footer navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#large">
									Large
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Large legal navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#large-legal">
									Legal
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="medium" aria-label="Medium width footer">
				<DBFooterContent>
					<span
						class="dummy-component"
						style={{ inlineSize: '100%' }}>
						Medium inner content width
					</span>
					<nav aria-label="Medium footer navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#medium">
									Medium
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Medium legal navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#medium-legal">
									Legal
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter width="small" aria-label="Small width footer">
				<DBFooterContent>
					<span
						class="dummy-component"
						style={{ inlineSize: '100%' }}>
						Small inner content width
					</span>
					<nav aria-label="Small footer navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#small">
									Small
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta>
					<nav aria-label="Small legal navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#small-legal">
									Legal
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</div>
	);
}
