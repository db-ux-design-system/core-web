import{_ as n}from"./navigation-item-BOW6Wrwe.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBNavigationItem/Expanded",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{default:'<a href="#">(Default) False</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},e={args:{default:`True<template v-slot:sub-navigation
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
>`},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{a as DefaultFalse,e as True,p as __namedExportsOrder,c as default};
