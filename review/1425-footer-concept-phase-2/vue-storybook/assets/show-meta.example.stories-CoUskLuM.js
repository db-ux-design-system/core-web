import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./footer-ClDe6KWt.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBFooter/Show Meta`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{showCopyright:{control:`boolean`},showMain:{control:`boolean`},showMeta:{control:`boolean`},width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},a={args:{showMeta:!0,default:`<nav aria-label="Footer navigation"
  ><ul
    ><li><a href="#services" class="db-link"> Services </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Legal navigation"
    ><ul
      ><li><a href="#privacy" class="db-link"> Privacy </a></li></ul
    ></nav
  ></template
>`},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},o={args:{showMeta:!1,default:`<nav aria-label="Footer navigation"
  ><ul
    ><li><a href="#contact" class="db-link"> Contact </a></li></ul
  ></nav
>`},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": true,
    "default": \`<nav aria-label="Footer navigation"
  ><ul
    ><li><a href="#services" class="db-link"> Services </a></li></ul
  ></nav
><template v-slot:meta
  ><nav aria-label="Legal navigation"
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
    "showMeta": false,
    "default": \`<nav aria-label="Footer navigation"
  ><ul
    ><li><a href="#contact" class="db-link"> Contact </a></li></ul
  ></nav
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
}`,...o.parameters?.docs?.source}}},s=[`showMetatrue`,`showMetafalse`]})))()}c();export{s as __namedExportsOrder,i as default,o as showMetafalse,a as showMetatrue};