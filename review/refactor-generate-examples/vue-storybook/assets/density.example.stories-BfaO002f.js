import{_ as a}from"./accordion-item-BPPJnE69.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBAccordionItem/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"},defaultOpen:{control:"boolean"},text:{control:"text"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",headlinePlain:"Functional",default:"Functional"},render:e=>({components:{DBAccordionItem:a},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},t={args:{"data-density":"regular",headlinePlain:"(Default) Regular",default:"(Default) Regular"},render:e=>({components:{DBAccordionItem:a},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},r={args:{"data-density":"expressive",headlinePlain:"Expressive",default:"Expressive"},render:e=>({components:{DBAccordionItem:a},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headlinePlain": "Functional",
    "default": \`Functional\`
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
    "data-density": "regular",
    "headlinePlain": "(Default) Regular",
    "default": \`(Default) Regular\`
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headlinePlain": "Expressive",
    "default": \`Expressive\`
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
}`,...r.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,r as Expressive,n as Functional,u as __namedExportsOrder,l as default};
