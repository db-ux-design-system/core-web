import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPyXE956.js";var i=t({AutomaticLineBreaks:()=>s,AutomaticLineBreaksandIcon:()=>c,SmallAutomaticLineBreaks:()=>l,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Multi Line Text`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{width:`full`,onClick:a(),default:`Multi-line Text With Automatic Line Breaks`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},c={args:{width:`full`,icon:`x_placeholder`,onClick:a(),default:`Multi-line Text With Automatic Line Breaks and Icon`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},l={args:{size:`small`,onClick:a(),default:`Button Small Multi-line Text With Automatic Line Breaks`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${e.default}</DBButton></div>`})},u=[`AutomaticLineBreaks`,`AutomaticLineBreaksandIcon`,`SmallAutomaticLineBreaks`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks and Icon\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "default": \`Button Small Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,i as r,s as t};