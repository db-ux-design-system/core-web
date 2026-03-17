import{_ as n}from"./tag-Bu6uWbRF.js";import"./iframe-q-AYLWxZ.js";import"./preload-helper-CDE7oBwp.js";import"./constants-CRDP6LoT.js";import"./index-C-vJ4oTM.js";import"./tooltip-diLkT-gC.js";import"./document-scroll-listener-D0VF2132.js";import"./floating-components-CKmcRn_b.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Overflow",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:r()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{default:"(Default) False"},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},t={args:{overflow:!0,default:"<span>True - lorem ipsum dolor</span>"},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "overflow": true,
    "default": \`<span>True - lorem ipsum dolor</span>\`
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
}`,...t.parameters?.docs?.source}}};const d=["DefaultFalse","True"];export{o as DefaultFalse,t as True,d as __namedExportsOrder,g as default};
