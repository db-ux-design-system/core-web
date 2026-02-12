import{_ as t}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Validation",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{name:"No validation",validation:"no-validation",default:"(Default) No validation"},render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`<DBRadio v-bind="args"   >${a.default}</DBRadio>`})},e={args:{name:"invalid",validation:"invalid",default:"Invalid"},render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`<DBRadio v-bind="args"   >${a.default}</DBRadio>`})},o={args:{name:"valid",validation:"valid",checked:!0,default:"Valid"},render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`<DBRadio v-bind="args"   >${a.default}</DBRadio>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "No validation",
    "validation": "no-validation",
    "default": \`(Default) No validation\`
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "invalid",
    "validation": "invalid",
    "default": \`Invalid\`
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "valid",
    "validation": "valid",
    "checked": true,
    "default": \`Valid\`
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
}`,...o.parameters?.docs?.source}}};const m=["DefaultNovalidation","Invalid","Valid"];export{n as DefaultNovalidation,e as Invalid,o as Valid,m as __namedExportsOrder,u as default};
