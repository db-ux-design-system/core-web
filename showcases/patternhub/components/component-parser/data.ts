export type ComponentParserType = {
	componentsString: string;
};

export type ComponentType = {
	index?: string | number;
	type?: /* hygen type */
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
		| 'alert'
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
