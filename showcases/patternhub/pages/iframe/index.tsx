/* eslint-disable-next-line unicorn/prefer-node-protocol */
import { Buffer } from 'buffer';
import { useRouter } from 'next/router';
import { COLOR } from '../../../../packages/components/src/shared/constants';
import ComponentParser from '../../components/component-parser';

const IframeComponent = () => {
	const router = useRouter();

	const density = router.query.density ?? 'regular';
	const color = router.query.color ?? COLOR.NEUTRAL_BG_LEVEL_1;

	const componentsString: string = (router.query.components as string) ?? '';
	const componentsBuffer = Buffer.from(componentsString, 'base64');
	const components = componentsBuffer.toString('utf8');

	return (
		<div
			data-density={density}
			className={`iframe-component-container db-${color}`}>
			<ComponentParser componentsString={components} />
		</div>
	);
};

export default IframeComponent;
