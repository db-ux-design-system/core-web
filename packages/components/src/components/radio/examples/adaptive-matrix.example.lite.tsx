import { For, useMetadata } from '@builder.io/mitosis';
import {
	ColorList,
	type ColorType,
	MaterialList,
	type MaterialType
} from '../../../shared/model';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookRadioArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Shown checked so the alt-state coloring is visible. Only
 * visible while adaptive coloring is active (hidden via `.adaptive-matrix` in
 * showcase-styles.css), so it documents the adaptive system without polluting
 * the legacy view/screenshots.
 */
export default function RadioAdaptiveMatrix() {
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
									<td key={`cell-${material}-${color}`}>
										<DBRadio
											color={color}
											material={material}
											checked
											name={`adaptive-matrix-${material}`}>
											{color}
										</DBRadio>
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
