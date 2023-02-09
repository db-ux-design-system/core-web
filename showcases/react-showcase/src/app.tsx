import {
	DBBrand,
	DBButton,
	DBCard,
	DBDivider,
	DBHeader,
	DBIcon,
	DBPage,
	DBInput,
	DBLink,
	DBSection
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
				<DBSection
					variant="large"
					size="small"
					className="db-bg-success">
					<h1>React</h1>
				</DBSection>
				<DBSection className="db-bg-information">
					<DBCard className="db-bg-neutral-0">
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
				</DBSection>

				<DBSection
					variant="medium"
					size="medium"
					className="db-bg-neutral-4">
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
					<section className="db-ui-functional">
						<DBLink content="internal">Link Component</DBLink>
					</section>
					<section className="db-ui-regular">
						<DBLink
							href="http://www.deutschebahn.com"
							variant="primary"></DBLink>
						<DBLink
							href="http://www.deutschebahn.com"
							size="small"
							variant="primary">
							Link small
						</DBLink>
					</section>
					<section className="db-ui-expressive">
						<DBLink content="external" href="#">
							Link component expressive
						</DBLink>
					</section>
				</DBSection>
			</div>
		</DBPage>
	);
};

export default App;
