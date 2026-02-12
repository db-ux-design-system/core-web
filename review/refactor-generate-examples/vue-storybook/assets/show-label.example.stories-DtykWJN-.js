import{_ as t}from"./radio-Cl4dEsGX.js";import{_ as a}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Show Label",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{name:"Content",showLabel:!0,default:"(Default) True"},render:e=>({components:{DBRadio:t,DBInfotext:a},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},o={args:{name:"Content",showLabel:!1,default:"False"},render:e=>({components:{DBRadio:t,DBInfotext:a},setup(){return{args:e}},template:`<div    ><DBRadio v-bind="args"   >${e.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBRadio v-bind="args"   >\${args.default}</DBRadio>\`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...o.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{n as DefaultTrue,o as False,p as __namedExportsOrder,u as default};
