import{_ as r}from"./select-BpYzkxks.js";import"./iframe-D9Yu_Ccn.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";import"./form-components-C8BRKoTh.js";import"./infotext-D2zgab01.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSelect/Examples Floating Label",component:r,render:o=>({components:{DBSelect:r},setup(){return{args:o}},template:`
      <DBSelect v-bind="args">
      ${o.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",variant:"floating",placeholder:"(Default) Empty"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},a={args:{options:[{value:"Filled",selected:!0},{value:"Option 2"}],label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},t={args:{options:[{value:"Disabled",selected:!0},{value:"Option 2"}],disabled:!0,label:"Label",variant:"floating",value:"Disabled",placeholder:"Disabled"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},l={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"Invalid",variant:"floating",validation:"invalid",invalidMessage:"Invalid Message"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Disabled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "disabled": true,
    "label": "Label",
    "variant": "floating",
    "value": "Disabled",
    "placeholder": "Disabled"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
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
    "label": "Label",
    "placeholder": "Invalid",
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...l.parameters?.docs?.source}}};const b=["DefaultEmpty","Filled","Disabled","Invalid"];export{e as DefaultEmpty,t as Disabled,a as Filled,l as Invalid,b as __namedExportsOrder,m as default};
