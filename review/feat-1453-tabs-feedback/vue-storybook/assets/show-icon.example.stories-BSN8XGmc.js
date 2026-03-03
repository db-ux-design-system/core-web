import{_ as t}from"./tag-RdRVm3a5.js";import"./iframe-PLmMB2Ss.js";import"./preload-helper-CDE7oBwp.js";import"./constants-CRDP6LoT.js";import"./index-csvFxEYc.js";import"./tooltip-C5Z6JCDS.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTag/Show Icon",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{icon:"x_placeholder",showIcon:!1,default:"(Default) False"},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},n={args:{icon:"x_placeholder",showIcon:!0,default:"True"},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
