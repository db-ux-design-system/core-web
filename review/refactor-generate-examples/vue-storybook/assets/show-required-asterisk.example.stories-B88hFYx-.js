import{_ as t}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Show Required Asterisk",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!0,default:"(Default) True"},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},o={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!1,default:"False"},render:e=>({components:{DBRadio:t},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": true,
    "default": \`(Default) True\`
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": false,
    "default": \`False\`
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
}`,...o.parameters?.docs?.source}}};const c=["DefaultTrue","False"];export{r as DefaultTrue,o as False,c as __namedExportsOrder,u as default};
