import { useMetadata } from '@builder.io/mitosis';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
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
			<DBFooter aria-label="Footer with copyright">
				<DBFooterMeta copyright="© Example Company">
					<nav aria-label="Legal navigation with copyright">
						<ul>
							<li>
								<a className="db-link" href="#privacy">
									Privacy
								</a>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
			<DBFooter aria-label="Footer without copyright">
				<DBFooterMeta>
					<nav aria-label="Legal navigation without copyright">
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
