import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/button/button-type-required.js';

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

describe('button-type-required', () => {
	ruleTester.run('button-type-required', rule, {
		valid: [
			{
				code: '<DBButton type="button">Save</DBButton>'
			},
			{
				code: '<DBButton type="submit">Submit</DBButton>'
			},
			{
				code: '<DBButton type="reset">Reset</DBButton>'
			},
			{
				code: '<DBButton type="">Empty</DBButton>'
			},
			{
				code: '<div>Not a button</div>'
			}
		],
		invalid: [
			{
				code: '<DBButton>Save</DBButton>',
				errors: [{ messageId: 'missingType' }],
				output: '<DBButton type="submit">Save</DBButton>'
			},
			{
				code: '<DBButton icon="save">Save</DBButton>',
				errors: [{ messageId: 'missingType' }],
				output: '<DBButton icon="save" type="submit">Save</DBButton>'
			},
			{
				code: '<DBButton commandfor="dialog">Toggle</DBButton>',
				errors: [{ messageId: 'missingType' }],
				output: '<DBButton commandfor="dialog" type="button">Toggle</DBButton>'
			},
			{
				code: '<usermedia><DBButton>Grant Access</DBButton></usermedia>',
				errors: [{ messageId: 'missingType' }],
				output: '<usermedia><DBButton type="button">Grant Access</DBButton></usermedia>'
			},
			{
				code: '<geolocation><DBButton>Share Location</DBButton></geolocation>',
				errors: [{ messageId: 'missingType' }],
				output: '<geolocation><DBButton type="button">Share Location</DBButton></geolocation>'
			},
			{
				code: '<usermedia><div><DBButton>Nested</DBButton></div></usermedia>',
				errors: [{ messageId: 'missingType' }],
				output: '<usermedia><div><DBButton type="button">Nested</DBButton></div></usermedia>'
			},
			{
				// PascalCase component names are not native permission elements
				code: '<Geolocation><DBButton>Submit</DBButton></Geolocation>',
				errors: [{ messageId: 'missingType' }],
				output: '<Geolocation><DBButton type="submit">Submit</DBButton></Geolocation>'
			},
			{
				// PascalCase component names are not native permission elements
				code: '<Usermedia><DBButton>Submit</DBButton></Usermedia>',
				errors: [{ messageId: 'missingType' }],
				output: '<Usermedia><DBButton type="submit">Submit</DBButton></Usermedia>'
			}
		]
	});

	angularRuleTester.run('button-type-required (Angular)', rule, {
		valid: [
			{
				code: '<db-button type="button">Save</db-button>'
			},
			{
				code: '<db-button [type]="buttonType">Dynamic</db-button>'
			}
		],
		invalid: [
			{
				code: '<db-button>Save</db-button>',
				errors: [{ messageId: 'missingType' }],
				output: '<db-button type="submit">Save</db-button>'
			},
			{
				code: '<db-button commandfor="dialog">Toggle</db-button>',
				errors: [{ messageId: 'missingType' }],
				output: '<db-button commandfor="dialog" type="button">Toggle</db-button>'
			},
			{
				code: '<usermedia><db-button>Grant Access</db-button></usermedia>',
				errors: [{ messageId: 'missingType' }],
				output: '<usermedia><db-button type="button">Grant Access</db-button></usermedia>'
			},
			{
				code: '<geolocation><db-button>Share Location</db-button></geolocation>',
				errors: [{ messageId: 'missingType' }],
				output: '<geolocation><db-button type="button">Share Location</db-button></geolocation>'
			}
		]
	});
});
