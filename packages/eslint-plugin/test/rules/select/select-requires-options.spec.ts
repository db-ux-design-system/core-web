import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import vueParser from 'vue-eslint-parser';

import rule from '../../../src/rules/select/select-requires-options.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester({
	languageOptions: {
		parser: angularTemplateParser
	}
});

const vueRuleTester = new RuleTester({
	languageOptions: {
		parser: vueParser
	}
});

const missingOptions = [{ messageId: 'missingOptions' }];

describe('select-requires-options', () => {
	ruleTester.run('select-requires-options', rule, {
		valid: [
			{
				code: `<DBSelect label="Country">
            <option value="de">Germany</option>
            <option value="us">USA</option>
          </DBSelect>`
			},
			{
				code: '<DBSelect label="Country" options={countryOptions} />'
			},
			{
				code: '<DBSelect label="Country">{countries.map((c) => <option key={c} value={c}>{c}</option>)}</DBSelect>'
			},
			{
				code: '<DBSelect label="Country">{show && <option value="de">Germany</option>}</DBSelect>'
			},
			{
				code: '<DBSelect label="Country">{show ? <option value="de">Germany</option> : null}</DBSelect>'
			},
			{
				code: '<DBSelect label="Country"><><option value="de">Germany</option></></DBSelect>'
			},
			{
				code: '<DBSelect label="Country"><optgroup label="Europe"><option value="de">Germany</option></optgroup></DBSelect>'
			},
			{
				code: '<DBSelect label="Country">{renderOptions()}</DBSelect>'
			}
		],
		invalid: [
			{
				code: '<DBSelect label="Country" />',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country"></DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country"><div>Not an option</div></DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country"><div><option value="de">Germany</option></div></DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country">{null}</DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country">{"Germany"}</DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country">{show && <div>Germany</div>}</DBSelect>',
				errors: missingOptions
			},
			{
				code: '<DBSelect label="Country"><></></DBSelect>',
				errors: missingOptions
			}
		]
	});

	angularRuleTester.run('select-requires-options (Angular)', rule, {
		valid: [
			{
				code: '<db-select label="Country"><option value="de">Germany</option></db-select>'
			},
			{
				code: '<db-select label="Country" [options]="options"></db-select>'
			},
			{
				code: `<db-select label="Country">
@for (c of countries; track c) {
  <option [value]="c">{{ c }}</option>
}
</db-select>`
			},
			{
				code: '<db-select label="Country">@if (show) { <option value="de">Germany</option> } @else { <option value="us">USA</option> }</db-select>'
			},
			{
				code: '<db-select label="Country">@switch (mode) { @case (1) { <option value="de">Germany</option> } }</db-select>'
			},
			{
				code: '<db-select label="Country"><option *ngFor="let c of countries" [value]="c">{{ c }}</option></db-select>'
			},
			{
				code: '<db-select label="Country"><ng-container *ngFor="let c of countries"><option [value]="c">{{ c }}</option></ng-container></db-select>'
			},
			{
				code: '<db-select label="Country"><optgroup label="Europe"><option value="de">Germany</option></optgroup></db-select>'
			},
			{
				code: '<db-select label="Country"><optgroup label="Europe">@for (c of countries; track c) { <option [value]="c">{{ c }}</option> }</optgroup></db-select>'
			}
		],
		invalid: [
			{
				code: '<db-select label="Country"></db-select>',
				errors: missingOptions
			},
			{
				code: '<db-select label="Country">@if (show) { }</db-select>',
				errors: missingOptions
			},
			{
				code: '<db-select label="Country">@for (c of countries; track c) { <span>{{ c }}</span> }</db-select>',
				errors: missingOptions
			},
			{
				code: '<db-select label="Country"><div><option value="de">Germany</option></div></db-select>',
				errors: missingOptions
			},
			{
				code: '<db-select label="Country"><optgroup label="Europe"></optgroup></db-select>',
				errors: missingOptions
			},
			{
				code: '<db-select label="Country">{{ countries }}</db-select>',
				errors: missingOptions
			}
		]
	});

	vueRuleTester.run('select-requires-options (Vue)', rule, {
		valid: [
			{
				code: '<template><DBSelect label="Country" :options="options" /></template>'
			},
			{
				code: '<template><DBSelect label="Country"><option v-for="c in countries" :key="c" :value="c">{{ c }}</option></DBSelect></template>'
			},
			{
				code: '<template><DBSelect label="Country"><template v-for="c in countries" :key="c"><option :value="c">{{ c }}</option></template></DBSelect></template>'
			},
			{
				code: '<template><DBSelect label="Country"><optgroup label="Europe"><option value="de">Germany</option></optgroup></DBSelect></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBSelect label="Country" /></template>',
				errors: missingOptions
			},
			{
				code: '<template><DBSelect label="Country"><template v-if="show"></template></DBSelect></template>',
				errors: missingOptions
			},
			{
				code: '<template><DBSelect label="Country">{{ countries }}</DBSelect></template>',
				errors: missingOptions
			}
		]
	});
});
