import type {
	GlobalProps,
	GlobalState,
	MaterialProps
} from '../../shared/model';

export type DBFooterContentDefaultProps = {};

export type DBFooterContentProps = DBFooterContentDefaultProps &
	GlobalProps &
	MaterialProps;

export type DBFooterContentDefaultState = {};
export type DBFooterContentState = DBFooterContentDefaultState & GlobalState;
