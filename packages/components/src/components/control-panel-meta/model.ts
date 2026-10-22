import { GlobalProps, GlobalState, MaterialProps } from '../../shared/model';

export type DBControlPanelMetaDefaultProps = {};

export type DBControlPanelMetaProps = DBControlPanelMetaDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBControlPanelMetaDefaultState = {};

export type DBControlPanelMetaState = DBControlPanelMetaDefaultState &
	GlobalState;
