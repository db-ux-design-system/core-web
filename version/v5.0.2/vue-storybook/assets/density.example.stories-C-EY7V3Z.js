import{i as e}from"./preload-helper-D9Spa--9.js";import{X as t,bt as n,et as r,t as i}from"./src-20MhLXJ4.js";var a,o,s,c,l,u;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{open:!1,onClose:a(),default:`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Functional
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div data-density="functional"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},c={args:{open:!1,onClose:a(),default:`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    (Default) Regular
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div data-density="regular"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l={args:{open:!1,onClose:a(),default:`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Expressive
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div data-density="expressive"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};