## Git commits conventions

We're using [husky git hooks](https://www.npmjs.com/husky) in combination with [commitlint](https://www.npmjs.com/package/@commitlint/cli) according to <https://commitlint.js.org/#/concepts-commit-conventions>:

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
Both the [`.editorconfig`](https://editorconfig.org/) and [`.gitattributes`](https://dev.to/deadlybyte/please-add-gitattributes-to-your-git-repository-1jld) ensure a consistent code structure and conventions through their configurations.

### xo
The [xo](adr/linting-xo.adoc) tool provides a general code linting mechanism.

### prettier
The link:adr/code_style_formatter-prettier.adoc[prettier] tool provides a general code prettfying.
