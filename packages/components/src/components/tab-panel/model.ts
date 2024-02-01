import {
	ActiveProps,
	GlobalProps,
	GlobalState,
	TabProps
} from '../../shared/model';

export interface DBTabPanelDefaultProps {
	/**
	 * The content if you don't want to use children.
	 */
	content?: string;
}

export type DBTabPanelProps = DBTabPanelDefaultProps & GlobalProps & TabProps;

export interface DBTabPanelDefaultState {}

export type DBTabPanelState = DBTabPanelDefaultState & GlobalState;
