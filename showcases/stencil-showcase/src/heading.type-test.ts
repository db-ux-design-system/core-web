import type { JSX } from '@db-ux/wc-core-components';

export const validHeadingProps: JSX.DbHeading = { as: 'h1' };

// @ts-expect-error -- DBHeading requires an explicit semantic level in typed usage.
export const missingHeadingAs: JSX.DbHeading = {};
