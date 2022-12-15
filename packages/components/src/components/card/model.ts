import { GlobalProps, GlobalState } from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	variant?: 'w-full' | 'ia';
};

export type DBCardProps = DBCardDefaultProps & GlobalProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState;
