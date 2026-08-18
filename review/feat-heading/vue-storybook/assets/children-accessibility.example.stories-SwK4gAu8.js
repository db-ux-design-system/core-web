import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./custom-heading-CLjfE60F.js";import{n as r,t as i}from"./heading-h2-DOFTzrns.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Accessible children`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{default:`<span aria-hidden="true">* </span><span>Current disruptions</span
><span aria-hidden="true"> *</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{default:`<DBHeadingH2>Current disruptions</DBHeadingH2><span>3 active</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<span aria-hidden="true">* </span><span>Current disruptions</span
><span aria-hidden="true"> *</span>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBHeadingH2>Current disruptions</DBHeadingH2><span>3 active</span>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`NativeDecorativechildrenhiddenfromscreenreaders`,`WrapperSiblingcontentoutsidetheaccessiblename`]})))()}u();export{s as NativeDecorativechildrenhiddenfromscreenreaders,c as WrapperSiblingcontentoutsidetheaccessiblename,l as __namedExportsOrder,o as default};