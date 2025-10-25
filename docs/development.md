## Development

### Start developing

You'll need to insert the environment variables as described within the package [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) initially.

Afterwards run the following commands:

```shell
pnpm install
pnpm run build
pnpm run start
```

Please mind the [conventions for git commits](/docs/conventions.md#user-content-git-commits-conventions).

### Versions

All versions in the `package.json` files are set to `0.0.0`. These are updated during the CI/CD release process.

### Tests

TODO: Elaborate on testing setup

#### Component Tests

##### Visual regression tests

Playwright is used to create and compare screenshots of each individual component.

###### Pipeline generated images

On every fail of the visual regression tests in the Default pipeline, we're regenerating the snapshots as a `snapshot-*`-artifact. Please download these ones from the "Summary" page and commit the updated screenshots with `pnpm run commit:updated-snapshots` command from project root.

###### Manual update

To update screenshots, simply run the following command (ensure Docker is installed and available in your shell):

```shell
pnpm run regenerate:screenshots
```

If you want to generate the screenshots manually, do the following:

```shell
pnpm run build

# unix
docker run --rm --network host --volume $(pwd):/work/ --workdir /work/ --interactive --tty mcr.microsoft.com/playwright:v1.51.1-focal /bin/bash

# windows - allow file sharing (windows pop up)
docker run --rm --network host --volume ${PWD}:/work/ --workdir /work/ --interactive --tty mcr.microsoft.com/playwright:v1.51.1-focal /bin/bash

pnpm install

cd output/${frameworkFolder}  (replace ${frameworkFolder} with the appropriate folder name)

pnpm exec playwright test --update-snapshots
```

You can also use `docker-compose` to test or regenerate screenshots.

- testing: `docker-compose --file ./e2e/docker-compose.yml up`
- update screenshots: `docker-compose --file ./e2e/docker-compose.regenerate.yml up`
