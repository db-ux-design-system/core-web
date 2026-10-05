import type { InputType } from 'storybook/internal/csf';

import { AlignmentList } from '../../../shared/model';
import { ParagraphFontWeightList, ParagraphSizeList } from '../model';

export const StorybookParagraphArgTypes: Record<string, InputType> = {
	size: { control: 'select', options: [...ParagraphSizeList] },
	fontWeight: { control: 'select', options: [...ParagraphFontWeightList] },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

export const StorybookTextGroupArgTypes: Record<string, InputType> = {
	alignment: { control: 'select', options: [...AlignmentList] },
	textSpacing: { control: 'boolean' },
	className: { control: 'text' },
	id: { control: 'text' }
};
