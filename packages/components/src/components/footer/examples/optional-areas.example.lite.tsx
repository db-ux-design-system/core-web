import { useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Optional Areas',
	storybookNames: ['Content only', 'Meta only'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterOptionalAreas() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%'
			}}>
			<DBFooter aria-label="Content-only footer">
				<DBFooterContent>
					<nav aria-label="Content-only footer navigation">
						<ul>
							<li>
								<a className="db-link" href="#services">
									Services
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
			</DBFooter>
			<DBFooter aria-label="Meta-only footer">
				<DBFooterMeta>
					<nav aria-label="Meta-only legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#imprint">
									Imprint
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</div>
	);
}
