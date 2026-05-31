import { useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Main',
	storybookNames: ['showMain=true', 'showMain=false'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowMain() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 'var(--db-spacing-fixed-sm)',
				width: '100%',
				padding: 'var(--db-spacing-fixed-sm)'
			}}>
			<div style={{ width: '100%' }}>
				<DBFooter
					showMain
					main={
						<div style={{ width: '100%', textAlign: 'left' }}>
							showMain=true
						</div>
					}
					meta={
						<ul
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								gap: 'var(--db-spacing-fixed-sm)',
								listStyle: 'none',
								margin: '0',
								padding: '0'
							}}>
							<li>
								<a className="db-link" href="#">
									Contact
								</a>
							</li>
							<li>
								<a className="db-link" href="#">
									Imprint
								</a>
							</li>
						</ul>
					}
				/>
			</div>
			<div style={{ width: '100%' }}>
				<DBFooter
					showMain={false}
					main={
						<div style={{ width: '100%', textAlign: 'left' }}>
							showMain=false
						</div>
					}
					meta={
						<ul
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								gap: 'var(--db-spacing-fixed-sm)',
								listStyle: 'none',
								margin: '0',
								padding: '0'
							}}>
							<li>
								<a className="db-link" href="#">
									Contact
								</a>
							</li>
							<li>
								<a className="db-link" href="#">
									Imprint
								</a>
							</li>
						</ul>
					}
				/>
			</div>
		</div>
	);
}
