import type { GlobalProps, GlobalState } from '../../shared/model';

export type DBFooterMetaDefaultProps = {
	/**
	 * Optional copyright text rendered before the secondary content.
	 */
	copyright?: string;
};

export type DBFooterMetaProps = DBFooterMetaDefaultProps & GlobalProps;

export type DBFooterMetaDefaultState = {};
export type DBFooterMetaState = DBFooterMetaDefaultState & GlobalState;
