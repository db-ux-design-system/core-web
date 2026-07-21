import{i as e}from"./preload-helper-4balkuVu.js";import{K as t,X as n,bt as r,et as i,t as a,wt as o}from"./src-BtSmJGIo.js";var s,c,l,u,d,f;e((()=>{a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Header`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{open:!1,onClose:s(),default:`Content<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:i,DBBadge:o,DBButton:r,DBDrawerHeader:n,DBIcon:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{open:!1,onClose:s(),default:`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="account"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:i,DBBadge:o,DBButton:r,DBDrawerHeader:n,DBIcon:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d={args:{open:!1,onClose:s(),default:`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:i,DBBadge:o,DBButton:r,DBDrawerHeader:n,DBIcon:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Content<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerHeader,
      DBIcon
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
    "open": false,
    "onClose": fn(),
    "default": \`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="account"></DBIcon></template></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`Withtextprop`,`Withstartslot`,`Withendslot`]}))();export{d as Withendslot,u as Withstartslot,l as Withtextprop,f as __namedExportsOrder,c as default};