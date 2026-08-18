import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./navigation-item-CgUCZ6l5.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNavigationItem/Wrap`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{text:`No Wrap (Default)`,default:``},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,showIcon:!0,wrap:!0,default:`<template v-slot:sub-navigation
  ><DBNavigationItem text="Sub-Navi-Item 1"
    ><template v-slot:sub-navigation
      ><DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
      <DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem></template
  ></DBNavigationItem>
  <DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem
></template>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "No Wrap (Default)",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul    ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "showIcon": true,
    "wrap": true,
    "default": \`<template v-slot:sub-navigation
  ><DBNavigationItem text="Sub-Navi-Item 1"
    ><template v-slot:sub-navigation
      ><DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
      <DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem></template
  ></DBNavigationItem>
  <DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]})))()}c();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};