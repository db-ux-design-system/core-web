import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPyXE956.js";var i=t({Brand:()=>u,Filled:()=>c,Ghost:()=>l,Outlined:()=>s,__namedExportsOrder:()=>d,default:()=>o}),a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Variant`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{variant:`outlined`,onClick:a(),default:`(Default) Outlined - Adaptive`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},c={args:{variant:`filled`,onClick:a(),default:`Filled - Adaptive`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},l={args:{variant:`ghost`,onClick:a(),default:`Ghost - Adaptive`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},u={args:{variant:`brand`,onClick:a(),default:`Brand`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},d=[`Outlined`,`Filled`,`Ghost`,`Brand`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn(),
    "default": \`(Default) Outlined - Adaptive\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "filled",
    "onClick": fn(),
    "default": \`Filled - Adaptive\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn(),
    "default": \`Ghost - Adaptive\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn(),
    "default": \`Brand\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{f as a,s as i,c as n,o,l as r,i as s,u as t};