// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBBadgeProps, DBBadgeState } from './model';
import { cls } from '../../utils';
import { DEFAULT_LABEL } from '../../shared/constants';

useMetadata({});

export default function DBBadge(props: DBBadgeProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const state = useStore<DBBadgeState>({
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			if (props.placement?.startsWith('corner')) {
				let parent = ref.parentElement;

				if (parent && parent.localName.includes('badge')) {
					// Angular workaround
					parent = parent.parentElement;
				}

				if (parent) {
					parent.setAttribute('data-has-badge', 'true');
				}
			}
		}
	}, [ref, state.initialized]);

	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-badge', props.className)}
			data-semantic={props.semantic}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}
			data-label={
				props.placement?.startsWith('corner') &&
				(props.label ?? DEFAULT_LABEL)
			}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</span>
	);
}
