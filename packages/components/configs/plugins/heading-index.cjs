const normalizeHeadingIndex = (targetContext, files) => {
	if (!files || !['angular', 'stencil'].includes(targetContext.target))
		return;
	const fs = require('node:fs');
	const path = require('node:path');
	const indexFile = files.nonComponentFiles.find((file) =>
		/components\/heading\/index\.ts$/.test(file.outputFilePath)
	);
	if (!indexFile) {
		const hasHeadingBatch = files.componentFiles.some((file) =>
			/components\/heading\/(?:figma\/heading\.figma\.batch|examples\/.+\.stories)\.(?:ts|tsx)$/.test(
				file.outputFilePath
			)
		);
		if (hasHeadingBatch) return;
		throw new Error(
			'Static Heading index transform failed: generated index not found'
		);
	}

	const filePath = path.resolve(
		indexFile.outputDir,
		indexFile.outputFilePath
	);
	const source = fs.readFileSync(filePath, 'utf-8');
	const matches = source.match(/default as DBHeadingH[1-6]/g) ?? [];
	if (matches.length !== 6) {
		throw new Error(
			`Static Heading index transform failed: expected 6 exports, found ${matches.length}`
		);
	}
	fs.writeFileSync(
		filePath,
		source.replace(/default as (DBHeadingH[1-6])/g, '$1'),
		'utf-8'
	);
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	name: 'heading-index',
	build: { post: normalizeHeadingIndex }
});

module.exports.normalizeHeadingIndex = normalizeHeadingIndex;
