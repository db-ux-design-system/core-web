import { useMetadata } from '@builder.io/mitosis';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Copyright',
	storybookNames: ['Custom copyright', 'Without copyright'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterCopyright() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%'
			}}>
			<DBFooter>
				<DBFooterMeta copyright="© Example Company">
					<nav aria-label="Legal navigation with copyright">
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
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter>
				<DBFooterMeta>
					<nav aria-label="Legal navigation without copyright">
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
									href="#terms">
									Terms and conditions
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
		</div>
	);
}
