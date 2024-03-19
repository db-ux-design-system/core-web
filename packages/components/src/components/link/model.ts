import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	LinkProps
} from '../../shared/model';

export interface DBLinkDefaultProps {
	content?: 'external' | 'internal';
	id?: string;
	size?: 'medium' | 'small';
	variant?: 'adaptive' | 'primary' | 'inline';
}

export type DBLinkProps = DBLinkDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLAnchorElement> &
	LinkProps;

export interface DBLinkDefaultState {}

export type DBLinkState = DBLinkDefaultState &
	GlobalState &
	ClickEventState<HTMLAnchorElement>;
