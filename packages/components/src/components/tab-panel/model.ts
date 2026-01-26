import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabPanelDefaultProps = {
	/**
	 * The content if you don't want to use children.
	 */
	content?: string;
	/**
	 * If the panel is hidden.
	 */
	hidden?: boolean;
	/**
	 * The id of the tab that labels this panel (WAI-ARIA).
	 */
	ariaLabelledby?: string;
};

export type DBTabPanelProps = DBTabPanelDefaultProps & GlobalProps;

export interface DBTabPanelState extends GlobalState {}
