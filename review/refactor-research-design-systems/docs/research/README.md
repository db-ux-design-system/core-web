# How to research

If you want to do a research for a new component run this in the `docs` folder:

```shell
npm run generate:component-research --workspace=@db-ux/docs
```

1. Add the name of your component and a new `.md` file will be created.
2. Use all links to the design systems to check if the component exists and/or if it has another name. Change the link/name according to this.
3. You can add a comment as an optional field if you find something special in another design system.
4. Add a conclusion at the end, which covers similarities and possible problems

You can find more design systems here:

- <https://component.gallery/>
- <https://github.com/alexpate/awesome-design-systems>

Further inspirational links:

- <https://handreichungen.bfit-bund.de/barrierefreie-uie/>
- <https://open-ui.org/>

5. Additionally it might be beneficial to even also already save your HTML explorations within the related components file, like e.g. for `buttons`: `packages/components/src/components/button/index.html`
