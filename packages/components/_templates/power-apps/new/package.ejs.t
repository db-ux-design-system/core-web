---
to: ../../output/power-apps/<%= name %>/package.json
force: true
---
{
  "name": "@db-ui/db-pcf-<%= name %>",
  "version": "1.0.0",
  "description": "Project containing the Power Apps Component for db-<%= name %>.",
  "scripts": {
    "build": "pcf-scripts build",
    "clean": "pcf-scripts clean",
    "rebuild": "pcf-scripts rebuild",
    "start": "pcf-scripts start",
    "refreshTypes": "pcf-scripts refreshTypes"
  },
  "dependencies": {
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@types/node": "^16.4",
    "@types/powerapps-component-framework": "^1.3.0",
    "@types/react-dom": "^18.0.7",
    "@typescript-eslint/eslint-plugin": "^4.29.0",
    "@typescript-eslint/parser": "^4.29.0",
    "eslint": "^7.32.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "pcf-scripts": "^1",
    "pcf-start": "^1",
    "sass": "^1.55.0",
    "sass-loader": "^13.1.0",
    "typescript": "^4.3"
  }
}



