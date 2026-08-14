import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-x3RoSXa-.js";import{n as r,t as i}from"./popover-B7H6dw4D.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPopover/Width`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{id:`popover-17`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>(Default) Auto</DBButton></template
>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},c={args:{width:`fixed`,id:`popover-18`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>Fixed</DBButton></template
>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultAuto`,`Fixed`]})))()}u();export{s as DefaultAuto,c as Fixed,l as __namedExportsOrder,o as default};