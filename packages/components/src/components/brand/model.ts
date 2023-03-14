import { GlobalProps, GlobalState, ImageProps } from '../../shared/model';

export interface DBBrandDefaultProps {
	/**
	 * The anchorChildren attribute can be set to warp children inside the 'a' tag.
	 */
	anchorChildren?: boolean;
	/**
	 * The href attribute can be set to reload the current application, in general you would go to the base path of your app.
	 */
	anchorRef?: string;

	/**
	 * The title attribute can be set to show a hint while hovering over the brand.
	 */
	anchorTitle?: string;

	/**
	 * The rel attribute can be set to make a relationship to the current URL (https://developer.mozilla.org/en-US/docs/web/api/htmlanchorelement/rel).
	 */
	anchorRelation?: string;

	/**
	 * Hides the default image with an asset path to be able to add a custom image inside the children.
	 * Use this if you know what you do.
	 */
	hideDefaultAsset?: any;
}

export type DBBrandProps = DBBrandDefaultProps & GlobalProps & ImageProps;

export interface DBBrandDefaultState {}

export type DBBrandState = DBBrandDefaultState & GlobalState;
