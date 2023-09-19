import '../../../../../output/webcomponent/src/components/input/input.js';
import '../../../../../output/webcomponent/src/components/button/button.js';
import getQueryParams from '../../utils/get-query-params.js';

const getContent = () => {
	window.addEventListener('load', () => {
		const queryParameters = getQueryParams();
		if (
			[
				'primary',
				'secondary',
				'successful',
				'critical',
				'warning',
				'informational'
			].some((iBg) => iBg.includes(queryParameters.color ?? ''))
		) {
			document.querySelector('#backgroundWarning').style.display =
				'block';
		} else {
			document.querySelector('#backgroundWarning').style.display = 'none';
		}
	});

	return `
	<div>
		<h1>Input</h1>

		<strong id="backgroundWarning">
			This background is not working with inputs! Please use light colors
			as background.
		</strong>
		<div class="input-container">
		<form>
			<db-input
			 description="This is a description"
			 label="Start train station"
			 placeholder="some text"
			 icon="edit"
			 variant="critical"
			 value="hello"
			 name="testInput"
			></db-input>

			<db-input
			 description="Valid test"
			 label="With event"
			 placeholder="some text"
			 icon="edit"
			 iconAfter="heart"
			 variant="warning"
			 id="input-expr-warning"
			 required="true"
			></db-input>
			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-expr-date"
			></db-input>

			<db-input
			 label="Start train station"
			 placeholder="some text"
			 iconAfter="heart"
			 id="input-reg"
			 required="true"
			 minLength="5"
			></db-input>
			<db-input
			 label="Start date"
			 placeholder="some text"
			 type="week"
			 id="input-reg-date"
			></db-input>

			<db-input
			 id="db-input-functional-1"
			 label="Start train station"
			 placeholder="some text"
			></db-input>
			<db-input
			 id="db-input-functional-2"
			 label="Textinput disabled"
			 placeholder="some text"
			 variant="informational"
			 disabled="true"
			></db-input>

			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-func-date"
			></db-input>
			<db-button type="submit">Submit</db-button>
		</form>
		</div>
	</div>`;
};

export default getContent;
