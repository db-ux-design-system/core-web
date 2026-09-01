import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Rows',
	storybookNames: ['(Default) 4 Rows', 'Custom'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaRows() {
	return (
		<Fragment>
			<div style={{ width: '328px' }}>
				<DBTextarea
					label="(Default) 4 Rows"
					value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
					placeholder="(Default) 4 Rows"
				/>
			</div>
			<div style={{ width: '328px' }}>
				<DBTextarea
					label="Custom Example 8 Rows"
					rows={8}
					value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
					placeholder="Custom"
				/>
			</div>
		</Fragment>
	);
}
