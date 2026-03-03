import{_ as n}from"./tag-CA8FME-x.js";import"./iframe-tX0YdFU8.js";import"./preload-helper-CuQcqXYT.js";import"./constants-y2N5m1XS.js";import"./index-Bpz0UvTb.js";import"./tooltip-l32v4uOp.js";import"./document-scroll-listener-CE3OUdpG.js";import"./floating-components-CKmcRn_b.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTag/Emphasis",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{default:"(Default) Weak"},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{emphasis:"strong",default:"Strong"},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Weak\`
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
    "emphasis": "strong",
    "default": \`Strong\`
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
}`,...o.parameters?.docs?.source}}};const d=["DefaultWeak","Strong"];export{t as DefaultWeak,o as Strong,d as __namedExportsOrder,u as default};
