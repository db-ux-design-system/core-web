import '../../../../../output/webcomponent/src/components/button/button.js';
import '../../../../../output/webcomponent/src/components/icon/icon.js';

const getContent = () => {
	window.addEventListener('load', () => {
		const selectVariant = document.querySelector('#select-variant');

		const buttons = Array.from(document.querySelectorAll('db-button'));
		if (selectVariant) {
			selectVariant.addEventListener('change', (event) => {
				for (const button of buttons) {
					button.setAttribute('variant', event.target.value);
				}
			});
		}
	});

	return `
	<div>
		<h1>Button</h1>
		<div class="button-container">
			<select id="select-variant">
				<option>outline</option>
				<option>primary</option>
				<option>transparent</option>
				<option>semi-transparent</option>
			</select>

			<db-button>Test</db-button>
			<db-button disabled="true">Test</db-button>
			<db-button icon="account">Test</db-button>
			<db-button icon="account" disabled="true">Test</db-button>
			<db-button icon="account" noText="true">Test</db-button>
			<db-button
			icon="account"
			disabled="true"
			noText="true"
			>Test</db-button>
			<db-button state="loading">Test</db-button>
		</div>
	</div>`;
};

export default getContent;
