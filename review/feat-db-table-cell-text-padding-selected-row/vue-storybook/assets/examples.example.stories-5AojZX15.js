import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-Bm0Q4oef.js";import{n as i,t as a}from"./button-CebT-vnR.js";import{n as o,t as s}from"./drawer-footer-BAic7vbc.js";import{n as c,t as l}from"./drawer-header-D3mQbTPK.js";import{n as u,t as d}from"./drawer-D5pbH5wO.js";import{n as f,t as p}from"./icon-DpZarDT5.js";import{n as m,t as h}from"./link-CZPX5xUy.js";var g=t({CloseandCancel:()=>S,DefaultAsmodal:()=>y,Inside:()=>b,Withfooter:()=>E,Withheaderendslot:()=>T,Withheaderstartslot:()=>w,Withslots:()=>x,Withtextprop:()=>C,__namedExportsOrder:()=>D,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),o(),c(),f(),h(),u(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBDrawer/Examples`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:_(),onCancel:_()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},y={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`},default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) As modal</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal"   >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},b={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:_(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Inside</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton  :onClick="(event) => insideOpen = true"  >
                    Open: Inside
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},x={args:{propOverrides:{id:`drawer-example-slots`},default:`With slots<template v-slot:header
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
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-slots"   >
                    Open: With slots
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},S={args:{open:!1,onClose:_(),onCancel:_(),default:`Press ESC or click backdrop to test events<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Events Test
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},C={args:{propOverrides:{id:`drawer-areas-text`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-text"   >
                    Open: With text prop
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},w={args:{propOverrides:{id:`drawer-areas-start`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-start"   >
                    Open: With header start slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},T={args:{propOverrides:{id:`drawer-areas-end`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-end"   >
                    Open: With header end slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},E={args:{propOverrides:{id:`drawer-areas-footer`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:d,DBBadge:r,DBButton:a,DBDrawerFooter:s,DBDrawerHeader:l,DBIcon:p,DBLink:m},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-footer"   >
                    Open: With footer
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},D=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "propOverrides": {
      id: 'drawer-example-modal'
    },
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
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal"   >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "propOverrides": {
      id: 'drawer-example-inside'
    },
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
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton  :onClick="(event) => insideOpen = true"  >
                    Open: Inside
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-example-slots'
    },
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
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-example-slots"   >
                    Open: With slots
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-text'
    },
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
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
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-text"   >
                    Open: With text prop
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-start'
    },
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-start"   >
                    Open: With header start slot
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-end'
    },
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header end slot</h2
    ><template v-slot:end-slot
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
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-end"   >
                    Open: With header end slot
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-footer'
    },
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDrawerHeader
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
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-footer"   >
                    Open: With footer
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...E.parameters?.docs?.source}}}})))()}export{T as a,C as c,E as i,g as l,y as n,w as o,b as r,x as s,S as t,O as u};