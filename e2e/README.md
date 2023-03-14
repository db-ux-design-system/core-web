# Playwright testing

This directory provides `docker-compose.yml` to test or regenerate screenshots.

-   run `npm run build` from your root directory
-   run either one of those two commands:
    -   testing: `docker-compose -f ./e2e/docker-compose.yml up`
    -   update screenshots: `docker-compose -f ./e2e/docker-compose.regenerate.yml up`
