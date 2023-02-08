import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBSectionDefaultProps {
	size?: 'small' | 'medium' | 'large' | 'none';
	variant?: 'medium' | 'large' | 'full';
}

export type DBSectionProps = DBSectionDefaultProps & GlobalProps;

export interface DBSectionDefaultState {}

export type DBSectionState = DBSectionDefaultState & GlobalState;
