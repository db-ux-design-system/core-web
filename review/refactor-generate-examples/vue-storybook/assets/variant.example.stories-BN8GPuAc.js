import{_ as a}from"./select-Dgyggzww.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSelect/Variant",component:a,render:o=>({components:{DBSelect:a},setup(){return{args:o}},template:`
      <DBSelect v-bind="args">
      ${o.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"(Default) Above"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},t={args:{default:"",options:[{value:"Floating",selected:!0},{value:"Option 2"}],label:"Label",variant:"floating",value:"Floating",placeholder:"Floating"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
    "placeholder": "(Default) Above"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Floating',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "variant": "floating",
    "value": "Floating",
    "placeholder": "Floating"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const v=["DefaultAbove","FloatingLabel"];export{e as DefaultAbove,t as FloatingLabel,v as __namedExportsOrder,u as default};
