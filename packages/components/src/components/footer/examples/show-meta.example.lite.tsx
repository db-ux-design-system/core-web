import { useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Meta',
	storybookNames: ['showMeta=true', 'showMeta=false'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowMeta() {
	return (
		<div
			style={{
				display: 'grid',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%'
			}}>
			<DBFooter
				showMeta
				meta={
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a className="db-link" href="#privacy">
									Privacy
								</a>
							</li>
						</ul>
					</nav>
				}>
				<nav aria-label="Footer navigation">
					<ul>
						<li>
							<a className="db-link" href="#services">
								Services
							</a>
						</li>
					</ul>
				</nav>
			</DBFooter>
			<DBFooter showMeta={false}>
				<nav aria-label="Footer navigation">
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
