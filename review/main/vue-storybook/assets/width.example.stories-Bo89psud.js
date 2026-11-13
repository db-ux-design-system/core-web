import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B5QFxqe_.js";import{n as i,t as a}from"./popover-BJt0LGQe.js";var o=t({DefaultAuto:()=>l,Fixed:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Width`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{id:`popover-17`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>(Default) Auto</DBButton></template
>`},render:e=>({components:{DBPopover:i,DBButton:r},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},u={args:{width:`fixed`,id:`popover-18`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing<template
  v-slot:trigger
  ><DBButton>Fixed</DBButton></template
>`},render:e=>({components:{DBPopover:i,DBButton:r},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},d=[`DefaultAuto`,`Fixed`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};