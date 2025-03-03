// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

export type ComponentParserType = {
	componentsString: string;
};

export type ComponentType = {
	index?: string | number;
	type?: /* Template hygen type */
	| 'stack'
		| 'switch'
		| 'tab-panel'
		| 'tabs'
		| 'tab-list'
		| 'tab'
		| 'tab-bar'
		| 'tooltip'
		| 'popover'
		| 'navigation'
		| 'accordion-item'
		| 'accordion'
		| 'textarea'
		| 'badge'
		| 'navigation-item'
		| 'tag'
		| 'select'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'p'
		| 'a'
		| 'div'
		| 'notification'
		| 'brand'
		| 'button'
		| 'checkbox'
		| 'card'
		| 'divider'
		| 'header'
		| 'icon'
		| 'infotext'
		| 'input'
		| 'radio'
		| 'link'
		| 'section'
		| string;
	content?: string | ComponentType[];
	props?: any;
	className?: string;
};
