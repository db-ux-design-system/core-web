import './index.scss';
import { type CSSProperties, type ReactElement } from 'react';
import { DBDivider } from '../../../../output/react/src';

export type DefaultComponentExample = {
	name: string;
	example: ReactElement;
	style?: CSSProperties;

	className?: string;
};

export type DefaultComponentVariants = {
	name: string;
	examples: DefaultComponentExample[];
};

export type DefaultComponentProps = {
	title: string;
	description?: ReactElement;
	variants: DefaultComponentVariants[];
};

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
