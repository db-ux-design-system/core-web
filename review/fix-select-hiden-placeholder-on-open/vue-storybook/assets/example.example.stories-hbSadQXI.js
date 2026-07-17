import{i as e}from"./preload-helper-D_rkpcYX.js";import{G as t,Q as n,X as r,bt as i,et as a,t as o,wt as s}from"./src-go2QWZNY.js";var c,l,u,d,f,p;e((()=>{o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Example`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{variant:`modal`,open:!1,onClose:c(),default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) As modal
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBBadge:s,DBButton:i,DBDrawerFooter:n,DBDrawerHeader:r,DBLink:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d={args:{variant:`inside`,open:!1,onClose:c(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Inside </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBBadge:s,DBButton:i,DBDrawerFooter:n,DBDrawerHeader:r,DBLink:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},f={args:{open:!1,onClose:c(),default:`With slots<template v-slot:header
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
>`},render:e=>({components:{DBDrawer:a,DBBadge:s,DBButton:i,DBDrawerFooter:n,DBDrawerHeader:r,DBLink:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultAsmodal`,`Inside`,`Withslots`]}))();export{u as DefaultAsmodal,d as Inside,f as Withslots,p as __namedExportsOrder,l as default};