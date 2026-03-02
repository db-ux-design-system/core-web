import{_ as n}from"./checkbox-Dd7l3FUB.js";import"./iframe-BCCTV3qu.js";import"./preload-helper-B6T4qU05.js";import"./constants-y2N5m1XS.js";import"./index-B2WiKbs4.js";import"./form-components-DaV1eyfj.js";import"./infotext-BHFfm2yi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Size",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Size",default:"(Default) Medium"},render:e=>({components:{DBCheckbox:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},t={args:{name:"Size",size:"small",default:"Small"},render:e=>({components:{DBCheckbox:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "default": \`(Default) Medium\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "default": \`Small\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...t.parameters?.docs?.source}}};const p=["DefaultMedium","Small"];export{o as DefaultMedium,t as Small,p as __namedExportsOrder,u as default};
