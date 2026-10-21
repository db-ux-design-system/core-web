import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Form Attributes',
	storybookNames: ['Form Attributes'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonFormAttributes() {
	return (
		<Fragment>
			<form id="demo-form" action="#default-action" method="get">
				<DBButton
					data-testid="form-default-button"
					type="submit"
					name="action"
					value="default">
					Default submit
				</DBButton>
				<DBButton
					data-testid="form-override-button"
					type="submit"
					name="action"
					value="override"
					formAction="#override-action"
					formMethod="post"
					formEncType="multipart/form-data"
					formTarget="_self"
					formNoValidate={true}>
					Override submit target
				</DBButton>
			</form>

			{/* A button can also be associated with a form it is not nested in
			 * via the `form` attribute referencing the form's id. */}
			<DBButton type="reset" form="demo-form">
				Reset the form above
			</DBButton>
		</Fragment>
	);
}
