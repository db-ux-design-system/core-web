import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaTextareaProps = {
	disabled?: boolean;
	validation?: string;
};

const textareaProps = {
	disabled: {
		type: 'enum' as const,
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	validation: {
		type: 'enum' as const,
		key: 'Validation',
		value: {
			'(Def) No Validation': 'no-validation',
			'No Validation': 'no-validation',
			Invalid: 'invalid',
			Valid: 'valid'
		}
	}
};

export const aboveTextareas: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3895:4642',
		// Active
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3714:6941',
		// Filled
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3714:7493'
	],
	props: textareaProps
};

export const floatingTextareas: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3714:8045',
		// Active
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3714:8597',
		// Filled
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=3714:8838'
	],
	props: textareaProps
};
