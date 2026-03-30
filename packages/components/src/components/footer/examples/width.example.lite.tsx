import { useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['full', 'large', 'small'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterWidth() {
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
					width="full"
					main={
						<div style={{ width: '100%', textAlign: 'left' }}>
							Full
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
					width="large"
					main={
						<div style={{ width: '100%', textAlign: 'left' }}>
							Large
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
					width="small"
					main={
						<div style={{ width: '100%', textAlign: 'left' }}>
							Small
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
