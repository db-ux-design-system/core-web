FROM mcr.microsoft.com/playwright:v1.40.1 as playwright

COPY e2e /e2e
WORKDIR /e2e

COPY output/ output/
COPY packages/ packages/
COPY showcases/ showcases/

# Install dependencies
RUN npm install --ignore-scripts

# Run playwright test
CMD [ "npm", "run", "test" ]
