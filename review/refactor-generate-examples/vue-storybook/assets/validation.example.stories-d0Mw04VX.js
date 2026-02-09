import{_ as l}from"./select-Dgyggzww.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSelect/Validation",component:l,render:o=>({components:{DBSelect:l},setup(){return{args:o}},template:`
      <DBSelect v-bind="args">
      ${o.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",validation:"no-validation",placeholder:"(Default) No validation"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},a={args:{default:"",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},t={args:{default:"",options:[{value:"Valid",selected:!0},{value:"Option 2"}],label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Valid',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const m=["DefaultNovalidation","Invalid","Valid"];export{e as DefaultNovalidation,a as Invalid,t as Valid,m as __namedExportsOrder,u as default};
