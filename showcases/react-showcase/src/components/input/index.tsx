import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBButton, DBInput } from '../../../../../output/react/src';
import './index.scss';
import {
	COLOR_CONST,
	INVALID_INPUT_BACKGROUNDS
} from '../../../../../packages/components/src/shared/constants';

const InputComponent = () => {
	const [searchParameters] = useSearchParams();
	const [backgroundWarning, setBackgroundWarning] = useState<boolean>(false);

	useEffect(() => {
		setBackgroundWarning(
			(searchParameters.has(COLOR_CONST) &&
				Boolean(
					INVALID_INPUT_BACKGROUNDS.some((iBg) =>
						iBg.includes(searchParameters.get(COLOR_CONST) ?? '')
					)
				)) ||
				false
		);
	}, [searchParameters]);

	return (
		<div>
			<h1>Input</h1>
			{backgroundWarning && (
				<strong>
					This background is not working with inputs! Please use light
					colors as background.
				</strong>
			)}
			<div className="input-container">
				<form>
					<DBInput
						description="This is a description"
						label="Start train station"
						placeholder="some text"
						iconBefore="edit"
						variant="critical"
						value="hello"
						name="testInput"></DBInput>

					<DBInput
						description="Valid test"
						label="With event"
						placeholder="some text"
						iconBefore="edit"
						iconAfter="heart"
						variant="warning"
						id="input-expr-warning"
						required></DBInput>
					<DBInput
						label="start date"
						placeholder="some text"
						type="datetime-local"
						id="input-expr-date"></DBInput>

					<DBInput
						label="Start train station"
						placeholder="some text"
						iconAfter="heart"
						id="input-reg"
						required
						minLength={5}></DBInput>
					<DBInput
						label="Start date"
						placeholder="some text"
						type="week"
						id="input-reg-date"></DBInput>

					<DBInput
						id="db-input-functional-1"
						label="Start train station"
						placeholder="some text"></DBInput>
					<DBInput
						id="db-input-functional-2"
						label="Textinput disabled"
						placeholder="some text"
						variant="information"
						disabled></DBInput>

					<DBInput
						label="start date"
						placeholder="some text"
						type="datetime-local"
						id="input-func-date"></DBInput>
					<DBButton type="submit">Submit</DBButton>
				</form>
			</div>
		</div>
	);
};

export default InputComponent;
