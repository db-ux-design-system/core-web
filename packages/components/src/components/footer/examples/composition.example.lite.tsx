import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Composition',
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterComposition() {
	return (
		<Fragment>
			<DBFooter width="medium">
				<DBFooterContent>
					<nav aria-label="Footer navigation">
						<ul>
							<li>
								<DBLink wrap={true} href="#services">
									Services
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterContent>
				<DBFooterMeta copyright="© Example Company">
					<nav aria-label="Legal navigation">
						<ul
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 'var(--db-spacing-fixed-md)',
								listStyleType: '""',
								margin: '0',
								padding: '0'
							}}>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#privacy">
									Privacy policy
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#imprint">
									Imprint
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#accessibility">
									Accessibility
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</Fragment>
	);
}
