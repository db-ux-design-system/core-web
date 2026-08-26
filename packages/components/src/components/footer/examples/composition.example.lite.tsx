import { useMetadata } from '@builder.io/mitosis';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Composition',
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterComposition() {
	return (
		<DBFooter width="medium">
			<DBFooterContent>
				<nav aria-label="Footer navigation">
					<ul>
						<li>
							<a
								className="db-link"
								data-wrap="true"
								href="#services">
								Services
							</a>
						</li>
					</ul>
				</nav>
			</DBFooterContent>
			<DBFooterMeta copyright="© Example Company">
				<nav aria-label="Legal navigation">
					<ul>
						<li>
							<a
								className="db-link"
								data-wrap="true"
								href="#privacy">
								Privacy
							</a>
						</li>
					</ul>
				</nav>
			</DBFooterMeta>
		</DBFooter>
	);
}
