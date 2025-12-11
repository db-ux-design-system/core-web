import { GlobalProps, GlobalState } from '../../shared/model';

export type DBTabListDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the div element, generated automatically as a fallback if unset.
	 */
	divid?: string;
};

export type DBTabListProps = DBTabListDefaultProps & Omit<GlobalProps, 'id'>;

export type DBTabListDefaultState = {};

export type DBTabListState = DBTabListDefaultState & GlobalState;
