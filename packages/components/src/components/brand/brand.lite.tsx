// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getHideProp } from '../../utils';
import { DBBrandProps, DBBrandState } from './model';
import { DEFAULT_ICON } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBBrandProps>({});

export default function DBBrand(props: DBBrandProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBBrandState>({});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			data-icon={props.hideLogo ? 'none' : (props.icon ?? DEFAULT_ICON)}
			data-hide-icon={getHideProp(props.showIcon)}
			id={props.id}
			class={cls('db-brand', props.className)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</div>
	);
}
