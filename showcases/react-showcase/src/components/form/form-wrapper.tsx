// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { type PropsWithChildren } from 'react';

const FormWrapper = ({
	children,
	uncontrolled,
	controlled
}: PropsWithChildren<{
	controlled: string | boolean;
	uncontrolled: string | boolean;
}>) => {
	return (
		<div className="form-container">
			<form>
				<fieldset>{children}</fieldset>
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
