import { EndSlotProps, GlobalProps, GlobalState } from '../../shared/model';

export type DBControlPanelBrandDefaultProps = {
	secondLine?: string;
};

export type DBControlPanelBrandProps = DBControlPanelBrandDefaultProps &
	GlobalProps &
	EndSlotProps;

export type DBControlPanelBrandDefaultState = {};

export type DBControlPanelBrandState = DBControlPanelBrandDefaultState &
	GlobalState;
