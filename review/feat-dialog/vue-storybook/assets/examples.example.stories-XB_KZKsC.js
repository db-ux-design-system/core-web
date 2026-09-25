import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-DBXAsXK7.js";import{n as r,t as i}from"./button-DnfJ6KyQ.js";import{n as a,t as o}from"./drawer-footer-BaPRHOyf.js";import{n as s,t as c}from"./drawer-header-CrPDliNK.js";import{n as l,t as u}from"./drawer-DneXbnns.js";import{n as d,t as f}from"./icon-DUfaWe2D.js";import{n as p,t as m}from"./link-D9Xk3dtm.js";var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t(),r(),a(),s(),d(),m(),l(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Examples`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h(),onCancel:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},_={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`},default:`(Default) As modal<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) As modal</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-modal"   >
                    Open: (Default) As modal
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},v={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:h(),default:`Inside<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Inside</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton  :onClick="(event) => insideOpen = true"  >
                    Open: Inside
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},y={args:{propOverrides:{id:`drawer-example-slots`},default:`With slots<template v-slot:header
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
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-example-slots"   >
                    Open: With slots
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},b={args:{open:!1,onClose:h(),onCancel:h(),default:`Press ESC or click backdrop to test events<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Events Test
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},x={args:{propOverrides:{id:`drawer-areas-text`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-text"   >
                    Open: With text prop
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},S={args:{propOverrides:{id:`drawer-areas-start`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-start"   >
                    Open: With header start slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},C={args:{propOverrides:{id:`drawer-areas-end`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With header end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-end"   >
                    Open: With header end slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},w={args:{propOverrides:{id:`drawer-areas-footer`},default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-footer"   >
                    Open: With footer
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},T=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{b as CloseandCancel,_ as DefaultAsmodal,v as Inside,w as Withfooter,C as Withheaderendslot,S as Withheaderstartslot,y as Withslots,x as Withtextprop,T as __namedExportsOrder,g as default};