import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBSectionDefaultProps {
	/**
	 * The size attribute changes the `padding-block` (former `padding-top` and `padding-bottom`) of the container inside the section.
	 */
	size?: 'small' | 'medium' | 'large' | 'none';

	/**
	 * The variant attribute changes the `padding-inline` (former `padding-left` and `padding-right`) of the container inside the section.
	 */
	variant?: 'medium' | 'large' | 'full';
}

export type DBSectionProps = DBSectionDefaultProps & GlobalProps;

export interface DBSectionDefaultState {}

export type DBSectionState = DBSectionDefaultState & GlobalState;
