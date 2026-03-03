import{_ as r}from"./button-Du_Qdieu.js";import{_ as n}from"./popover-DWBgg76V.js";import"./iframe-tX0YdFU8.js";import"./preload-helper-CuQcqXYT.js";import"./index-Bpz0UvTb.js";import"./document-scroll-listener-CE3OUdpG.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBPopover/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{id:"popover-17",default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>(Default) Auto</DBButton></template
>`},render:t=>({components:{DBPopover:n,DBButton:r},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})},e={args:{width:"fixed",id:"popover-18",default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>Fixed</DBButton></template
>`},render:t=>({components:{DBPopover:n,DBButton:r},setup(){return{args:t}},template:`<DBPopover v-bind="args"   >${t.default}</DBPopover>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-17",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>(Default) Auto</DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "popover-18",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>Fixed</DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...e.parameters?.docs?.source}}};const B=["DefaultAuto","Fixed"];export{o as DefaultAuto,e as Fixed,B as __namedExportsOrder,c as default};
