import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabListDefaultProps = {
	/**
	 * Defines a string value that labels the current element (WAI-ARIA).
	 */
	ariaLabel?: string;

	/**
	 * Identifies the element (or elements) that labels the current element (WAI-ARIA).
	 */
	ariaLabelledby?: string;
};

export type DBTabListProps = DBTabListDefaultProps & GlobalProps;

export interface DBTabListState extends GlobalState {
	_id?: string;
}
