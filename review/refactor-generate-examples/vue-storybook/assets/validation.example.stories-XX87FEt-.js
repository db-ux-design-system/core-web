import{_ as i}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomSelect/Validation",component:i,render:l=>({components:{DBCustomSelect:i},setup(){return{args:l}},template:`
      <DBCustomSelect v-bind="args">
      ${l.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{default:"",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"no-validation",label:"(Default) No Validation",listLabel:"id-102061-(Default) No Validation"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},o={args:{default:"",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"invalid",invalidMessage:"Invalid Message",label:"Invalid",listLabel:"id-102062-Invalid"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"valid",invalidMessage:"Valid Message",label:"Valid",listLabel:"id-102063-Valid"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "no-validation",
    "label": "(Default) No Validation",
    "listLabel": "id-102061-(Default) No Validation"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "label": "Invalid",
    "listLabel": "id-102062-Invalid"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "valid",
    "invalidMessage": "Valid Message",
    "label": "Valid",
    "listLabel": "id-102063-Valid"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const O=["DefaultNoValidation","Invalid","Valid"];export{t as DefaultNoValidation,o as Invalid,e as Valid,O as __namedExportsOrder,h as default};
