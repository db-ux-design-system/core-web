import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-DTC2lvyS.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBHeading/Semantic and visual decoupling`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]},size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},startSlot:{control:!1},endSlot:{control:!1},className:{control:`text`},id:{control:`text`}}},a={args:{as:`h6`,size:`2xl`,default:`Semantic h6, visual 2xl`},render:e=>({components:{DBHeading:n},setup(){return{args:e}},template:`<DBHeading v-bind="args"   >${e.default}</DBHeading>`})},o={args:{as:`h2`,size:`3xs`,default:`Semantic h2, visual 3xs`},render:e=>({components:{DBHeading:n},setup(){return{args:e}},template:`<DBHeading v-bind="args"   >${e.default}</DBHeading>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h6",
    "size": "2xl",
    "default": \`Semantic h6, visual 2xl\`
  },
  render: (args: any) => ({
    components: {
      DBHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeading v-bind="args"   >\${args.default}</DBHeading>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "size": "3xs",
    "default": \`Semantic h2, visual 3xs\`
  },
  render: (args: any) => ({
    components: {
      DBHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeading v-bind="args"   >\${args.default}</DBHeading>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`h6renderedat2xl`,`h2renderedat3xs`]})))()}c();export{s as __namedExportsOrder,i as default,o as h2renderedat3xs,a as h6renderedat2xl};