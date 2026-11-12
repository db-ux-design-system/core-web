import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export const ParagraphSizeList = ['lg', 'md', 'sm'] as const;
export type ParagraphSizeType = (typeof ParagraphSizeList)[number];

export type DBParagraphDefaultProps = {
	/** Sets the visual size. Omitting it inherits, which is `md` in a default context. */
	size?: ParagraphSizeType;
};
export type DBParagraphProps = DBParagraphDefaultProps &
	GlobalProps &
	Pick<MaterialProps, 'color'>;

export type DBParagraphDefaultState = {};
export type DBParagraphState = DBParagraphDefaultState & GlobalState;
