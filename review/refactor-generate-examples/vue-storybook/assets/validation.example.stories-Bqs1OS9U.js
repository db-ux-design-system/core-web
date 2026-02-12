import{_ as t}from"./checkbox-B_xXbCMn.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Validation",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{name:"Validation",validation:"no-validation",default:"(Default) No validation"},render:e=>({components:{DBCheckbox:t},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},n={args:{name:"Validation",validation:"invalid",invalidMessage:"Invalid Message",default:"Invalid"},render:e=>({components:{DBCheckbox:t},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},o={args:{name:"Validation",validation:"valid",validMessage:"Valid message",default:"Valid"},render:e=>({components:{DBCheckbox:t},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "no-validation",
    "default": \`(Default) No validation\`
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "default": \`Invalid\`
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message",
    "default": \`Valid\`
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
}`,...o.parameters?.docs?.source}}};const v=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,n as Invalid,o as Valid,v as __namedExportsOrder,u as default};
