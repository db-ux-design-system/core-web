# Contributing

**Thank you for your interest in our project.** Contributions are always welcome. **Feel free to [open an issue](https://github.com/db-ux-design-system/core-web/issues/new) if you have any questions, ideas, or bugs to report, or submit pull requests to contribute code.**

We are committed to fostering a welcoming, respectful, and harassment-free environment, **so please be kind! 💖**

## Prepare

Get credentials for public usage from [Marketingportal](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/resources/db-theme) and add them to your [`.env` File](./.env) - see [`.env.template`](./.env.template).

```shell
npm install
# it should run postinstall tasks from @db-ux/db-theme* by default, if not:
# execute this tasks manually to decode the assets using the previously made setup:
node node_modules/@db-ux/db-theme-fonts/build/scripts/index.js
node node_modules/@db-ux/db-theme-icons/build/scripts/index.js
node node_modules/@db-ux/db-theme-illustrative-icons/build/scripts/index.js
```

> If you missed the step before the `npm install`, you may need to re-install your packages to ensure the postinstall scrips are executed for decrypting the fonts and other artifacts (`rm -rf node_modules/@db-ux/db-theme* && npm update @db-ux/db-theme`)

## Start locally

```shell
npm run build
npm run dev
```

## Make changes / Before you commit

Please ensure that **Husky** is installed correctly to validate your changes.

Please verify you are using a valid branch name as described by the pattern in your [`package.json`](./package.json) in the section `validate-branch-name`.

Moreover, you need to duplicate [`.env.template`](./.env.template) as [`.env`](./.env) and type your own email address. This ensures that you have the correct email set for this project.

### Conventions

Please note that we have established [code and git commit (message and branch naming) conventions](docs/conventions.md), which are enforced using various linting tools.
