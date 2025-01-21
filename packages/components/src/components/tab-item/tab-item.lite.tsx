// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import type { DBTabItemProps, DBTabItemState } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import { ChangeEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

export default function DBTabItem(props: DBTabItemProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		initialized: false,
		_selected: false,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// We have different ts types in different frameworks, so we need to use any here

			useTarget({
				stencil: () => {
					const selected = (event.target as any)?.['checked'];
					state._selected = getBooleanAsString(selected);
				},
				default: () => {
					state._selected = (event.target as any)?.['checked'];
				}
			});

			useTarget({
				angular: () => handleFrameworkEvent(this, event, 'checked'),
				vue: () => handleFrameworkEvent(this, event, 'checked')
			});
		}
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.active && state.initialized && ref) {
			ref.click();
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<li class={cls('db-tab-item', props.className)} role="none">
			<label
				htmlFor={props.id}
				data-icon={props.icon}
				data-icon-after={props.iconAfter}
				data-hide-icon={getHideProp(props.showIcon)}
				data-hide-icon-after={getHideProp(props.showIcon)}
				data-no-text={props.noText}>
				<input
					disabled={props.disabled}
					aria-selected={state._selected}
					aria-controls={props.controls}
					checked={props.checked}
					ref={ref}
					type="radio"
					role="tab"
					id={props.id}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						state.handleChange(event)
					}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
