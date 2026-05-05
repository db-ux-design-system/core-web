import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaTooltipProps = {
	emphasis?: string;
};

export const tooltips: FigmaCodeConnect = {
	urls: [
		// Bottom
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:54892',
		// Top
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55540',
		// Left
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55669',
		// Right
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55798'
	],
	props: {
		emphasis: {
			type: 'enum',
			key: 'Emphasis',
			value: {
				'(Def) Weak': 'weak',
				Strong: 'strong'
			}
		}
	}
};
