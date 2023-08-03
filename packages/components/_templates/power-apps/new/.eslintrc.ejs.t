---
to: ../../output/power-apps/<%= name %>/.eslintrc.json
force: true
---
{
	"root": true,
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"globals": {
		"ComponentFramework": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint"],
	"rules": {
		"no-unused-vars": 0,
		"no-mixed-spaces-and-tabs": 0,
		"react/no-deprecated": 0
	}
}
