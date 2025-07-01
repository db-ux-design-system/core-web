import {
	ContainerWidthProps,
	GlobalProps,
	GlobalState,
	SpacingProps
} from '../../shared/model';

export type DBSectionDefaultProps = {};

export type DBSectionProps = DBSectionDefaultProps &
	GlobalProps &
	SpacingProps &
	ContainerWidthProps;

export type DBSectionDefaultState = {};

export type DBSectionState = DBSectionDefaultState & GlobalState;
