import{i as e}from"./preload-helper-BfXGMw9-.js";import{Ht as t,J as n,bt as r,t as i}from"./src-D7kPOHCd.js";var a,o,s,c,l;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawerHeader/Slots`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},s={args:{default:`With end slot<template v-slot:end-slot><DBBadge>New</DBBadge></template>`},render:e=>({components:{DBDrawerHeader:r,DBBadge:t,DBIcon:n},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},c={args:{default:`With start slot<template v-slot:start-slot
  ><DBIcon icon="account"></DBIcon
></template>`},render:e=>({components:{DBDrawerHeader:r,DBBadge:t,DBIcon:n},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`With end slot<template v-slot:end-slot><DBBadge>New</DBBadge></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader,
      DBBadge,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`With start slot<template v-slot:start-slot
  ><DBIcon icon="account"></DBIcon
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawerHeader,
      DBBadge,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBDrawerHeader v-bind="args"   >\${args.default}</DBDrawerHeader></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Withendslot`,`Withstartslot`]}))();export{s as Withendslot,c as Withstartslot,l as __namedExportsOrder,o as default};