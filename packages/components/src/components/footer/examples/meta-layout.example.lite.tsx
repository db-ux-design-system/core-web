import { useMetadata } from '@builder.io/mitosis';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Meta layout',
	storybookNames: ['Wide', 'Medium', 'Narrow'],
	storybookArgTypes: StorybookFooterArgTypes
});

/*
 * DBFooterMeta lays its copyright and content out side by side from the small
 * breakpoint upwards and stacks them below it. The switch is a container query on
 * the footer, so it follows the space the footer actually has rather than the
 * viewport. Constraining the width per example therefore shows the real states.
 */
export default function FooterMetaLayout() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-lg)',
				width: '100%'
			}}>
			<div style={{ maxInlineSize: '60rem' }}>
				<p
					style={{
						font: 'var(--db-type-body-sm)',
						margin: '0 0 0.5rem'
					}}>
					Wide: copyright and links share one line.
				</p>
				<DBFooter>
					<DBFooterMeta copyright="Example Company">
						<nav aria-label="Wide legal navigation">
							<ul>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#wide-privacy">
										Privacy policy
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#wide-imprint">
										Imprint
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#wide-terms">
										Terms and conditions
									</DBLink>
								</li>
							</ul>
						</nav>
					</DBFooterMeta>
				</DBFooter>
			</div>

			<div style={{ maxInlineSize: '48rem' }}>
				<p
					style={{
						font: 'var(--db-type-body-sm)',
						margin: '0 0 0.5rem'
					}}>
					Medium: still side by side, the links wrap within their
					column while the copyright stays top aligned.
				</p>
				<DBFooter>
					<DBFooterMeta copyright="Example Company">
						<nav aria-label="Medium legal navigation">
							<ul>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#medium-privacy">
										Privacy policy
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#medium-imprint">
										Imprint
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#medium-accessibility">
										Accessibility statement
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#medium-terms">
										Terms and conditions
									</DBLink>
								</li>
							</ul>
						</nav>
					</DBFooterMeta>
				</DBFooter>
			</div>

			<div style={{ maxInlineSize: '20rem' }}>
				<p
					style={{
						font: 'var(--db-type-body-sm)',
						margin: '0 0 0.5rem'
					}}>
					Narrow: below the breakpoint the links move underneath the
					copyright.
				</p>
				<DBFooter>
					<DBFooterMeta copyright="Example Company">
						<nav aria-label="Narrow legal navigation">
							<ul>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#narrow-privacy">
										Privacy policy
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#narrow-imprint">
										Imprint
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										size="small"
										href="#narrow-terms">
										Terms and conditions
									</DBLink>
								</li>
							</ul>
						</nav>
					</DBFooterMeta>
				</DBFooter>
			</div>
		</div>
	);
}
