import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';

export type DBTabPanelDefaultProps = {
	/**
	 * The content if you don't want to use children.
	 */
	content?: string;
	/**
	 * If the panel is hidden.
	 */
	hidden?: boolean;
};

export type DBTabPanelProps = DBTabPanelDefaultProps & GlobalProps;

export interface DBTabPanelState extends GlobalState, InitializedState {
	internalHidden: boolean | undefined;
	_observer: MutationObserver | null | undefined;
}
