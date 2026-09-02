import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Du39UQRH.js";import{n as r,t as i}from"./drawer-header-irzmprF-.js";import{n as a,t as o}from"./icon-B3tL-rOR.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawerHeader/Slots`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},l={args:{default:`With end slot<template v-slot:end-slot><DBBadge>New</DBBadge></template>`},render:e=>({components:{DBDrawerHeader:i,DBBadge:n,DBIcon:o},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},u={args:{default:`With start slot<template v-slot:start-slot
  ><DBIcon icon="account"></DBIcon
></template>`},render:e=>({components:{DBDrawerHeader:i,DBBadge:n,DBIcon:o},setup(){return{args:e}},template:`<div    ><DBDrawerHeader v-bind="args"   >${e.default}</DBDrawerHeader></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Withendslot`,`Withstartslot`]})))()}f();export{l as Withendslot,u as Withstartslot,d as __namedExportsOrder,c as default};