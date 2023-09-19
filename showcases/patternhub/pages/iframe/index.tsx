/* eslint-disable-next-line unicorn/prefer-node-protocol */
import { Buffer } from 'buffer';
import { useRouter } from 'next/router';
import ComponentParser from '../../components/component-parser';

const IframeComponent = () => {
	const router = useRouter();

	const tonality = router.query.tonality ?? 'regular';
	const color = router.query.color ?? 'neutral-0';

	const componentsString: string = (router.query.components as string) ?? '';
	const componentsBuffer = Buffer.from(componentsString, 'base64');
	const components = componentsBuffer.toString('utf8');

	return (
		<div
			className={`iframe-component-container db-ui-${tonality} db-bg-${color}`}>
			<ComponentParser componentsString={components} />
		</div>
	);
};

export default IframeComponent;
