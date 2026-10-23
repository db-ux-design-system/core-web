import type {
	ContainerWidthProps,
	GlobalProps,
	MaterialProps,
	SpacingProps
} from '../../shared/model';

export type DBSectionDefaultProps = {};

export type DBSectionProps = DBSectionDefaultProps &
	GlobalProps &
	MaterialProps &
	SpacingProps &
	ContainerWidthProps;
