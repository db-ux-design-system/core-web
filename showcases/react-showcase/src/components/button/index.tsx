import type { ReactElement } from 'react';
import { getShowcasePlugin } from '../../../../shared/showcase-plugins';

export default function ButtonComponent(): ReactElement {
	const plugin = getShowcasePlugin('button');

	if (!plugin) {
		return <div>Button showcase plugin not found.</div>;
	}

	const showcase = plugin.getShowcaseComponent({ host: 'react-showcase' });

	if (!showcase) {
		return <div>Button showcase component not available.</div>;
	}

	return showcase;
}
