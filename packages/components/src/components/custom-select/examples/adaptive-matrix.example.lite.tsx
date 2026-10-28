import { For, useMetadata } from '@builder.io/mitosis';
import {
	ColorList,
	type ColorType,
	MaterialList,
	type MaterialType
} from '../../../shared/model';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Only visible while adaptive coloring is active (hidden via
 * `.adaptive-matrix` in showcase-styles.css), so it documents the adaptive
 * system without polluting the legacy view/screenshots.
 */
export default function CustomSelectAdaptiveMatrix() {
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
										<DBCustomSelect
											color={color}
											material={material}
											label={color}
											placeholder={color}
											listLabel={`${material}-${color}`}
											options={[
												{
													value: 'Option 1',
													id: `${material}-${color}-1`
												},
												{
													value: 'Option 2',
													id: `${material}-${color}-2`
												},
												{
													value: 'Option 3',
													id: `${material}-${color}-3`
												}
											]}
										/>
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
