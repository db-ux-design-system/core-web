import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./custom-heading-C_D4xaqM.js";import{n as r,t as i}from"./heading-h2-CVQ3ob90.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Font weight`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{fontWeight:`black`,default:`(Default) Black`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{fontWeight:`light`,default:`Light`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},l={args:{fontWeight:`black`,default:`<h2>Wrapper: (Default) Black</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},u={args:{fontWeight:`light`,default:`<h2>Wrapper: Light</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "black",
    "default": \`(Default) Black\`
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
    "fontWeight": "light",
    "default": \`Light\`
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
    "fontWeight": "black",
    "default": \`<h2>Wrapper: (Default) Black</h2>\`
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "light",
    "default": \`<h2>Wrapper: Light</h2>\`
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
}`,...u.parameters?.docs?.source}}},d=[`DefaultBlack`,`Light`,`WrapperDefaultBlack`,`WrapperLight`]})))()}f();export{s as DefaultBlack,c as Light,l as WrapperDefaultBlack,u as WrapperLight,d as __namedExportsOrder,o as default};