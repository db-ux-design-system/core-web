import { DBButton, DBCard, DBInput } from '../../../../../packages/react-core-components/src';
import DefaultPage from '../../../components/default-page';

const densities = ['functional', 'regular', 'expressive'];
const Example = () => {
	return (
		<DefaultPage>
			<h1>Density Examples</h1>

			<p>
				Open "inspect" to see the different spacings & sizing applied to
				the cards and components.
			</p>

			<h2>Example side by side:</h2>

			<div className="density-example-grid">
				{densities.map((density) => (
					<h3 key={`grid-headline-${density}`}>
						{density.charAt(0).toUpperCase() + density.slice(1)}
					</h3>
				))}
				{densities.map((density) => (
					<article
						data-density={density}
						key={`grid-card-${density}`}>
						<DBCard spacing="small">
							<h4>Login</h4>
							<p>
								Lorem ipsum dolor sit amet, consetetur
								sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam
								erat, sed diam voluptua.
							</p>
							<DBInput label="Username" />
							<DBInput label="Password" type="password" />
							<DBButton width="full" variant="brand">
								Login
							</DBButton>
						</DBCard>
					</article>
				))}
			</div>

			<h2>Example multiple densities working together:</h2>

			<div className="density-example-page">
				<div
					className="density-example-page-functional"
					data-density="functional">
					<DBCard
						className="db-color-neutral db-bg-color-bg-basic-level-2"
						spacing="small">
						We are functional
					</DBCard>
					<DBCard
						className="db-color-informational db-bg-color-basic-level-2 "
						spacing="small">
						even that we have
					</DBCard>
					<DBCard
						className="db-color-successful db-bg-color-bg-basic-level-2"
						spacing="small">
						a color
					</DBCard>
					<DBCard
						className="db-color-warning db-bg-color-bg-basic-level-2"
						spacing="small">
						the user shouldn't
					</DBCard>
					<DBCard
						className="db-color-critical db-bg-color-bg-basic-level-2"
						spacing="small">
						focus us
					</DBCard>
				</div>
				<div
					className="density-example-page-expressive"
					data-density="expressive">
					<DBCard spacing="medium">
						I'm expressive the user should focus me first
					</DBCard>
				</div>
				<div
					className="density-example-page-regular"
					data-density="regular">
					<DBCard spacing="small">We</DBCard>
					<DBCard spacing="small">are</DBCard>
					<DBCard spacing="small">regular</DBCard>
				</div>
			</div>
		</DefaultPage>
	);
};

export default Example;
