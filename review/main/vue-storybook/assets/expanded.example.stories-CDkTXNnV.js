import{n as e}from"./chunk-DnJy8xQt.js";import{m as t,t as n}from"./src-C6Gn60iG.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNavigationItem/Expanded`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{default:`<a href="#">(Default) False</a>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{default:`True<template v-slot:sub-navigation
  ><DBNavigationItem>
    Also a navigation item with longer label
    <template v-slot:sub-navigation
      ><DBNavigationItem
        ><a href="#">Navigation-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem
    ><a href="#">Navigation-Item 1</a></DBNavigationItem
  ></template
>`},render:e=>({components:{DBNavigationItem:t},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">(Default) False</a>\`
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
    "default": \`True<template v-slot:sub-navigation
  ><DBNavigationItem>
    Also a navigation item with longer label
    <template v-slot:sub-navigation
      ><DBNavigationItem
        ><a href="#">Navigation-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem
    ><a href="#">Navigation-Item 1</a></DBNavigationItem
  ></template
>\`
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};