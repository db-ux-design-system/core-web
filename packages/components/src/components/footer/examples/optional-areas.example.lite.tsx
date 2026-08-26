import { useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
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
								<DBLink wrap={true} href="#services">
									Services
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
			</DBFooter>
			<DBFooter aria-label="Meta-only footer">
				<DBFooterMeta>
					<p>
						Customer service:{' '}
						<DBLink wrap={true} href="#contact">
							Contact us
						</DBLink>
					</p>
				</DBFooterMeta>
			</DBFooter>
		</div>
	);
}
