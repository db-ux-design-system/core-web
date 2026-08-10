import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CN4N42PE.js";import{i as r,n as i,r as a,t as o}from"./drawer-header-D9Rr3vpU.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{open:!1,onClose:s(),default:`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Functional
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div data-density="functional"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{open:!1,onClose:s(),default:`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) Regular
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div data-density="regular"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d={args:{open:!1,onClose:s(),default:`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Expressive
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div data-density="expressive"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Functional
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
    template: \`<div data-density="functional"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) Regular
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
    template: \`<div data-density="regular"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Expressive
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
    template: \`<div data-density="expressive"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};