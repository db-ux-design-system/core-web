import { getTest, isWin, testDefault } from '../default';

const test = getTest();

test.describe('DBBadge', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/06/badge?page=placement',
		async testFn(screenReader) {
			if (isWin()) {
				await screenReader.next();
			}

			await screenReader.clearSpokenPhraseLog();
			await screenReader.previous(); // Badge inline
			await screenReader.next(); // Badge red
			await screenReader.next(); // Button with badge with data-label 1
			await screenReader.next(); // Info-text
			await screenReader.next(); // Button with badge with data-label 2
		}
	});
});
