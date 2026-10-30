import { For, useMetadata } from '@builder.io/mitosis';
import {
	ColorList,
	type ColorType,
	MaterialList,
	type MaterialType
} from '../../../shared/model';
import { uuid } from '../../../utils';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Adaptive Matrix',
	// The matrix renders every color x material via loops, so there is no single
	// reference instance for Storybook to derive args from - skip story generation.
	storybookSkip: true,
	storybookNames: ['(Default) Adaptive Matrix'],
	storybookArgTypes: StorybookBadgeArgTypes
});

/*
 * Full matrix of every adaptive color x material combination (rows = material,
 * columns = color). Only visible while adaptive coloring is active (hidden via
 * `.adaptive-matrix` in showcase-styles.css), so it documents the adaptive
 * system without polluting the legacy view/screenshots.
 */
export default function BadgeAdaptiveMatrix() {
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
									<td key={uuid()}>
										<DBBadge
											color={color}
											material={material}>
											{color}
										</DBBadge>
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
