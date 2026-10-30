import { For, useMetadata } from '@builder.io/mitosis';
import {
	ColorList,
	type ColorType,
	TextMaterialList,
	type TextMaterialType
} from '../../../shared/model';
import DBInfotext from '../infotext.lite';
import { StorybookInfotextArgTypes } from './_infotext.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	// Loop-rendered matrix: no single reference instance -> skip Storybook story.
	storybookSkip: true,
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookInfotextArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Only visible while adaptive coloring is active (hidden via
 * `.adaptive-matrix` in showcase-styles.css), so it documents the adaptive
 * system without polluting the legacy view/screenshots.
 */
export default function InfotextAdaptiveMatrix() {
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
				<For each={TextMaterialList}>
					{(material: TextMaterialType) => (
						<tr key={`row-${material}`}>
							<th scope="row">{material}</th>
							<For each={ColorList} key={`cells-${material}`}>
								{(color: ColorType) => (
									<td>
										<DBInfotext
											color={color}
											material={material}>
											{color}
										</DBInfotext>
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
