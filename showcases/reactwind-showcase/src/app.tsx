function App() {
	const links = ['Startseite', 'Hilfe & Kontakt', 'Verkehrsmeldungen'];
	return (
		<div className="root flex flex-col lg:px-res-lg">
			<div
				className="header flex db-ui-functional
			db-bg-neutral-2 py-fix-sm px-res-md justify-end gap-fix-md">
				{links.map((link) => (
					<a href="#">
						<small>{link}</small>
					</a>
				))}
			</div>

			<div className="navigation p-fix-md">
				<div>ICON</div>
			</div>
		</div>
	);
}

export default App;
