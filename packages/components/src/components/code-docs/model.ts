import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBCodeDocsDefaultProps {
	codeSnippets?: any[];
	noCodeLabel?: string;
	showCodeLabel?: string;
	hideCodeLabel?: string;
	copyLabel?: string;
}

export type DBCodeDocsProps = DBCodeDocsDefaultProps & GlobalProps;

export interface DBCodeDocsDefaultState {
	open?: boolean;
	toggleCode?: () => void;
	copyCode?: (code: string) => void;
	getShowButtonLabel?: () => string;
	getSnippetId?: () => string;
}

export type DBCodeDocsState = DBCodeDocsDefaultState & GlobalState;
