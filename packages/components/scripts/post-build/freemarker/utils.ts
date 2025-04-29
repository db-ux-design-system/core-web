import { MitosisNode } from '@builder.io/mitosis';

export const outputFolder = 'output';
export const freemarkerDirPath = `../../${outputFolder}/freemarker`;
export const freemarkerComponentsDirPath = `${freemarkerDirPath}/components`;

export const findAllSlots = (nodes: MitosisNode[]): string[] => {
	const result: string[] = [];

	const traverse = (currentNode: MitosisNode) => {
		if (currentNode.name === 'Slot' && currentNode.properties.name) {
			result.push(currentNode.properties.name);
		}
		if (currentNode.children) {
			currentNode.children.forEach(traverse);
			if (currentNode.meta.else) {
				traverse(currentNode.meta.else as MitosisNode);
			}
		}
	};

	for (const node of nodes) {
		traverse(node);
	}
	return result;
};

export const getRootProps = (props?: string[]) => {
	return props?.length
		? `
			<#if !props?is_sequence>
				<#list props as k, v>
					\${k} = \${v}
				</#list>
			</#if>`
		: '';
};

export const isEvent = (prop: string): boolean =>
	prop.length > 2 &&
	prop.startsWith('on') &&
	prop[2] === prop[2].toUpperCase();
