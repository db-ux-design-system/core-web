import type { InputType } from 'storybook/internal/csf';

export const StorybookPaginationArgTypes: Record<string, InputType> = {
	currentPage: { control: 'number' },
	totalCount: { control: 'number' },
	pageSize: { control: 'number' },
	siblingCount: { control: 'number' },
	boundaryCount: { control: 'number' },
	size: { control: 'select', options: ['small', 'medium'] },
	label: { control: 'text' },
	previousLabel: { control: 'text' },
	nextLabel: { control: 'text' },
	pageLabel: { control: 'text' },
	onPageChange: { action: 'onPageChange' },
	id: { control: 'text' }
};
