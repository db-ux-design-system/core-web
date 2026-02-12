import{_ as l}from"./select-spT-QGLO.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBSelect/Density",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{"data-density":"functional",label:"Label",placeholder:"Functional",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},o={args:{"data-density":"regular",label:"Label",placeholder:"(Default) Regular",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},a={args:{"data-density":"expressive",label:"Label",placeholder:"Expressive",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],default:""},render:e=>({components:{DBSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional",
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
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular",
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive",
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
}`,...a.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,a as Expressive,t as Functional,m as __namedExportsOrder,v as default};
