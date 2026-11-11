import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-DWPKVysS.js";import{n as i,t as a}from"./control-panel-brand-CicldU2h.js";var o=t({SingleLine:()=>l,StrongSingleLine:()=>d,StrongWithSecondLine:()=>f,WithBadge:()=>p,WithSecondLine:()=>u,__namedExportsOrder:()=>m,default:()=>c}),s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBControlPanelBrand/Content`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`Single Line`},render:e=>({components:{DBControlPanelBrand:a,DBBadge:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},u={args:{secondLine:`Second Line`,default:`With Second Line`},render:e=>({components:{DBControlPanelBrand:a,DBBadge:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},d={args:{default:`<strong>Strong Single Line</strong>`},render:e=>({components:{DBControlPanelBrand:a,DBBadge:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},f={args:{secondLine:`Second Line`,default:`<strong>Strong With Second Line</strong>`},render:e=>({components:{DBControlPanelBrand:a,DBBadge:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},p={args:{default:`With Badge<template v-slot:end-slot><DBBadge>New</DBBadge></template>`},render:e=>({components:{DBControlPanelBrand:a,DBBadge:r},setup(){return{args:e}},template:`<div    ><DBControlPanelBrand v-bind="args"   >${e.default}</DBControlPanelBrand></div>`})},m=[`SingleLine`,`WithSecondLine`,`StrongSingleLine`,`StrongWithSecondLine`,`WithBadge`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}export{u as a,p as i,d as n,o,f as r,h as s,l as t};