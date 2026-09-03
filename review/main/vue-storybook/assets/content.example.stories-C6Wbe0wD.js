import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-C2x3O_sc.js";import{n as r,t as i}from"./control-panel-brand-Bt6oGWA9.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBControlPanelBrand/Content`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`Single Line`},render:e=>({components:{DBControlPanelBrand:i,DBBadge:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},c={args:{secondLine:`Second Line`,default:`With Second Line`},render:e=>({components:{DBControlPanelBrand:i,DBBadge:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},l={args:{default:`<strong>Strong Single Line</strong>`},render:e=>({components:{DBControlPanelBrand:i,DBBadge:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},u={args:{secondLine:`Second Line`,default:`<strong>Strong With Second Line</strong>`},render:e=>({components:{DBControlPanelBrand:i,DBBadge:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},d={args:{default:`With Badge<template v-slot:end-slot><DBBadge>New</DBBadge></template>`},render:e=>({components:{DBControlPanelBrand:i,DBBadge:n},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`Single Line\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "secondLine": "Second Line",
    "default": \`With Second Line\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<strong>Strong Single Line</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "secondLine": "Second Line",
    "default": \`<strong>Strong With Second Line</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`With Badge<template v-slot:end-slot><DBBadge>New</DBBadge></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelBrand,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBControlPanelBrand v-bind="args"   >\${args.default}</DBControlPanelBrand></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`SingleLine`,`WithSecondLine`,`StrongSingleLine`,`StrongWithSecondLine`,`WithBadge`]})))()}p();export{s as SingleLine,l as StrongSingleLine,u as StrongWithSecondLine,d as WithBadge,c as WithSecondLine,f as __namedExportsOrder,o as default};