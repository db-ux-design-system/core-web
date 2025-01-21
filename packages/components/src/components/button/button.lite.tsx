// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

export default function DBButton(props: DBButtonProps) {
	const ref = useRef<HTMLButtonElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBButtonState>({
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	// jscpd:ignore-end

	return (
		<button
			ref={ref}
			id={props.id}
			class={cls('db-button', props.className)}
			type={props.type || 'button'}
			disabled={props.disabled}
			aria-label={props.label}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}
			name={props.name}
			value={props.value}
			aria-describedby={props.describedbyid}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}
			onClick={(event: ClickEvent<HTMLButtonElement>) =>
				state.handleClick(event)
			}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</button>
	);
}
