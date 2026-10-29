import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPyXE956.js";var i=t({Medium:()=>s,Small:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Size`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{size:`medium`,onClick:a(),default:`(Default) Medium`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},c={args:{size:`small`,onClick:a(),default:`Small`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},l=[`Medium`,`Small`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "onClick": fn(),
    "default": \`(Default) Medium\`
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
    "size": "small",
    "onClick": fn(),
    "default": \`Small\`
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
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};