import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPyXE956.js";var i=t({Auto:()=>s,Full:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Width`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{width:`auto`,onClick:a(),default:`(Default) Auto`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},c={args:{width:`full`,onClick:a(),default:`Width`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},l=[`Auto`,`Full`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "default": \`(Default) Auto\`
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
    "width": "full",
    "onClick": fn(),
    "default": \`Width\`
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
    template: \`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};