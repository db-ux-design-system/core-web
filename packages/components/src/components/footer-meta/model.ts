import type { GlobalProps, GlobalState } from '../../shared/model';

export type DBFooterMetaDefaultProps = {
	/**
	 * Optional copyright holder rendered before the secondary content.
	 * The component prepends the copyright symbol, so pass only the holder
	 * (and a year if needed), for example `2026 Example Company`.
	 */
	copyright?: string;
};

export type DBFooterMetaProps = DBFooterMetaDefaultProps & GlobalProps;

export type DBFooterMetaDefaultState = {};
export type DBFooterMetaState = DBFooterMetaDefaultState & GlobalState;
