import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BLW0n0ID.js";import{i as r,n as i,r as a,t as o}from"./drawer-header-BXv89kGS.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Show Spacing`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{containerSize:`full`,open:!1,showSpacing:!0,onClose:s(),default:`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) With Spacing
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{containerSize:`full`,showSpacing:!1,open:!1,onClose:s(),default:`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Without Spacing
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`DefaultWithSpacing`,`WithoutSpacing`]})))()}f();export{l as DefaultWithSpacing,u as WithoutSpacing,d as __namedExportsOrder,c as default};