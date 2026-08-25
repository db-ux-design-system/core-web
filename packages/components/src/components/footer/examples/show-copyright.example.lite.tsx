import { useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Copyright',
	storybookNames: ['showCopyright=true', 'showCopyright=false'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowCopyright() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%'
			}}>
			<DBFooter
				showCopyright
				meta={
					<nav aria-label="Show copyright enabled legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#privacy">
									Privacy
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Show copyright enabled footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#services">
								Services
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
			<DBFooter
				showCopyright={false}
				meta={
					<nav aria-label="Show copyright disabled legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#imprint">
									Imprint
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Show copyright disabled footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
		</div>
	);
}
