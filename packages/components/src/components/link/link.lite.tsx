// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBLinkProps, DBLinkState } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: false
});

export default function DBLink(props: DBLinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBLinkState>({
		_id: DEFAULT_ID,
		handleClick: (event: ClickEvent<HTMLAnchorElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	// jscpd:ignore-end

	return (
		<a
			ref={ref}
			id={props.id}
			class={cls('db-link', props.className)}
			href={props.href}
			target={props.target}
			rel={props.rel}
			role={props.role}
			hrefLang={props.hreflang}
			aria-disabled={getBooleanAsString(props.disabled)}
			tabIndex={props.disabled ? -1 : 0}
			aria-selected={props.selected}
			aria-label={props.label}
			aria-current={props.current}
			data-size={props.size}
			data-hide-icon-after={getHideProp(props.showIcon ?? true)}
			data-variant={props.variant}
			data-content={props.content || 'internal'}
			onClick={(event: ClickEvent<HTMLAnchorElement>) =>
				state.handleClick(event)
			}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</a>
	);
}
