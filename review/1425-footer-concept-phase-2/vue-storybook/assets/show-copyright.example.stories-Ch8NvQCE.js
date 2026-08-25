import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./footer-BJwkz7Tp.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBFooter/Show Copyright`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{showCopyright:{control:`boolean`},showMain:{control:`boolean`},showMeta:{control:`boolean`},width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},a={args:{showCopyright:!0,default:`<nav aria-label="Show copyright enabled footer navigation"
  ><ul
    ><li><a href="#services" class="db-link"> Services </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Show copyright enabled legal navigation"
    ><ul
      ><li><a href="#privacy" class="db-link"> Privacy </a></li></ul
    ></nav
  ></template
>`},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},o={args:{showCopyright:!1,default:`<nav aria-label="Show copyright disabled footer navigation"
  ><ul
    ><li><a href="#contact" class="db-link"> Contact </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Show copyright disabled legal navigation"
    ><ul
      ><li><a href="#imprint" class="db-link"> Imprint </a></li></ul
    ></nav
  ></template
>`},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": true,
    "default": \`<nav aria-label="Show copyright enabled footer navigation"
  ><ul
    ><li><a href="#services" class="db-link"> Services </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Show copyright enabled legal navigation"
    ><ul
      ><li><a href="#privacy" class="db-link"> Privacy </a></li></ul
    ></nav
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": false,
    "default": \`<nav aria-label="Show copyright disabled footer navigation"
  ><ul
    ><li><a href="#contact" class="db-link"> Contact </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Show copyright disabled legal navigation"
    ><ul
      ><li><a href="#imprint" class="db-link"> Imprint </a></li></ul
    ></nav
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`showCopyrighttrue`,`showCopyrightfalse`]})))()}c();export{s as __namedExportsOrder,i as default,o as showCopyrightfalse,a as showCopyrighttrue};