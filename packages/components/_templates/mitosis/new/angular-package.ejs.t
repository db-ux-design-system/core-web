---
inject: true
to: ../../output/angular/package.json
after: "exports": {
skip_if: ./<%= name %>.scss
---
    "./<%= name %>.scss": {
      "sass": "./src/components/<%= name %>/<%= name %>.scss"
    },
