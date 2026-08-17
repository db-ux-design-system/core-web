import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./heading-h2-BVORWoQq.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Paragraph spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{default:`Omitted: no margin`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{paragraphSpacing:!0,default:`True: 1lh block-end`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},l={args:{paragraphSpacing:!1,default:`False: no margin`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},u={args:{semanticLevel:2,default:`<span>Custom omitted: no margin</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},d={args:{semanticLevel:2,paragraphSpacing:!0,default:`<span>Custom true: 1lh block-end</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},f={args:{semanticLevel:2,paragraphSpacing:!1,default:`<span>Custom false: no margin</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    "semanticLevel": 2,
    "default": \`<span>Custom omitted: no margin</span>\`
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
    "semanticLevel": 2,
    "paragraphSpacing": true,
    "default": \`<span>Custom true: 1lh block-end</span>\`
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semanticLevel": 2,
    "paragraphSpacing": false,
    "default": \`<span>Custom false: no margin</span>\`
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
}`,...f.parameters?.docs?.source}}},p=[`NativeOmitted`,`NativeTrue1lhblockend`,`NativeFalse`,`CustomOmitted`,`CustomTrue1lhblockend`,`CustomFalse`]})))()}m();export{f as CustomFalse,u as CustomOmitted,d as CustomTrue1lhblockend,l as NativeFalse,s as NativeOmitted,c as NativeTrue1lhblockend,p as __namedExportsOrder,o as default};