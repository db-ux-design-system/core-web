---
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBLoadingIndicator): keep `NodeJS.Timeout` out of the published typings

- Type the internal `_timeoutId` state field as `number` instead of `ReturnType<typeof setTimeout>`, which resolved to the Node-only `NodeJS.Timeout` during the Angular output compile and leaked an non-declarable `NodeJS` namespace into `@db-ux/ngx-core-components` typings.
- Browser-only Angular apps can now import the package without `@types/node` or `skipLibCheck`.
