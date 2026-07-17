import{i as e}from"./preload-helper-L9MNnvq4.js";import{X as t,bt as n,et as r,t as i}from"./src-Dhqw4rpT.js";var a,o,s,c,l;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Rounded`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{rounded:!1,open:!1,onClose:a(),default:`(Default) False<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) False
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},c={args:{rounded:!0,open:!1,onClose:a(),default:`True<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> True </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "rounded": false,
    "open": false,
    "onClose": fn(),
    "default": \`(Default) False<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) False
  </DBDrawerHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "rounded": true,
    "open": false,
    "onClose": fn(),
    "default": \`True<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> True </DBDrawerHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]}))();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};