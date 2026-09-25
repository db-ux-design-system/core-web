import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-C9UORCmJ.js";import{n as r,t as i}from"./popover-D_7brI_g.js";var a,o,s,c;function l(){return(l=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPopover/Controlled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{id:`popover-controlled`,open:!1,animation:!1,default:`The parent owns the open state<template v-slot:trigger
  ><DBButton>Controlled popover</DBButton></template
>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<div    >Open DBPopover by switching open property<DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},c=[`Default`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Default,c as __namedExportsOrder,o as default};