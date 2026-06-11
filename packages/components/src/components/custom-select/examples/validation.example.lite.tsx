import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No Validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectValidation() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'miouzc0ec' },
						{ value: 'Option 2', id: '10dqnhil5' },
						{ value: 'Option 3', id: '10dqnhil4' },
						{ value: 'Option 4', id: '10dqnhil3' },
						{ value: 'Option 5', id: '10dqnhil2' }
					]}
					validation="no-validation"
					label="(Default) No Validation"
					listLabel="id-102061-(Default) No Validation"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'miouzc0ec' },
						{ value: 'Option 2', id: '10dqnhil5' },
						{ value: 'Option 3', id: '10dqnhil4' },
						{ value: 'Option 4', id: '10dqnhil3' },
						{ value: 'Option 5', id: '10dqnhil2' }
					]}
					validation="invalid"
					invalidMessage="Invalid Message"
					label="Invalid"
					listLabel="id-102062-Invalid"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'miouzc0ec' },
						{ value: 'Option 2', id: '10dqnhil5' },
						{ value: 'Option 3', id: '10dqnhil4' },
						{ value: 'Option 4', id: '10dqnhil3' },
						{ value: 'Option 5', id: '10dqnhil2' }
					]}
					validation="valid"
					invalidMessage="Valid Message"
					label="Valid"
					listLabel="id-102063-Valid"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
