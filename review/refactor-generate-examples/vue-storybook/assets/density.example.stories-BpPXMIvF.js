import{_ as o}from"./radio-Cl4dEsGX.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBRadio/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",name:"Density",value:"functional",default:"Functional"},render:e=>({components:{DBRadio:o},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},a={args:{"data-density":"regular",name:"Density",value:"regular",default:"(Default) Regular"},render:e=>({components:{DBRadio:o},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},t={args:{"data-density":"expressive",name:"Density",value:"expressive",default:"Expressive"},render:e=>({components:{DBRadio:o},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density",
    "value": "functional",
    "default": \`Functional\`
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density",
    "value": "regular",
    "default": \`(Default) Regular\`
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density",
    "value": "expressive",
    "default": \`Expressive\`
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
}`,...t.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,n as Functional,p as __namedExportsOrder,c as default};
