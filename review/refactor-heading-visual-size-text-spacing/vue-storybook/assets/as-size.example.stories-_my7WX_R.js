import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-h2-ChWi_UXD.js";import{n as r,t as i}from"./heading-h6-DtzJiJ61.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeading/Semantic and visual decoupling`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{visualSize:`h1`,default:`Semantic h6, visual h1`},render:e=>({components:{DBHeadingH2:n,DBHeadingH6:i},setup(){return{args:e}},template:`<DBHeadingH6 v-bind="args"   >${e.default}</DBHeadingH6>`})},c={args:{visualSize:`h6`,default:`Semantic h2, visual h6`},render:e=>({components:{DBHeadingH2:n,DBHeadingH6:i},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},l=[`h6renderedash1`,`h2renderedash6`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h1",
    "default": \`Semantic h6, visual h1\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH6 v-bind="args"   >\${args.default}</DBHeadingH6>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h6",
    "default": \`Semantic h2, visual h6\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{l as __namedExportsOrder,o as default,c as h2renderedash6,s as h6renderedash1};