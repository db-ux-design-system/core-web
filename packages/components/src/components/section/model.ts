import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export interface DBSectionDefaultProps {}

export type DBSectionProps = DBSectionDefaultProps &
	GlobalProps &
	SpacingProps &
	ContainerWidthProps;

export interface DBSectionDefaultState {}

export type DBSectionState = DBSectionDefaultState & GlobalState;
