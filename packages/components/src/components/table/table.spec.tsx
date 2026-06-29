import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/experimental-ct-react';

import {DBTable} from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import {DEFAULT_VIEWPORT} from '../../shared/constants.ts';
import {DBTableBody} from '../table-body';
import {DBTableDataCell} from '../table-data-cell';
import {DBTableHead} from '../table-head';
import {DBTableHeaderCell} from '../table-header-cell';
import {DBTableRow} from '../table-row';

const comp: any = (
	<DBTable captionPlain="Test">
		<DBTableHead>
			<DBTableRow>
				<DBTableHeaderCell scope="col">Header</DBTableHeaderCell>
			</DBTableRow>
		</DBTableHead>
		<DBTableBody>
			<DBTableRow>
				<DBTableDataCell>Test</DBTableDataCell>
			</DBTableRow>
		</DBTableBody>
	</DBTable>
);

const testComponent = () => {
	test('should contain text', async ({mount}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({mount}) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should not have any A11y issues', async ({page, mount}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({page})
			.include('.db-table')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBTable', () => {
	test.use({viewport: DEFAULT_VIEWPORT});
	testComponent();
	testA11y();
});
