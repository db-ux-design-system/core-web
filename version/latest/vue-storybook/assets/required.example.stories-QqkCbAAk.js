import{_ as n}from"./checkbox-Dd7l3FUB.js";import"./iframe-BCCTV3qu.js";import"./preload-helper-B6T4qU05.js";import"./constants-y2N5m1XS.js";import"./index-B2WiKbs4.js";import"./form-components-DaV1eyfj.js";import"./infotext-BHFfm2yi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Required",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Requirement",required:!1,default:"(Default) False"},render:e=>({components:{DBCheckbox:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},t={args:{name:"Requirement",required:!0,default:"True"},render:e=>({components:{DBCheckbox:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Requirement",
    "required": false,
    "default": \`(Default) False\`
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
    "name": "Requirement",
    "required": true,
    "default": \`True\`
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
}`,...t.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{o as DefaultFalse,t as True,p as __namedExportsOrder,m as default};
