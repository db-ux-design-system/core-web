import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-Dteh-Jnw.js";import{i as r,n as i,r as a,t as o}from"./drawer-header-k9bTZ8YR.js";var s,c,l,u;function d(){return(d=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Events`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{open:!1,onClose:s(),onCancel:s(),default:`Press ESC or click backdrop to test events<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close">
    Events Test
  </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:a,DBButton:n,DBDrawerHeader:o},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`CloseandCancel`]})))()}d();export{l as CloseandCancel,u as __namedExportsOrder,c as default};