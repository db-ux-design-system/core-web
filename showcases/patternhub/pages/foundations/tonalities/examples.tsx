import DefaultPage from '../../../components/default-page';
import { DBButton, DBInput, DBCard } from '../../../components/src';

const tonalities = ['functional', 'regular', 'expressive'];
const Example = () => {
	return (
		<DefaultPage>
			<h1>Tonality Examples</h1>

			<p>
				Open "inspect" to see the different spacings & sizing applied to
				the cards and components.
			</p>

			<h2>Example side by side:</h2>

			<div className="tonality-example-grid">
				{tonalities.map((tonality) => (
					<h3 key={`grid-headline-${tonality}`}>{tonality}</h3>
				))}
				{tonalities.map((tonality) => (
					<article
						data-tonality={tonality}
						key={`grid-card-${tonality}`}>
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
							<DBButton
								width="full"
								variant="primary"
								type="button">
								Login
							</DBButton>
						</DBCard>
					</article>
				))}
			</div>

			<h2>Example multiple tonalities working together:</h2>

			<div className="tonality-example-page">
				<div
					className="tonality-example-page-functional"
					data-tonality="functional">
					<DBCard colorVariant="neutral" spacing="small">
						We are functional
					</DBCard>
					<DBCard colorVariant="informational" spacing="small">
						even that we have
					</DBCard>
					<DBCard colorVariant="successful" spacing="small">
						a color
					</DBCard>
					<DBCard colorVariant="warning" spacing="small">
						the user shouldn't
					</DBCard>
					<DBCard colorVariant="critical" spacing="small">
						focus us
					</DBCard>
				</div>
				<div
					className="tonality-example-page-expressive"
					data-tonality="expressive">
					<DBCard spacing="medium">
						I'm expressive the user should focus me first
					</DBCard>
				</div>
				<div
					className="tonality-example-page-regular"
					data-tonality="regular">
					<DBCard spacing="small">We</DBCard>
					<DBCard spacing="small">are</DBCard>
					<DBCard spacing="small">regular</DBCard>
				</div>
			</div>
		</DefaultPage>
	);
};

export default Example;
