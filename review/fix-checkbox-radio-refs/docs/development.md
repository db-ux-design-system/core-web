## Development

### Tests

TODO: Elaborate on testing setup

#### Component Tests

**Visual regression tests**

Playwright is used to create and compare screenshots of each individual component.

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
