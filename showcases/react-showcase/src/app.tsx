import {
	DBBrand,
	DBButton,
	DBCard,
	DBDivider,
	DBHeader,
	DBIcon,
	DBPage
} from '../../../output/react/src';

const App = () => (
	<DBPage
		type="fixedHeaderFooter"
		slotHeader={
			<DBHeader
				slotBrand={<DBBrand anchorChildren>Test</DBBrand>}
				slotDesktopNavigation={
					<span className="db-main-navigation">MAIN NAVIGATION</span>
				}
				slotMetaNavigation={<span>META NAVIGATION</span>}
				slotMobileNavigation={<DBIcon icon="menu" />}
			/>
		}
		slotFooter={<div>FOOTER</div>}>
		<div>
			<h1>React</h1>
			<DBCard>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'stretch'
					}}>
					<DBDivider variant="vertical" />
					<DBButton variant="secondary">Test</DBButton>
					<DBDivider variant="vertical" />
					<DBButton text="Test" icon="account" />
					<DBIcon className="icon" icon="account" />
				</div>
			</DBCard>
		</div>
	</DBPage>
);

export default App;
