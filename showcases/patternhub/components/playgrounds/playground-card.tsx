import { DBCard, DBDivider, DBStack } from '@components';
import { type PlaygroundCardProps } from './data';

const PlaygroundCard = ({
	hrefPath,
	type,
	asset,
	description,
	headline
}: PlaygroundCardProps) => {
	const href =
		type === 'codesandbox'
			? `https://codesandbox.io/s/github/db-ux-design-system/examples/tree/main/${hrefPath}`
			: `https://stackblitz.com/fork/github/db-ux-design-system/examples/tree/main/${hrefPath}?file=index.html`;

	if (!headline) {
		return (
			<>
				<DBDivider />
				<DBDivider />
			</>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<DBCard behavior="interactive">
				<DBStack direction="row">
					<img
						width="40"
						height="40"
						alt={headline}
						src={`${process.env.NEXT_PUBLIC_BASE_PATH}${asset}`}
					/>
					<DBStack>
						<strong>{headline}</strong>
						{description}
					</DBStack>
				</DBStack>
			</DBCard>
		</a>
	);
};

export default PlaygroundCard;
