import{_ as t}from"./tag-CA8FME-x.js";import"./iframe-tX0YdFU8.js";import"./preload-helper-CuQcqXYT.js";import"./constants-y2N5m1XS.js";import"./index-Bpz0UvTb.js";import"./tooltip-l32v4uOp.js";import"./document-scroll-listener-CE3OUdpG.js";import"./floating-components-CKmcRn_b.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTag/Show Icon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{icon:"x_placeholder",showIcon:!1,default:"(Default) False"},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},n={args:{icon:"x_placeholder",showIcon:!0,default:"True"},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "default": \`True\`
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
}`,...n.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,n as True,g as __namedExportsOrder,d as default};
