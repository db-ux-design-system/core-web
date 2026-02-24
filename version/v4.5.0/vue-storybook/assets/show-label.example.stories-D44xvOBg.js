import{_ as t}from"./checkbox-DVH-4X2z.js";import{_ as a}from"./infotext-COZFc5EN.js";import"./iframe-BRL77h7A.js";import"./preload-helper-BrSIRfC5.js";import"./constants-CvUrIGJS.js";import"./index-D_V5zbEX.js";import"./form-components-CCMYuaqp.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCheckbox/Show Label",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Label",showLabel:!0,default:"(Default) True"},render:e=>({components:{DBCheckbox:t,DBInfotext:a},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},n={args:{name:"Label",showLabel:!1,default:"False"},render:e=>({components:{DBCheckbox:t,DBInfotext:a},setup(){return{args:e}},template:`<div    ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...n.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{o as DefaultTrue,n as False,p as __namedExportsOrder,b as default};
