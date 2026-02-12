import{_ as n}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBRadio/Size",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Size",default:"(Default) Medium"},render:e=>({components:{DBRadio:n},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},a={args:{name:"Size",size:"small",default:"Small"},render:e=>({components:{DBRadio:n},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "default": \`(Default) Medium\`
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "default": \`Small\`
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
}`,...a.parameters?.docs?.source}}};const c=["DefaultMedium","Small"];export{o as DefaultMedium,a as Small,c as __namedExportsOrder,m as default};
