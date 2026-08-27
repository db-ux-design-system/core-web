export type ComponentParserType = {
	componentsString: string;
};

export type ComponentType = {
	index?: string | number;
	type?:
		/* Template hygen type */
		| 'heading-h1'
		| 'heading-h2'
		| 'heading-h3'
		| 'heading-h4'
		| 'heading-h5'
		| 'heading-h6'
		| 'custom-heading'
		| 'custom-button'
		| 'table'
		| 'stack'
		| 'switch'
		| 'custom-select'
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
