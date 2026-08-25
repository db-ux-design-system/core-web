import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-BfWQizYZ.js";import{n as r,t as i}from"./button-DZNHZ2aN.js";import{i as a,n as o,r as s,t as c}from"./drawer-header-BCDqfID5.js";import{n as l,t as u}from"./drawer-footer-BN837UNc.js";import{n as d,t as f}from"./link-hmrloM0L.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),r(),l(),o(),f(),a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDrawer/Example`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},h={args:{variant:`modal`,open:!1,onClose:p(),default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) As modal
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerFooter:u,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},g={args:{variant:`inside`,open:!1,onClose:p(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Inside </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerFooter:u,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},_={args:{open:!1,onClose:p(),default:`With slots<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With slots
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:s,DBBadge:n,DBButton:i,DBDrawerFooter:u,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) As modal
  </DBDrawerHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "default": \`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Inside </DBDrawerHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`With slots<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    With slots
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,..._.parameters?.docs?.source}}},v=[`DefaultAsmodal`,`Inside`,`Withslots`]})))()}y();export{h as DefaultAsmodal,g as Inside,_ as Withslots,v as __namedExportsOrder,m as default};