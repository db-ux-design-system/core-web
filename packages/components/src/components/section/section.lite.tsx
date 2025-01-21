// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { onMount, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBSectionProps, DBSectionState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

export default function DBSection(props: DBSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
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
			ref={ref}
			id={state._id}
			class={cls('db-section', props.className)}
			data-spacing={props.spacing || 'medium'}
			data-width={props.width}>
			{props.children}
		</section>
	);
}
