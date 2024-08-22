ARG version=0.0.0
FROM mcr.microsoft.com/playwright:v$version as playwright

COPY e2e /e2e
WORKDIR /e2e

COPY output/ output/
COPY packages/ packages/
COPY showcases/ showcases/

# Install dependencies
RUN npm install --ignore-scripts

# Run playwright test
CMD [ "npm", "run", "test" ]
