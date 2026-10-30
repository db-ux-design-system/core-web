import { For, useMetadata } from '@builder.io/mitosis';
import { fn } from '../../../shared/examples';
import {
	ColorList,
	type ColorType,
	MaterialList,
	type MaterialType
} from '../../../shared/model';
import { uuid } from '../../../utils';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	// Loop-rendered matrix: no single reference instance -> skip Storybook story.
	storybookSkip: true,
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookButtonArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Only visible while adaptive coloring is active (hidden via
 * `.adaptive-matrix` in showcase-styles.css), so it documents the adaptive
 * system without polluting the legacy view/screenshots.
 */
export default function ButtonAdaptiveMatrix() {
	return (
		<table class="adaptive-matrix">
			<thead>
				<tr>
					<th scope="col"></th>
					<For each={ColorList}>
						{(color: ColorType) => (
							<th key={`head-${color}`} scope="col">
								{color}
							</th>
						)}
					</For>
				</tr>
			</thead>
			<tbody>
				<For each={MaterialList}>
					{(material: MaterialType) => (
						<tr key={`row-${material}`}>
							<th scope="row">{material}</th>
							<For each={ColorList}>
								{(color: ColorType) => (
									<td
										key={useTarget({
											angular: uuid(),
											default: `cell-${material}-${color}`
										})}>
										<DBButton
											onClick={fn}
											color={color}
											material={material}>
											{color}
										</DBButton>
									</td>
								)}
							</For>
						</tr>
					)}
				</For>
			</tbody>
		</table>
	);
}
