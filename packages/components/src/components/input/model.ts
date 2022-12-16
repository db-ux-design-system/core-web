import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBInputDefaultProps {
	label: string;
	type?: string;
	variant?: 'error' | 'success' | 'warning';
	iconBefore?: string;
	iconAfter?: string;
	placeholder?: string;
	id?: string;
	disabled?: boolean;
	value?: any;
	description?: string;
	name?: string;
}

export const iconVariants:any = {
	'error': 'error',
	'warning': 'error-triangle',
	'success': 'check-circle'
}

export type DBInputProps = DBInputDefaultProps  & GlobalProps;

export interface DBInputDefaultState {}

export type DBInputState = DBInputDefaultState & GlobalState;
