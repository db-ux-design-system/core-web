import{_ as n}from"./tag-aQEVu0ox.js";import"./iframe-B8ME7r0t.js";import"./preload-helper-CQhCriSn.js";import"./constants-y2N5m1XS.js";import"./index-B4uakXIv.js";import"./tooltip-BtS4CKXc.js";import"./document-scroll-listener-Di23ImBo.js";import"./floating-components-CKmcRn_b.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Show Check State",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:a()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{showCheckState:!0,default:`<label
  ><input type="checkbox" />
  (Default) True
</label>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{showCheckState:!1,default:`<label
  ><input type="checkbox" />
  False
</label>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": true,
    "default": \`<label
  ><input type="checkbox" />
  (Default) True
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": false,
    "default": \`<label
  ><input type="checkbox" />
  False
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
}`,...o.parameters?.docs?.source}}};const d=["DefaultTrue","False"];export{t as DefaultTrue,o as False,d as __namedExportsOrder,g as default};
