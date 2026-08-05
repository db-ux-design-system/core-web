import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-D2rzZW6-.js";import{n as r,t as i}from"./button-Bfadich-.js";import{i as a,n as o,r as s,t as c}from"./drawer-header-CnoADwec.js";import{n as l,t as u}from"./icon-BjTGYVpZ.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r(),o(),l(),a(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Header`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},p={args:{open:!1,onClose:d(),default:`Content<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerHeader:c,DBIcon:u},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},m={args:{open:!1,onClose:d(),default:`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="account"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerHeader:c,DBIcon:u},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},h={args:{open:!1,onClose:d(),default:`Content<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerHeader:c,DBIcon:u},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Withtextprop`,`Withstartslot`,`Withendslot`]})))()}_();export{h as Withendslot,m as Withstartslot,p as Withtextprop,g as __namedExportsOrder,f as default};