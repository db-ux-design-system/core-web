export type FigmaInstanceProp = {
	type: 'instance';
	key: string;
};

export type FigmaEnumProp = {
	type: 'enum';
	key: string;
	value: Record<string, string | boolean | number | FigmaInstanceProp>;
};

export type FigmaSimpleProp = {
	type: 'string' | 'boolean' | 'children' | 'textContent';
	key: string;
};

export type FigmaProp = FigmaEnumProp | FigmaInstanceProp | FigmaSimpleProp;

export type FigmaCodeConnect = {
	urls: string[];
	props: Record<string, FigmaProp>;
};
