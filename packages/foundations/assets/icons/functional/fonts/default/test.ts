import * as fs from 'fs/promises';
import * as xml2js from 'xml2js';
import { glob } from 'glob';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const inputFilePath = 'db-ux.woff2';
const ttxFilePath = 'db-ux.ttx';
const outputFilePath = 'db-ux#clean.ttx';
const namesToRemove = ['airplane', 'alarm_clock', 'alarm_clock_plus']; // Add the names you want to remove

const processFile = async () => {
	try {
		const data = await fs.readFile(ttxFilePath, 'utf8');
		const result = await xml2js.parseStringPromise(data);

		if (result && result.ttFont) {
			const nameFilter = {
				GlyphOrder: 'GlyphID',
				hmtx: 'mtx',
				glyf: 'TTGlyph',
				post: 'psName'
			};

			for (const [key, value] of Object.entries(nameFilter)) {
				let xmlGroup = result.ttFont[key]?.[0];
				if (key === 'post') {
					xmlGroup = result.ttFont[key]?.[0]?.extraNames?.[0];
				}
				if (xmlGroup && xmlGroup[value]) {
					xmlGroup[value] = xmlGroup[value].filter(
						(entry: any) => !namesToRemove.includes(entry.$.name)
					);
				}
			}

			// Remove Ligature elements
			if (
				result.ttFont.GSUB &&
				result.ttFont.GSUB[0].LookupList &&
				result.ttFont.GSUB[0].LookupList[0].Lookup
			) {
				for (const lookup of result.ttFont.GSUB[0].LookupList[0]
					.Lookup) {
					if (
						lookup.LigatureSubst &&
						lookup.LigatureSubst[0].LigatureSet
					) {
						for (const ligatureSet of lookup.LigatureSubst[0]
							.LigatureSet) {
							if (ligatureSet.Ligature) {
								ligatureSet.Ligature =
									ligatureSet.Ligature.filter(
										(ligature: any) =>
											!namesToRemove.includes(
												ligature.$.glyph
											)
									);
							}
						}
					}
				}
			}
		}

		const builder = new xml2js.Builder();
		const xml = builder.buildObject(result);

		await fs.writeFile(outputFilePath, xml);
		console.log('File successfully written to', outputFilePath);
	} catch (err) {
		console.error('Error:', err);
	}
};

const runTTX = async (compile?: boolean) => {
	try {
		await execAsync('ttx -h');
	} catch (e) {
		console.warn(
			'You need to install ttx. Check https://fonttools.readthedocs.io/en/stable/index.html for more information.'
		);
	}

	try {
		const files = await glob(inputFilePath);
		const commands = files.map((file) =>
			compile
				? ['ttx', outputFilePath, '--flavor=woff2'].join(' ')
				: ['ttx', file, '-o', ttxFilePath].join(' ')
		);

		for (const command of commands) {
			const { stdout, stderr } = await execAsync(command);
			if (stdout) console.log(`stdout: ${stdout}`);
			if (stderr) console.error(`stderr: ${stderr}`);
		}
	} catch (error) {
		console.error(`Error: ${error.message}`);
	}
};

const runAll = async () => {
	await runTTX();
	await processFile();
	await runTTX(true);
};

void runAll();
