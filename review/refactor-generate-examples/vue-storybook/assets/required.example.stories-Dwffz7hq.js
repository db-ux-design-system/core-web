import{_ as r}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Required",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Requirement",required:!1,default:"(Default) False"},render:e=>({components:{DBRadio:r},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},n={args:{name:"Requirement",required:!0,default:"True"},render:e=>({components:{DBRadio:r},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Requirement",
    "required": false,
    "default": \`(Default) False\`
  },
  render: (args: any) => ({
    components: {
      DBRadio
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBRadio v-bind="args"   >\${args.default}</DBRadio>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Requirement",
    "required": true,
    "default": \`True\`
  },
  render: (args: any) => ({
    components: {
      DBRadio
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBRadio v-bind="args"   >\${args.default}</DBRadio>\`
  })
}`,...n.parameters?.docs?.source}}};const c=["DefaultFalse","True"];export{o as DefaultFalse,n as True,c as __namedExportsOrder,u as default};
