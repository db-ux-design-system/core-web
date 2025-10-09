import { DBButton } from '@db-ux/react-core-components/src';
import { type PropsWithChildren } from 'react';

const FormWrapper = ({
	children,
	uncontrolled,
	controlled
}: PropsWithChildren<{
	controlled: string | boolean | string[];
	uncontrolled: string | boolean | string[];
}>) => {
	return (
		<div className="form-container">
			<form>
				<fieldset>{children}</fieldset>
				<DBButton type="reset" data-testid="reset-button">
					Reset
				</DBButton>
			</form>
			<dl data-testid="data-list">
				<dt>Controlled:</dt>
				<dd>{controlled.toString()}</dd>
				<dt>Uncontrolled:</dt>
				<dd>{uncontrolled.toString()}</dd>
			</dl>
		</div>
	);
};

export default FormWrapper;
