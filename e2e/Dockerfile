FROM mcr.microsoft.com/playwright:v1.32.2-focal as playwright

COPY e2e /e2e
WORKDIR /e2e

COPY output/ output/
COPY packages/ packages/

# Install dependencies
RUN npm install
# Build foundations and components
# RUN npm run build
# Run playwright test
CMD [ "npm", "run", "test" ]
