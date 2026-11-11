import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-DY9LAowy.js";import{n as i,t as a}from"./popover-AKUAMuMD.js";var o=t({Default:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Controlled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{id:`popover-controlled`,open:!1,animation:!1,default:`The parent owns the open state<template v-slot:trigger
  ><DBButton>Controlled popover</DBButton></template
>`},render:e=>({components:{DBPopover:i,DBButton:r},setup(){return{args:e}},template:`<div    >Open DBPopover by switching open property<DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-controlled",
    "open": false,
    "animation": false,
    "default": \`The parent owns the open state<template v-slot:trigger
  ><DBButton>Controlled popover</DBButton></template
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
    template: \`<div    >Open DBPopover by switching open property<DBPopover v-bind="args"   >\${args.default}</DBPopover></div>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{o as n,d as r,l as t};