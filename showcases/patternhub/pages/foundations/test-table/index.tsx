import { DBInfotext } from '@db-ux/react-core-components/src';
import AccessibilityReviewInfo from '../../../components/accessibility-review-info/accessibility-review-info'; // This file will be generated at runtime
import DefaultPage from '../../../components/default-page';
import { testTableData } from '../../../data/testing-table'; // This file will be generated at runtime by /showcases/patternhub/scripts/generate-test-table.js

const tableHeaders = [
	{
		label: 'Component'
	},
	{
		label: 'Single Component: Visuals',
		href: 'https://playwright.dev/docs/screenshots'
	},
	{
		label: 'Single Component: A11y (Axe)',
		href: 'https://github.com/dequelabs/axe-core'
	},
	{
		label: 'Showcase: Visuals',
		href: 'https://playwright.dev/docs/screenshots'
	},
	{
		label: 'Showcase: A11y (Axe)',
		href: 'https://github.com/dequelabs/axe-core'
	},
	{
		label: 'Showcase: A11y (Aria snapshots)',
		href: 'https://playwright.dev/docs/aria-snapshots#aria-snapshots'
	},
	{
		label: 'Showcase: A11y (Accessibility-Checker)',
		href: 'https://github.com/IBMa/equal-access'
	},
	{
		label: 'Showcase: A11y (Screen-Reader)',
		href: 'https://github.com/guidepup/guidepup'
	},
	{
		label: 'Manual audit conducted by accessibility experts'
	},
	{
		label: 'Testing stable'
	}
];

const TestTable = () => {
	return (
		<DefaultPage>
			<table>
				<thead>
					<tr>
						{tableHeaders.map((header) => (
							<th key={header.label}>
								{header.href ? (
									<a
										href={header.href}
										target="_blank"
										referrerPolicy="no-referrer">
										{header.label}
									</a>
								) : (
									header.label
								)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{testTableData.map(
						({
							name,
							singleComponentVisuals,
							singleComponentAxe,
							showcaseVisuals,
							showcaseAxe,
							showcaseAria,
							showcaseAC,
							showcaseGP,
							accessibilityReview
						}) => {
							const stable =
								singleComponentVisuals &&
								singleComponentAxe &&
								showcaseVisuals &&
								showcaseAxe &&
								showcaseAria &&
								showcaseAC &&
								showcaseGP &&
								accessibilityReview?.status === 'DONE';
							return (
								<tr key={name}>
									<td>{name}</td>
									{[
										singleComponentVisuals,
										singleComponentAxe,
										showcaseVisuals,
										showcaseAxe,
										showcaseAria,
										showcaseAC,
										showcaseGP
									].map((status, index) => (
										<td key={`${name}-${index}`}>
											<DBInfotext
												semantic={
													status
														? 'successful'
														: 'critical'
												}>
												{status ? 'Done' : 'Missing'}
											</DBInfotext>
										</td>
									))}
									<td>
										<AccessibilityReviewInfo
											{...accessibilityReview}
										/>
									</td>
									<td>
										<DBInfotext
											semantic={
												stable
													? 'successful'
													: 'critical'
											}>
											{stable ? 'Done 🎉' : 'Missing'}
										</DBInfotext>
									</td>
								</tr>
							);
						}
					)}
				</tbody>
			</table>
		</DefaultPage>
	);
};

export default TestTable;
