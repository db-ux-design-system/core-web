import { GlobalProps, GlobalState } from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	direction?: 'row' | 'column';
	imgAlt?: string;
	imgSrc?: string;
	imgHeight?: number | string;
	imgWidth?: number | string;
	variant?: 'full-width' | 'ia';
};

export type DBCardProps = DBCardDefaultProps & GlobalProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState & GlobalState;
