import {
	EndSlotProps,
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBControlPanelBrandDefaultProps = {
	secondLine?: string;
};

export type DBControlPanelBrandProps = DBControlPanelBrandDefaultProps &
	GlobalProps &
	MaterialProps &
	EndSlotProps;

export type DBControlPanelBrandDefaultState = {};

export type DBControlPanelBrandState = DBControlPanelBrandDefaultState &
	GlobalState;
