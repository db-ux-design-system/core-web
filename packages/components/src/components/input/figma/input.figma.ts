import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaInputProps = {
	disabled?: boolean;
	validation?: string;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
};

export const aboveInputs: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2:4310'],
	props: {
		disabled: {
			type: 'enum',
			key: 'Disabled',
			value: {
				False: false,
				True: true
			}
		},
		validation: {
			type: 'enum',
			key: 'Validation',
			value: {
				'(Def) No Validation': 'no-validation',
				'No Validation': 'no-validation',
				Invalid: 'invalid',
				Valid: 'valid'
			}
		},
		showIconLeading: {
			type: 'boolean',
			key: 'Show Icon Leading'
		},
		showIconTrailing: {
			type: 'boolean',
			key: 'Show Icon Trailing'
		}
	}
};

export const floatingInputs: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2:8795'],
	props: {
		disabled: {
			type: 'enum',
			key: 'Disabled',
			value: {
				False: false,
				True: true
			}
		},
		validation: {
			type: 'enum',
			key: 'Validation',
			value: {
				'(Def) No Validation': 'no-validation',
				'No Validation': 'no-validation',
				Invalid: 'invalid',
				Valid: 'valid'
			}
		},
		showIconLeading: {
			type: 'boolean',
			key: 'Show Icon Leading'
		},
		showIconTrailing: {
			type: 'boolean',
			key: 'Show Icon Trailing'
		}
	}
};
