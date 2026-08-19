import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./custom-heading-YtpVCmVp.js";import{n as r,t as i}from"./heading-h2-1NyfrxDr.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Paragraph spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{default:`Omitted: no margin`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{paragraphSpacing:!0,default:`True: 1lh block-end`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},l={args:{paragraphSpacing:!1,default:`False: no margin`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},u={args:{default:`<h2>Wrapper omitted: no margin</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},d={args:{paragraphSpacing:!0,default:`<h2>Wrapper true: 1lh block-end</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`Omitted: no margin\`
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
    "paragraphSpacing": true,
    "default": \`True: 1lh block-end\`
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": false,
    "default": \`False: no margin\`
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>Wrapper omitted: no margin</h2>\`
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": true,
    "default": \`<h2>Wrapper true: 1lh block-end</h2>\`
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
}`,...d.parameters?.docs?.source}}},f=[`Omitted`,`True1lhblockend`,`False`,`WrapperOmitted`,`WrapperTrue1lhblockend`]})))()}p();export{l as False,s as Omitted,c as True1lhblockend,u as WrapperOmitted,d as WrapperTrue1lhblockend,f as __namedExportsOrder,o as default};