import { GlobalProps, GlobalState } from '../../shared/model';

export type DBNavigationDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the nav element, generated automatically as a fallback if unset.
	 */
	idNav?: string;
};

export type DBNavigationProps = DBNavigationDefaultProps &
	Omit<GlobalProps, 'id'>;

export type DBNavigationDefaultState = {};

export type DBNavigationState = DBNavigationDefaultState & GlobalState;
