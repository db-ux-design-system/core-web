import{n as e}from"./chunk-DnJy8xQt.js";import{f as t,k as n,t as r}from"./src-CwgarGln.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBPopover/Width`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},o={args:{id:`popover-17`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>(Default) Auto</DBButton></template
>`},render:e=>({components:{DBPopover:t,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},s={args:{width:`fixed`,id:`popover-18`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>Fixed</DBButton></template
>`},render:e=>({components:{DBPopover:t,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultAuto`,`Fixed`]}))();export{o as DefaultAuto,s as Fixed,c as __namedExportsOrder,a as default};