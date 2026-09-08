import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-CZkMkL9T.js";import{n as r,t as i}from"./button-CaFZ3HzC.js";import{n as a,t as o}from"./drawer-footer-BWQSsXV7.js";import{n as s,t as c}from"./drawer-header-ySCbWcJF.js";import{n as l,t as u}from"./drawer-C0ZzfCYP.js";import{n as d,t as f}from"./link-BpfEKqAC.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),r(),a(),s(),f(),l(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDrawer/Example`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},h={args:{id:`drawer-example-modal`,variant:`modal`,open:!1,onClose:p(),default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) As modal</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal" :onClick="(event) => openIndex = 0"  >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},g={args:{id:`drawer-example-inside`,variant:`inside`,open:!1,onClose:p(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Inside</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBLink:d},setup(){return{args:e}},template:`<div    ><DBButton command="show" commandfor="drawer-example-inside" :onClick="(event) => openIndex = 1"  >
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
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},v=[`DefaultAsmodal`,`Inside`,`Withslots`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    template: \`<div    ><DBButton command="show" commandfor="drawer-example-inside" :onClick="(event) => openIndex = 1"  >
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as DefaultAsmodal,g as Inside,_ as Withslots,v as __namedExportsOrder,m as default};