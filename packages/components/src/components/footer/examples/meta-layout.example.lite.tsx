import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Meta layout',
	storybookArgTypes: StorybookFooterArgTypes
});

/*
 * Carries enough links that they wrap onto several rows within their own column,
 * which is where the arrangement matters: the copyright stays top aligned beside
 * the block rather than centring itself against it. Below the small breakpoint the
 * two stack. That state follows the viewport, so it appears when the window
 * narrows rather than being simulated here with a fixed-width wrapper, which would
 * show the same arrangement as this one and hide a regression instead of exposing
 * it.
 */
export default function FooterMetaLayout() {
	return (
		<Fragment>
			<DBFooter>
				<DBFooterMeta copyright="Example Company">
					<nav aria-label="Meta layout legal navigation">
						<ul>
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
									Accessibility statement
								</DBLink>
							</li>
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
									href="#cookies">
									Cookie settings
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#contact">
									Contact and feedback
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#transparency">
									Transparency and reporting
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#whistleblowing">
									Whistleblowing system
								</DBLink>
							</li>
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#supplier-code">
									Supplier code of conduct
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</Fragment>
	);
}
