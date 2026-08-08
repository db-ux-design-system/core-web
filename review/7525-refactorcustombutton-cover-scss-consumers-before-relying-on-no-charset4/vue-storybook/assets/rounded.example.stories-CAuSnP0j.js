import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-JmLiDJ6R.js";import{i as r,n as i,r as a,t as o}from"./drawer-header-CouBo7DA.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Rounded`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{rounded:!1,open:!1,onClose:s(),default:`(Default) False<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) False
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{rounded:!0,open:!1,onClose:s(),default:`True<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> True </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`DefaultFalse`,`True`]})))()}f();export{l as DefaultFalse,u as True,d as __namedExportsOrder,c as default};