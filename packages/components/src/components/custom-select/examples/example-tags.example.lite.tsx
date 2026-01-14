import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Example tags',
	storybookNames: ['Tag grow', 'Tag grow + auto'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectExampletags() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '53xbfd1o6' },
					{ value: 'Option 2', id: 'fq8ypeiz2' },
					{ value: 'Option 3', id: 'jtd3wevz2' },
					{ value: 'Option 4', id: 'srr1toi8f' },
					{ value: 'Option 5', id: 'srr1toi7f' }
				]}
				selectedType="tag"
				multiple={true}
				id="id-10271"
				removeTagsTexts={[
					'Remove Option entry 1',
					'Remove Option entry 2',
					'Remove Option entry 3',
					'Remove Option entry 4'
				]}>
				Tag grow
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'jn3s5kl9t' },
					{ value: 'Option 2', id: 'iesayujhy' },
					{ value: 'Option 3', id: '55kavoeem' },
					{ value: 'Option 4', id: 'xi4qhrdg8' },
					{ value: 'Option 5', id: 'xi4qhrdg7' }
				]}
				selectedType="tag"
				formFieldWidth="auto"
				multiple={true}
				id="id-10272">
				Tag grow + auto
			</DBCustomSelect>
		</Fragment>
	);
}
