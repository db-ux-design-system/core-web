import{_ as l}from"./select-D24ktFPm.js";import"./iframe-CjHKGCyo.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";import"./form-components-DH866HtI.js";import"./infotext-DiOvTvP0.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSelect/State",component:l,render:o=>({components:{DBSelect:l},setup(){return{args:o}},template:`
      <DBSelect v-bind="args">
      ${o.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"(Default) Empty"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},t={args:{options:[{value:"Filled",selected:!0},{value:"Option 2"}],label:"Label",value:"Filled",placeholder:"Filled"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    "placeholder": "(Default) Empty"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "value": "Filled",
    "placeholder": "Filled"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const m=["DefaultEmpty","Filled"];export{e as DefaultEmpty,t as Filled,m as __namedExportsOrder,u as default};
