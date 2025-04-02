// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	onMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSectionProps, DBSectionState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});
useDefaultProps<DBSectionProps>({});

export default function DBSection(props: DBSectionProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBSectionState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'section-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<section
			ref={_ref}
			id={state._id}
			class={cls('db-section', props.className)}
			data-spacing={props.spacing || 'medium'}
			data-width={props.width}>
			{props.children}
		</section>
	);
}
