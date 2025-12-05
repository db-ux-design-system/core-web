import {
	ContainerWidthProps,
	GlobalProps,
	SpacingProps
} from '../../shared/model';

export type DBSectionDefaultProps = {};

export type DBSectionProps = DBSectionDefaultProps &
	GlobalProps &
	SpacingProps &
	ContainerWidthProps;
