import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BhzqUbJ7.js";import{n as r,t as i}from"./drawer-header-CHhVq9-u.js";import{n as a,t as o}from"./drawer-BEkHK1l5.js";var s,c,l,u;function d(){return(d=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Position`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{position:`absolute`,open:!1,onClose:s(),default:`Absolute<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Absolute </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div  :style="{
  position: 'relative',
  height: '500px',
  width: '100%',
  border: '2px dashed currentColor',
  overflow: 'hidden'
}"  >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "absolute",
    "open": false,
    "onClose": fn(),
    "default": \`Absolute<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Absolute </DBDrawerHeader></template
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
    template: \`<div  :style="{
  position: 'relative',
  height: '500px',
  width: '100%',
  border: '2px dashed currentColor',
  overflow: 'hidden'
}"  >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`DefaultFixed`]})))()}d();export{l as DefaultFixed,u as __namedExportsOrder,c as default};