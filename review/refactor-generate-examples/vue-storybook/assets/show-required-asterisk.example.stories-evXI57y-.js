import{_ as r}from"./checkbox-B_xXbCMn.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Show Required Asterisk",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!0,default:"(Default) True"},render:e=>({components:{DBCheckbox:r},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},t={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!1,default:"False"},render:e=>({components:{DBCheckbox:r},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": true,
    "default": \`(Default) True\`
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
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": false,
    "default": \`False\`
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
}`,...t.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{o as DefaultTrue,t as False,p as __namedExportsOrder,m as default};
