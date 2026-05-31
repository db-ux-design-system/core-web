import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectDensity() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-density="functional"
					options={[
						{ value: 'Option 1', id: 'miouzc0ec' },
						{ value: 'Option 2', id: '10dqnhil2' },
						{ value: 'Option 3', id: '10dqnhil3' },
						{ value: 'Option 4', id: '10dqnhil4' },
						{ value: 'Option 5', id: '10dqnhil5' }
					]}
					placeholder="Placeholder"
					label="Functional"
					listLabel="id-10206-Functional"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-density="regular"
					options={[
						{ value: 'Option 1', id: 'ok5olto18' },
						{ value: 'Option 2', id: 'mzepnlbp4' },
						{ value: 'Option 3', id: '10dqnhil3' },
						{ value: 'Option 4', id: '10dqnhil2' },
						{ value: 'Option 5', id: '10dqnhil1' }
					]}
					placeholder="Placeholder"
					label="(Default) Regular"
					listLabel="id-10207-(Default) Regular"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-density="expressive"
					options={[
						{ value: 'Option 1', id: 'ixtyk8z9j' },
						{ value: 'Option 2', id: 'k8kvx3fm8' },
						{ value: 'Option 3', id: 'k8kvx3fm5' },
						{ value: 'Option 4', id: 'k8kvx3fm6' },
						{ value: 'Option 5', id: 'k8kvx3fm7' }
					]}
					placeholder="Placeholder"
					label="Expressive"
					listLabel="id-10208-Expressive"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
