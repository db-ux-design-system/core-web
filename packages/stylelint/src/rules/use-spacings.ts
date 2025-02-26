// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import stylelint from 'stylelint';
import { createRule } from '../shared/create-rule.js';
import {
	type AllowedType,
	defaultExact,
	getDeclarationRuleFunction
} from '../shared/index.js';

const {
	utils: { ruleMessages }
} = stylelint;

const ruleName = 'db-ux/use-spacings';

const messages = ruleMessages(ruleName, {
	rejected: (property: string, value: string) =>
		`Unexpected value: ${value} within prop: ${property}.\n` +
		"Please use 'db-spacing-[fixed|responsive]-xx' instead of px or rem."
});

const meta = {
	url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/stylelint/README.md'
};

const allowedDeclarations: AllowedType = {
	includes: ['margin', 'padding'],
	exact: ['gap']
};
const allowedValues: AllowedType = {
	includes: [
		'db-spacing-fixed',
		'db-spacing-responsive',
		'db-sizing',
		'%',
		'vw',
		'vh'
	],
	exact: defaultExact
};

const useSpacings = createRule({
	ruleName,
	meta,
	messages,
	fn: getDeclarationRuleFunction({
		allowedDeclarations,
		allowedValues,
		messages,
		ruleName
	})
});

export default useSpacings;
