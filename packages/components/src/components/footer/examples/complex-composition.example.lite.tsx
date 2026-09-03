import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBFooterContent from '../../footer-content/footer-content.lite';
import DBFooterMeta from '../../footer-meta/footer-meta.lite';
import DBLink from '../../link/link.lite';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Complex composition',
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterComplexComposition() {
	return (
		<Fragment>
			<DBFooter width="large">
				<DBFooterContent>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns:
								'repeat(auto-fit, minmax(12rem, 1fr))',
							gap: 'var(--db-spacing-fixed-xl)',
							alignItems: 'start'
						}}>
						<div>
							<DBBrand>Deutsche Bahn</DBBrand>
							<p
								style={{
									marginBlock: 'var(--db-spacing-fixed-sm) 0',
									maxInlineSize: '24rem'
								}}>
								Moving people and goods while connecting regions
								and cities.
							</p>
						</div>
						<nav aria-labelledby="footer-travel-heading">
							<h2
								id="footer-travel-heading"
								style={{
									font: 'var(--db-type-body-sm)',
									fontWeight: '700',
									marginBlock: '0 var(--db-spacing-fixed-sm)'
								}}>
								Travel
							</h2>
							<ul
								style={{
									display: 'grid',
									gap: 'var(--db-spacing-fixed-xs)',
									listStyleType: '""',
									margin: '0',
									padding: '0'
								}}>
								<li>
									<DBLink
										variant="inline"
										href="#journey-planner">
										Journey planner
									</DBLink>
								</li>
								<li>
									<DBLink variant="inline" href="#offers">
										Offers
									</DBLink>
								</li>
								<li>
									<DBLink variant="inline" href="#stations">
										Stations
									</DBLink>
								</li>
							</ul>
						</nav>
						<nav aria-labelledby="footer-support-heading">
							<h2
								id="footer-support-heading"
								style={{
									font: 'var(--db-type-body-sm)',
									fontWeight: '700',
									marginBlock: '0 var(--db-spacing-fixed-sm)'
								}}>
								Support
							</h2>
							<ul
								style={{
									display: 'grid',
									gap: 'var(--db-spacing-fixed-xs)',
									listStyleType: '""',
									margin: '0',
									padding: '0'
								}}>
								<li>
									<DBLink
										variant="inline"
										href="#help-and-contact">
										Help and contact
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										href="#passenger-rights">
										Passenger rights
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										href="#lost-property">
										Lost property
									</DBLink>
								</li>
							</ul>
						</nav>
						<nav aria-labelledby="footer-company-heading">
							<h2
								id="footer-company-heading"
								style={{
									font: 'var(--db-type-body-sm)',
									fontWeight: '700',
									marginBlock: '0 var(--db-spacing-fixed-sm)'
								}}>
								Company
							</h2>
							<ul
								style={{
									display: 'grid',
									gap: 'var(--db-spacing-fixed-xs)',
									listStyleType: '""',
									margin: '0',
									padding: '0'
								}}>
								<li>
									<DBLink
										variant="inline"
										href="#company-profile">
										Company profile
									</DBLink>
								</li>
								<li>
									<DBLink variant="inline" href="#careers">
										Careers
									</DBLink>
								</li>
								<li>
									<DBLink
										variant="inline"
										href="#sustainability">
										Sustainability
									</DBLink>
								</li>
							</ul>
						</nav>
					</div>
				</DBFooterContent>
				<DBFooterMeta copyright="© Deutsche Bahn AG">
					<nav aria-label="Complex legal navigation">
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
							<li>
								<DBLink
									variant="inline"
									size="small"
									href="#terms">
									Terms and conditions
								</DBLink>
							</li>
						</ul>
					</nav>
				</DBFooterMeta>
			</DBFooter>
		</Fragment>
	);
}
