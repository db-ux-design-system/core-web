## Development

### Start developing

You'll need to insert the environmental variables as described within the package [`@db-ux/db-theme`](https://www.npmjs.com/package/@db-ux/db-theme) first of all.

Afterwards run the following commands:

```shell
npm install
npm run build
npm run start
```

Please mind the [conventions for git commits](/docs/conventions.md#user-content-git-commits-conventions).

### Versions

All versions in all `package.json` files are set to `0.0.0`, we change those during release process in CI/CD.

### Tests

TODO: Elaborate on testing setup

#### Component Tests

##### Visual regression tests

Playwright is used to create and compare screenshots of each individual component.

###### Pipeline generated images

On every fail of the visual regression tests in the Default pipeline, we're regenerating the snapshots as a `snapshot-*`-artifact. Please download these ones from the "Summary" page and commit the updated screenshots with `npm run commit:updated-snapshots` command from project root.

###### Manual update

To update screenshots just run the following (you need Docker installed and available on your shell):

```shell
npm run regenerate:screenshots
```

If you want to generate the screenshots manually, do the following:

```shell
npm run build

# unix
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash

# windows - allow file sharing (windows pop up)
docker run --rm --network host -v ${PWD}:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash

npm install

cd output/${frameworkFolder}

npx playwright test --update-snapshots
```

You can also use `docker-compose` to test or regenerate screenshots.

- testing: `docker-compose -f ./e2e/docker-compose.yml up`
- update screenshots: `docker-compose -f ./e2e/docker-compose.regenerate.yml up`
