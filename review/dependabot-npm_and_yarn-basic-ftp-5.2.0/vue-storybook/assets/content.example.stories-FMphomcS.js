import{_ as l}from"./select-BWCD_wY_.js";import"./iframe-B84iM1Cj.js";import"./preload-helper-1R8pPlB-.js";import"./constants-CvUrIGJS.js";import"./index-Du5OQxST.js";import"./form-components-Cuthhox_.js";import"./infotext-DvPZtgD_.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSelect/Content",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{label:"Label",placeholder:"(Default) Text",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},o={args:{label:"Label",icon:"x_placeholder",placeholder:"Text - Leading Icon",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Text",
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
    "icon": "x_placeholder",
    "placeholder": "Text - Leading Icon",
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
}`,...o.parameters?.docs?.source}}};const v=["DefaultText","TextLeadingIcon"];export{t as DefaultText,o as TextLeadingIcon,v as __namedExportsOrder,u as default};
