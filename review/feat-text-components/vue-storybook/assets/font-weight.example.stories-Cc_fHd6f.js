import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-6FiAuKg6.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBParagraph/Font weight`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},fontWeight:{control:`select`,options:[`black`,`regular`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},a={args:{fontWeight:`black`,default:`Black`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},o={args:{fontWeight:`regular`,default:`Regular`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},s=[`Black`,`Regular`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "black",
    "default": \`Black\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "regular",
    "default": \`Regular\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as Black,o as Regular,s as __namedExportsOrder,i as default};