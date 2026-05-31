import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaCustomSelectProps = {
	placement?: string;
	dropdownWidth?: string;
};

// Form Field Width=Full (Desktop) — uses "Placement" key
export const fullWidthCustomSelects: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=19383:17780'],
	props: {
		placement: {
			type: 'enum',
			key: 'Placement',
			value: {
				'(Def) Bottom': 'bottom',
				'Bottom-Start': 'bottom-start',
				'Bottom-End': 'bottom-end',
				Top: 'top',
				'Top-Start': 'top-start',
				'Top-End': 'top-end'
			}
		},
		dropdownWidth: {
			type: 'enum',
			key: 'Dropdown Width',
			value: {
				'(Def) Full': 'full',
				'Auto/Fix': 'auto'
			}
		}
	}
};

// Form Field Width=Auto (Desktop) — uses "Dropdown Position" key
export const autoWidthCustomSelects: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=19383:17804'],
	props: {
		placement: {
			type: 'enum',
			key: 'Dropdown Position',
			value: {
				'(Def) Bottom': 'bottom',
				'Bottom-Start': 'bottom-start',
				'Bottom-End': 'bottom-end',
				Top: 'top',
				'Top-Start': 'top-start',
				'Top-End': 'top-end'
			}
		},
		dropdownWidth: {
			type: 'enum',
			key: 'Dropdown Width',
			value: {
				'(Def) Full': 'full',
				'Auto/Fix': 'auto'
			}
		}
	}
};
