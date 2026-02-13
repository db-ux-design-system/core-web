import{_ as n}from"./tag-zuwoMDzA.js";import"./iframe-BJyzzIdz.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-nMDAkmV1.js";import"./tooltip-CAhrWOJH.js";import"./document-scroll-listener-DH0Q7UsH.js";import"./floating-components-1F_x7pmN.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTag/Show Check State",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},t={args:{showCheckState:!0,default:`<label
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
