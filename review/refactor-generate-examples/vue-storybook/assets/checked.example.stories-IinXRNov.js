import{_ as n}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBRadio/Checked",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Checked",default:"(Default) False"},render:e=>({components:{DBRadio:n},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},a={args:{name:"Checked",checked:!0,default:"True"},render:e=>({components:{DBRadio:n},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Checked",
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Checked",
    "checked": true,
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
}`,...a.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{o as DefaultFalse,a as True,u as __namedExportsOrder,i as default};
