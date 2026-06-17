## Git commits conventions

We're using [husky git hooks](https://www.npmjs.com/husky) in combination with [commitlint](https://www.npmjs.com/package/@commitlint/cli) according to <https://commitlint.js.org/concepts/commit-conventions.html#concept-commit-conventions>:

```text
type(scope?): subject
body?
footer?
```

[Type must be one of the following](https://commitlint.js.org/reference/rules.html#type-enum):

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

If you'd like to test your commit message previous to using it, you could test it on the command line:

```shell
echo 'foo: bar' | commitlint
```

## Code conventions

The general code conventions are guaranteed by the following tools.

### Through configuration files: `.editorconfig` for IDEs and `.gitattributes` for git checkins

Both the [`.editorconfig`](https://editorconfig.org/) and [`.gitattributes`](https://dev.to/deadlybyte/please-add-gitattributes-to-your-git-repository-1jld) ensure a consistent code structure and conventions through their configurations.

### prettier

The [prettier](https://github.com/db-ui/core/blob/main/docs/adr/code_style_formatter-prettier.adoc) tool provides a general code prettifying.

## Linting

### xo

The [xo](https://github.com/db-ui/core/blob/main/docs/adr/linting-xo.adoc) tool provides a general code linting mechanism.

### yaml files via yamllint

- [yamllint.readthedocs.io](https://yamllint.readthedocs.io/)

The [prettier](https://github.com/db-ui/core/blob/main/docs/adr/code_style_formatter-prettier.adoc) tool provides a general code prettifying.

### markdown files via markdownlint

- [github.com/markdownlint/markdownlint](https://github.com/markdownlint/markdownlint/)
