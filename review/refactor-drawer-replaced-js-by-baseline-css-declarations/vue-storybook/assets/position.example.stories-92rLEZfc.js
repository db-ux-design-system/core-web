import{i as e}from"./preload-helper-4balkuVu.js";import{X as t,bt as n,et as r,t as i}from"./src-B45G8RVb.js";var a,o,s,c;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Position`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{position:`absolute`,open:!1,onClose:a(),default:`Absolute<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"> Absolute </DBDrawerHeader></template
>`},render:e=>({components:{DBDrawer:r,DBButton:n,DBDrawerHeader:t},setup(){return{args:e}},template:`<div  :style="{
  position: 'relative',
  height: '500px',
  width: '100%',
  border: '2px dashed currentColor',
  overflow: 'hidden'
}"  >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultFixed`]}))();export{s as DefaultFixed,c as __namedExportsOrder,o as default};