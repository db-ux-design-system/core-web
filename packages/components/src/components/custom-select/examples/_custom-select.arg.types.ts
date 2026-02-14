import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookCustomSelectArgTypes: Record<string, InputType> = {
	options: { control: 'object' },
	label: { control: 'text' },
	placeholder: { control: 'text' },
	id: { control: 'text' },
	multiple: { control: 'boolean' },
	variant: { control: 'select', options: ['above', 'floating'] },
	values: { control: 'object' },
	showLabel: { control: 'boolean' },
	message: { control: 'text' },
	showMessage: { control: 'boolean' },
	...StorybookIconArgTypes,
	validation: {
		control: 'select',
		options: ['invalid', 'valid', 'no-validation']
	},
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	disabled: { control: 'boolean' },
	name: { control: 'text' },
	form: { control: 'text' },
	ariaDescribedBy: { control: 'text' },
	formFieldWidth: { control: 'select', options: ['full', 'auto'] },
	dropdownWidth: { control: 'select', options: ['auto', 'fixed'] },
	placement: {
		control: 'select',
		options: [
			'top',
			'bottom',
			'top-start',
			'top-end',
			'bottom-start',
			'bottom-end'
		]
	},
	selectedType: { control: 'select', options: ['amount', 'text', 'tag'] },
	showNoResults: { control: 'boolean' },
	noResultsText: { control: 'text' },
	showLoading: { control: 'boolean' },
	loadingText: { control: 'text' },
	showSearch: { control: 'boolean' },
	showSelectAll: { control: 'boolean' },
	showClearSelection: { control: 'boolean' },
	removeTagsTexts: { control: 'object' },
	searchValue: { control: 'text' },
	searchLabel: { control: 'text' },
	searchPlaceholder: { control: 'text' },
	selectedLabels: { control: 'text' },
	selectedPrefix: { control: 'text' },
	selectAllLabel: { control: 'text' },
	listLabel: { control: 'text' },
	clearSelectionText: { control: 'text' },
	amountText: { control: 'text' },
	mobileCloseButtonText: { control: 'text' },
	open: { control: 'boolean' },
	autofocus: { control: 'boolean' }
};
