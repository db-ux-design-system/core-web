import{i as e}from"./preload-helper-4balkuVu.js";import{X as t,bt as n,et as r,t as i}from"./src-jiNZjWA9.js";var a,o,s,c,l;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Show Spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{containerSize:`full`,open:!1,showSpacing:!0,onClose:a(),default:`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) With Spacing
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},c={args:{containerSize:`full`,showSpacing:!1,open:!1,onClose:a(),default:`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Without Spacing
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "open": false,
    "showSpacing": true,
    "onClose": fn(),
    "default": \`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) With Spacing
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
    "containerSize": "full",
    "showSpacing": false,
    "open": false,
    "onClose": fn(),
    "default": \`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Without Spacing
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultWithSpacing`,`WithoutSpacing`]}))();export{s as DefaultWithSpacing,c as WithoutSpacing,l as __namedExportsOrder,o as default};