import { useMetadata } from '@builder.io/mitosis';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Meta layout',
	storybookNames: [
		'Side by side',
		'Side by side with wrapped links',
		'Stacked'
	],
	storybookArgTypes: StorybookFooterArgTypes
});

/*
 * The three arrangements come from one set of rules that reacts to the footer's
 * own available width, so the only difference between the variants is how much
 * width their wrapper grants them. Nothing here simulates a state: each footer
 * gets the same markup, and the layout it ends up in is the one the CSS produces
 * at that width.
 *
 * The wrappers carry `max-inline-size: 100%`, so on a narrow screen the wider
 * variants fall back to the same arrangement as the narrow one. That is the real
 * behaviour and has to stay visible rather than being scaled away.
 */
export default function FooterMetaLayout() {
	return (
		<div class="footer-meta-layout-example">
			<div class="footer-meta-layout-example-track">
				{/* Enough room for the links to sit next to the copyright on one line. */}
				<div style={{ inlineSize: '100%' }}>
					<DBFooter>
						<DBFooterMeta copyright="Example Company">
							<nav aria-label="Legal navigation, side by side">
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
								</ul>
							</nav>
						</DBFooterMeta>
					</DBFooter>
				</div>
				{/*
				 * Still beside the copyright, but no longer wide enough for the links
				 * to share a single line, so they wrap inside their own column.
				 */}
				<div style={{ inlineSize: '768px', maxInlineSize: '100%' }}>
					<DBFooter>
						<DBFooterMeta copyright="Example Company">
							<nav aria-label="Legal navigation, wrapped links">
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
								</ul>
							</nav>
						</DBFooterMeta>
					</DBFooter>
				</div>
				{/*
				 * Too narrow for both columns, so the links move under the copyright and
				 * take the full width. The copyright stays top aligned.
				 */}
				<div style={{ inlineSize: '320px', maxInlineSize: '100%' }}>
					<DBFooter>
						<DBFooterMeta copyright="Example Company">
							<nav aria-label="Legal navigation, stacked">
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
								</ul>
							</nav>
						</DBFooterMeta>
					</DBFooter>
				</div>
			</div>
		</div>
	);
}
