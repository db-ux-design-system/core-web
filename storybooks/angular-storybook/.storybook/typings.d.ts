declare module '*.md' {
	const content: string;
	export default content;
}

declare module '*.mdx' {
	const page: () => unknown;
	export default page;
}
