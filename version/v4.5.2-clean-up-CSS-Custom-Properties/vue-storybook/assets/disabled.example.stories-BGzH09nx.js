import{_ as o}from"./tag-C014YMpz.js";import"./iframe-eBBx05hg.js";import"./preload-helper-B-w8sMNO.js";import"./constants-y2N5m1XS.js";import"./index-BSAZCWsy.js";import"./tooltip-B1SOTz6c.js";import"./document-scroll-listener-Dwig32RB.js";import"./floating-components-CKmcRn_b.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTag/Disabled",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{default:`<label
  ><input type="checkbox" />
  (Default) False
</label>`},render:e=>({components:{DBTag:o},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},n={args:{default:`<label
  ><input type="checkbox" :disabled="true" />
  True
</label>`},render:e=>({components:{DBTag:o},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" />
  (Default) False
</label>\`
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" :disabled="true" />
  True
</label>\`
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
}`,...n.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{t as DefaultFalse,n as True,g as __namedExportsOrder,d as default};
