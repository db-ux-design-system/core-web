# @db-ux/agent-cli

![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

## Usage

We provide a command-line interface (CLI) tool that copies the `@db-ux` documentation to your repository, making it available to AI agents.

### Running the CLI Tool

Use this command in your repository:

```shell
npx @db-ux/agent-cli
```

The DB UX Design System documentation will be added to (or replaced in subsequent runs, e.g. after a DB UX Design System update) in the file `.github/copilot-instructions.md` (if this file does not yet exist in your codebase, it will be created).

### Advanced Usage

You can also change the root path where the tool should check for `node_modules`:

```shell
npx @db-ux/agent-cli packages/frontend
```

This is useful in monorepo setups where your DB UX packages might be installed in a specific workspace directory.

### What the tool does

1. **Scans your project's node_modules** for installed `@db-ux` packages
2. **Extracts relevant documentation** based on your installed versions
3. **Creates or updates** `.github/copilot-instructions.md` with component documentation
4. **Provides AI agents** with context about available components and their usage patterns

### Best practices

We've had the best experience with GitHub Copilot and Amazon Q when using the following settings:

- Agent mode works best for code generation and may also offer the best developer experience.
- Regarding the provided models, GPT-4o seemed to strike the best balance between "used tokens" and performance, although "Claude Sonnet 4" is still better. However, you run out of tokens quite quickly with this model.
- If you're primarily interested in testing this functionality at the moment, we have quite a bit of experience using a prompt that is both equal and non-trivial, but rather complex, such as "Can you create a new page with a dashboard? It should contain selections for KPIs. Each KPI is a card containing information and buttons."

## Deutsche Bahn brand

As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even if being used with the code that we're providing with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UX Design System products free to use and release it under the Apache 2.0 license.
Please have a look at our brand portal at <https://marketingportal.extranet.deutschebahn.com/> for any further questions and whom to contact on any brand issues.

For any usage outside of Deutsche Bahn websites and applications you aren't allowed to use any Deutsche Bahn brand and
design assets as well as protected characteristics and trademarks, that for not including the DB Theme.

## Contributions

Contributions are very welcome, please refer to the [contribution guide](https://github.com/db-ux-design-system/core-web/blob/main/CONTRIBUTING.md).

## Code of conduct

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone – have a look at our [Contributor Covenant Code of Conduct](https://github.com/db-ux-design-system/core-web/blob/main/CODE-OF-CONDUCT.md).

## License

This project is licensed under [Apache-2.0](LICENSE).
