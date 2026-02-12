import{_ as n}from"./tag-mPlBKPvT.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./tooltip-bsw76Umn.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTag/Show Slot",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{default:"(Default) False"},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{icon:"x_placeholder",default:`True<template v-slot:content
  ><div class="default-content-slot">Swap Slot</div></template
>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) False\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`True<template v-slot:content
  ><div class="default-content-slot">Swap Slot</div></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...o.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{t as DefaultFalse,o as True,g as __namedExportsOrder,d as default};
