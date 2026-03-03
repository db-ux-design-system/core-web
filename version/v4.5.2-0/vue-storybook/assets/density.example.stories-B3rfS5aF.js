import{_ as r}from"./tag-CKI_AIpv.js";import"./iframe-DzmCn9cU.js";import"./preload-helper-f7VG_GAS.js";import"./constants-y2N5m1XS.js";import"./index-B2WiKbs4.js";import"./tooltip-DOJ5ztBc.js";import"./document-scroll-listener-C1Gj1okB.js";import"./floating-components-CKmcRn_b.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTag/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},n={args:{"data-density":"functional",default:"Functional"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},t={args:{"data-density":"regular",default:"(Default) Regular"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},a={args:{"data-density":"expressive",default:"Expressive"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`(Default) Regular\`
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
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
}`,...a.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,n as Functional,f as __namedExportsOrder,m as default};
