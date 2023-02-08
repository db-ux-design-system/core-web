import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBLinkDefaultProps {
	content?: 'external' | 'internal';
	current?:
		| boolean
		| 'time'
		| 'true'
		| 'false'
		| 'date'
		| 'page'
		| 'step'
		| 'location'
		| undefined;
	disabled?: boolean;
	href?: string;
	hreflang?: string;
	id?: string;
	label?: string;
	rel?: string;
	role?: string;
	referrerpolicy?:
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';
	selected?: boolean;
	size?: string;
	target?: '_self' | '_blank' | '_parent' | '_top';
	title?: string;
	variant?: string;
}

export type DBLinkProps = DBLinkDefaultProps & GlobalProps & ClickEventProps;

export interface DBLinkDefaultState {}

export type DBLinkState = DBLinkDefaultState & GlobalState & ClickEventState;
