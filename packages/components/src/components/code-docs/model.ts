import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBCodeDocsDefaultProps {
	showCodeLabel?: string;
	hideCodeLabel?: string;

	code?: any;
}

export type DBCodeDocsProps = DBCodeDocsDefaultProps & GlobalProps;

export interface DBCodeDocsDefaultState {
	open?: boolean;
	toggleCode?: () => void;
	getShowButtonLabel?: () => string;
}

export type DBCodeDocsState = DBCodeDocsDefaultState & GlobalState;
