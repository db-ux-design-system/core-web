# Playwright testing

This directory provides `docker-compose.yml` to test or regenerate screenshots.

-   run `npm run build && npm run build-showcases` from your root directory
-   run either one of those commands:
    -   testing: `docker-compose -f ./e2e/docker-compose.yml up`
    -   update screenshots (all): `docker-compose -f ./e2e/docker-compose.regenerate.yml up`
    -   update screenshots (components): `docker-compose -f ./e2e/docker-compose.components.yml up`
    -   update screenshots (showcases): `docker-compose -f ./e2e/docker-compose.showcases.yml up`

## Update Playwright Version and rebuild

-   run `docker-compose -f ./e2e/docker-compose.yml build`

## Test with linux build

-   run `docker-compose -f ./e2e/docker-compose.start.yml up`
