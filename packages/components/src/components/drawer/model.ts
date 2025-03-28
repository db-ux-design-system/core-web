// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	CloseEventProps,
	CloseEventState,
	GlobalProps,
	GlobalState,
	InnerCloseButtonProps,
	SpacingProps,
	WidthProps
} from '../../shared/model';

export const DrawerBackdropList = [
	'none',
	'strong',
	'weak',
	'invisible'
] as const;
export type DrawerBackdropType = (typeof DrawerBackdropList)[number];

export const DrawerDirectionList = ['left', 'right', 'up', 'down'] as const;
export type DrawerDirectionType = (typeof DrawerDirectionList)[number];

export const DrawerVariantList = ['modal', 'inside'] as const;
export type DrawerVariantType = (typeof DrawerVariantList)[number];

export type DBDrawerDefaultProps = {
	/**
	 * The backdrop attribute changes the opacity of the backdrop.
	 * The backdrop 'none' will use `dialog.show()` instead of `dialog.showModal()`
	 */
	backdrop?: DrawerBackdropType;
	/**
	 * The direction attribute changes the position & animation of the drawer.
	 * E.g. "left" slides from left screen border to the right.
	 */
	direction?: DrawerDirectionType;

	/**
	 * Slot for changing the header of the drawer.
	 */
	drawerHeader?: any;

	/**
	 * The open attribute opens or closes the drawer based on the state.
	 */
	open?: boolean;
	/**
	 * The rounded attribute changes the border radius of the corners on the "end" of the drawer.
	 * The "end" depends on which direction you use.
	 */
	rounded?: boolean;
	/**
	 * Set the variant modal|inside. Defaults to modal.
	 */
	variant?: DrawerVariantType;
};

export type DBDrawerProps = DBDrawerDefaultProps &
	GlobalProps &
	CloseEventProps &
	InnerCloseButtonProps &
	WidthProps &
	SpacingProps;

export type DBDrawerDefaultState = {
	handleDialogOpen: () => void;
};

export type DBDrawerState = DBDrawerDefaultState &
	GlobalState &
	CloseEventState;
