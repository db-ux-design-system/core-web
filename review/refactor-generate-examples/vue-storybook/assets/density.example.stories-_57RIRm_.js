import{_ as r}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBInfotext/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{"data-density":"functional",default:"Functional"},render:e=>({components:{DBInfotext:r},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},n={args:{"data-density":"regular",default:"(Default) Regular"},render:e=>({components:{DBInfotext:r},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},a={args:{"data-density":"expressive",default:"Expressive"},render:e=>({components:{DBInfotext:r},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
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
    "data-density": "regular",
    "default": \`(Default) Regular\`
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
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
}`,...a.parameters?.docs?.source}}};const i=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,a as Expressive,t as Functional,i as __namedExportsOrder,d as default};
