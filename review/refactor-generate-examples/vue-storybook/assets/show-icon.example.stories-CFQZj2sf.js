import{_ as o}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInfotext/Show Icon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{showIcon:!0,default:"(Default) True"},render:e=>({components:{DBInfotext:o},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},n={args:{showIcon:!1,default:"False"},render:e=>({components:{DBInfotext:o},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true,
    "default": \`(Default) True\`
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
    "showIcon": false,
    "default": \`False\`
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
}`,...n.parameters?.docs?.source}}};const f=["DefaultTrue","False"];export{t as DefaultTrue,n as False,f as __namedExportsOrder,u as default};
