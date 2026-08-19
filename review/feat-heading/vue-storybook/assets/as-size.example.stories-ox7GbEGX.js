import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-h2-1NyfrxDr.js";import{n as r,t as i}from"./heading-h6-C7y972W_.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Semantic and visual decoupling`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{size:`2xl`,default:`Semantic h6, visual 2xl`},render:e=>({components:{DBHeadingH2:n,DBHeadingH6:i},setup(){return{args:e}},template:`<DBHeadingH6 v-bind="args"   >${e.default}</DBHeadingH6>`})},c={args:{size:`3xs`,default:`Semantic h2, visual 3xs`},render:e=>({components:{DBHeadingH2:n,DBHeadingH6:i},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xl",
    "default": \`Semantic h6, visual 2xl\`
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
    "size": "3xs",
    "default": \`Semantic h2, visual 3xs\`
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
}`,...c.parameters?.docs?.source}}},l=[`h6renderedat2xl`,`h2renderedat3xs`]})))()}u();export{l as __namedExportsOrder,o as default,c as h2renderedat3xs,s as h6renderedat2xl};