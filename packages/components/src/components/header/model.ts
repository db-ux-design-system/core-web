import { GlobalProps, GlobalState } from '../../shared/model';
import * as React from 'react';

export interface DBHeaderDefaultProps {
	slotBrand?: any;
	slotDesktopNavigation?: any;
	slotMobileNavigation?: any;
	slotMetaNavigation?: any;
}

export type DBHeaderProps = DBHeaderDefaultProps & GlobalProps;

export interface DBHeaderDefaultState {}

export type DBHeaderState = DBHeaderDefaultState & GlobalState;
