import { For, useMetadata, useTarget } from '@builder.io/mitosis';
import {
	ColorList,
	type ColorType,
	MaterialList,
	type MaterialType
} from '../../../shared/model';
import { uuid } from '../../../utils';
import DBCustomButton from '../custom-button.lite';
import { StorybookCustomButtonArgTypes } from './_custom-button.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	// Loop-rendered matrix: no single reference instance -> skip Storybook story.
	storybookSkip: true,
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookCustomButtonArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Only visible while adaptive coloring is active (hidden via
 * `.adaptive-matrix` in showcase-styles.css), so it documents the adaptive
 * system without polluting the legacy view/screenshots.
 *
 * custom-button is a styling wrapper, so it renders two matrices: one wrapping a
 * plain text label, and one wrapping a checkbox input to show how the wrapper
 * styles an interactive form control across every color x material combination.
 */
export default function CustomButtonAdaptiveMatrix() {
	return (
		<div class="adaptive-matrix-group">
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
											<DBCustomButton
												color={color}
												material={material}>
												{color}
											</DBCustomButton>
										</td>
									)}
								</For>
							</tr>
						)}
					</For>
				</tbody>
			</table>
			<table class="adaptive-matrix">
				<thead>
					<tr>
						<th scope="col"></th>
						<For each={ColorList}>
							{(color: ColorType) => (
								<th key={`check-head-${color}`} scope="col">
									{color}
								</th>
							)}
						</For>
					</tr>
				</thead>
				<tbody>
					<For each={MaterialList}>
						{(material: MaterialType) => (
							<tr key={`check-row-${material}`}>
								<th scope="row">{material}</th>
								<For each={ColorList}>
									{(color: ColorType) => (
										<td
											key={useTarget({
												angular: uuid(),
												default: `check-cell-${material}-${color}`
											})}>
											<DBCustomButton
												color={color}
												material={material}>
												<label>
													<input
														type="checkbox"
														checked
													/>
													{color}
												</label>
											</DBCustomButton>
										</td>
									)}
								</For>
							</tr>
						)}
					</For>
				</tbody>
			</table>
		</div>
	);
}
