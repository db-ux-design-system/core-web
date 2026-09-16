import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-HB0ppxJj.js";import{n as r,t as i}from"./button-85-E6iFP.js";import{n as a,t as o}from"./drawer-footer-DATSRG9_.js";import{n as s,t as c}from"./drawer-header-097UTKOD.js";import{n as l,t as u}from"./drawer-CmhNaBv3.js";import{n as d,t as f}from"./link-R70PyZRO.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),r(),a(),s(),f(),l(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDrawer/Examples`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p(),onCancel:p()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},h={args:{id:`drawer-example-modal`,variant:`modal`,open:!1,onClose:p(),default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) As modal</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal" :onClick="(event) => openIndex = 0"  >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},g={args:{id:`drawer-example-inside`,variant:`inside`,open:!1,onClose:p(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Inside</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    ><DBButton  :onClick="(event) => openIndex = 1"  >
                    Open: Inside
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},_={args:{id:`drawer-example-slots`,open:!1,onClose:p(),default:`With slots<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With slots</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-slots" :onClick="(event) => openIndex = 2"  >
                    Open: With slots
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},v={args:{open:!1,onClose:p(),onCancel:p(),default:`Press ESC or click backdrop to test events<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Events Test
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},y=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-modal",
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) As modal</h2></DBDrawerHeader
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
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal" :onClick="(event) => openIndex = 0"  >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-inside",
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "default": \`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Inside</h2></DBDrawerHeader
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
    template: \`<div    ><DBButton  :onClick="(event) => openIndex = 1"  >
                    Open: Inside
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-slots",
    "open": false,
    "onClose": fn(),
    "default": \`With slots<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With slots</h2
    ><template v-slot:end-slot
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
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-example-slots" :onClick="(event) => openIndex = 2"  >
                    Open: With slots
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "onCancel": fn(),
    "default": \`Press ESC or click backdrop to test events<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Events Test
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as CloseandCancel,h as DefaultAsmodal,g as Inside,_ as Withslots,y as __namedExportsOrder,m as default};