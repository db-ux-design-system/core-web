/**
 * Prüft, ob `guidelines.md` und `documentation.json` jeder Komponente deckungsgleich sind:
 * jede Regel unter `## Regeln` hat genau einen Eintrag in `guidelines[]`, jeder
 * `_(Example-Kandidat)_` genau einen Eintrag in `examples[]`.
 *
 * Aufruf: node packages/agent-cli/knowledge-database/scripts/check-guidelines-sync.mjs
 *
 * Exit-Code 1, wenn mindestens eine Komponente abweicht.
 *
 * @public
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const componentsDir = join(root, 'components');
/** Sammelt jeden Ordner, der eine `guidelines.md` enthält. */
const collect = (dir, found = []) => {
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (!statSync(path).isDirectory()) continue;
		if (existsSync(join(path, 'guidelines.md'))) found.push(path);
		collect(path, found);
	}
	return found;
};
const countRules = (markdown) =>
	markdown.split('\n').filter((line) => /^\d+\.\s/.test(line)).length;
const countCandidates = (markdown) =>
	markdown.split('\n').filter((line) => line.includes('_(Example-Kandidat)_'))
		.length;
let deviations = 0;
let checked = 0;
for (const dir of collect(componentsDir)) {
	const docPath = join(dir, 'documentation.json');
	if (!existsSync(docPath)) continue;
	const name = relative(componentsDir, dir);
	const markdown = readFileSync(join(dir, 'guidelines.md'), 'utf8');
	const rules = countRules(markdown);
	const candidates = countCandidates(markdown);
	let doc;
	try {
		doc = JSON.parse(readFileSync(docPath, 'utf8'));
	} catch (error) {
		console.error(
			`FEHLER      ${name}: documentation.json ist kein valides JSON (${error.message})`
		);
		deviations++;
		continue;
	}
	checked++;
	const guidelines = doc.guidelines?.length ?? 0;
	const examples = doc.examples?.length ?? 0;
	const problems = [];
	if (rules !== guidelines)
		problems.push(`Regeln ${rules} / guidelines[] ${guidelines}`);
	if (candidates !== examples)
		problems.push(`Kandidaten ${candidates} / examples[] ${examples}`);
	if (problems.length > 0) {
		deviations++;
		console.error(`ABWEICHUNG  ${name}: ${problems.join(', ')}`);
	}
}
if (deviations === 0) {
	console.log(`${checked} Komponenten geprüft, alle deckungsgleich.`);
} else {
	console.error(`\n${deviations} von ${checked} Komponenten weichen ab.`);
	process.exit(1);
}
