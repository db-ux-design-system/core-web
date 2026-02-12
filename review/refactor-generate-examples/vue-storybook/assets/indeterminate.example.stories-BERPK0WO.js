import{_ as o}from"./checkbox-B_xXbCMn.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Indeterminate",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{name:"Indeterminate",indeterminate:!1,default:"(Default) False"},render:e=>({components:{DBCheckbox:o},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},n={args:{name:"Indeterminate",indeterminate:!0,default:"True"},render:e=>({components:{DBCheckbox:o},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": false,
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": true,
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
}`,...n.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{t as DefaultFalse,n as True,p as __namedExportsOrder,u as default};
