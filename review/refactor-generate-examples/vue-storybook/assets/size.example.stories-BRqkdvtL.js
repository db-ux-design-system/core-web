import{_ as o}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBInfotext/Size",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{default:"(Default) Medium"},render:e=>({components:{DBInfotext:o},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},n={args:{size:"small",default:"Small"},render:e=>({components:{DBInfotext:o},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Medium\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "default": \`Small\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...n.parameters?.docs?.source}}};const u=["DefaultMedium","Small"];export{t as DefaultMedium,n as Small,u as __namedExportsOrder,c as default};
