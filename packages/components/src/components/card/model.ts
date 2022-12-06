import { GlobalProps, GlobalState } from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	variant?: string;
};

export type DBCardProps = DBCardDefaultProps & GlobalProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState;
