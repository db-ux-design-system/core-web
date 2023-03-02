import { DBDivider } from '../../../../output/react/src';
import { DefaultComponentProps } from '../../../shared/default-component-data';

const DefaultComponent = ({
	title,
	description,
	variants
}: DefaultComponentProps) => {
	return (
		<div className="default-container">
			<h1>{title}</h1>
			{description ?? <></>}
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<strong>{variant.name}</strong>
					<ul className="variants-list">
						{variant.examples.map((example, exampleIndex) => (
							<li
								key={`${example.name}-${exampleIndex}`}
								style={example.style}
								className={example.className}>
								<p>
									<small>{example.name}</small>
								</p>
								{example.example}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
