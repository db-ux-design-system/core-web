## Git commits conventions

We're using link:https://www.npmjs.com/husky[husky git hooks] in combination with link:https://www.npmjs.com/package/@commitlint/cli[commitlint] according to https://commitlint.js.org/#/concepts-commit-conventions:

....
type(scope?): subject
body?
footer?
....

[quote, commitlint documentation, Source: https://commitlint.js.org/#/?id=test]
____
Type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]
____

If you'd like to test your commit message previous to using it, you could test it on the command line:
....
echo 'foo: bar' | commitlint
....

## Code conventions

The general code conventions are guaranteed by the following tools.

### Through configuration files: `.editorconfig` for IDEs and `.gitattributes` for git checkins
Both the link:https://editorconfig.org/[`.editorconfig`] and link:https://dev.to/deadlybyte/please-add-gitattributes-to-your-git-repository-1jld[`.gitattributes`] ensure a consistent code structure and conventions through their configurations.

### xo
The link:adr/linting-xo.adoc[xo] tool provides a general code linting mechanism.

### prettier
The link:adr/code_style_formatter-prettier.adoc[prettier] tool provides a general code prettfying.
