import{_ as l}from"./select-spT-QGLO.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBSelect/Show Label",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{label:"Label",placeholder:"(Default) True",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showLabel:!0,default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},o={args:{label:"Label",placeholder:"False",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showLabel:!1,default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) True",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "showLabel": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "False",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "showLabel": false,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};const v=["DefaultTrue","False"];export{t as DefaultTrue,o as False,v as __namedExportsOrder,d as default};
