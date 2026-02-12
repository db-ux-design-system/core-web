import{_ as r}from"./accordion-item-BPPJnE69.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBAccordionItem/Disabled",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"},defaultOpen:{control:"boolean"},text:{control:"text"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{headlinePlain:"(Default) False",disabled:!1,default:"(Default) False"},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},t={args:{headlinePlain:"True",disabled:!0,default:"True"},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "disabled": false,
    "default": \`(Default) False\`
  },
  render: (args: any) => ({
    components: {
      DBAccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBAccordionItem v-bind="args"   >\${args.default}</DBAccordionItem></div>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "disabled": true,
    "default": \`True\`
  },
  render: (args: any) => ({
    components: {
      DBAccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBAccordionItem v-bind="args"   >\${args.default}</DBAccordionItem></div>\`
  })
}`,...t.parameters?.docs?.source}}};const i=["DefaultFalse","True"];export{n as DefaultFalse,t as True,i as __namedExportsOrder,l as default};
