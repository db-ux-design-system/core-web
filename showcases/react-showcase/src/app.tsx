import {
	DBBrand,
	DBButton,
	DBCard,
	DBDivider,
	DBHeader,
	DBIcon,
	DBPage,
	DBInput
} from '../../../output/react/src';

const App = () => {
	const onClick = () => {
		// eslint-disable-next-line no-console
		console.log('click event test');
	};

	const onSubmit = (event: any) => {
		event.preventDefault();
		// eslint-disable-next-line no-console
		console.log('Submit Form', event);
	};

	return (
		<DBPage
			type="fixedHeaderFooter"
			slotHeader={
				<DBHeader
					slotBrand={<DBBrand anchorChildren>Test</DBBrand>}
					slotDesktopNavigation={
						<span className="db-main-navigation">
							MAIN NAVIGATION
						</span>
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
						<DBButton
							text="Test"
							icon="account"
							onClick={onClick}
						/>
						<DBIcon className="icon" icon="account" />
					</div>
				</DBCard>
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						margin: '1rem 0'
					}}>
					<form className="db-ui-expressive" onSubmit={onSubmit}>
						<DBInput
							description="This is a description"
							label="Start train station"
							placeholder="some text"
							iconBefore="edit"
							variant="error"
							value="hello"
							name="testInput"
						/>

						<DBInput
							description="Valid test"
							label="With event"
							placeholder="some text"
							iconBefore="edit"
							iconAfter="heart"
							variant="warning"
							id="input-expr-warning"
							required={true}
						/>
						<DBInput
							label="start date"
							placeholder="some text"
							type="datetime-local"
							id="input-expr-date"
						/>
						<DBButton variant="secondary">Test</DBButton>
					</form>

					<section className="db-ui-regular">
						<DBInput
							label="Start train station"
							placeholder="some text"
							iconAfter="heart"
							id="input-reg"
							required={true}
							minLength={5}
						/>
						<DBInput
							label="Start date"
							placeholder="some text"
							type="week"
							id="input-reg-date"
						/>
					</section>

					<section className="db-ui-functional">
						<DBInput
							id="db-input-functional-1"
							label="Start train station"
							placeholder="some text"
						/>
						<DBInput
							id="db-input-functional-2"
							label="Textinput disabled"
							placeholder="some text"
							variant="information"
							disabled={true}
						/>

						<DBInput
							label="start date"
							placeholder="some text"
							type="datetime-local"
							id="input-func-date"
						/>
					</section>
				</div>
			</div>
		</DBPage>
	);
};

export default App;
