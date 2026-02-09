import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBCustomSelect/Disabled",component:l,render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`
      <DBCustomSelect v-bind="args">
      ${o.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},e={args:{default:"",options:[{value:"Option 1",id:"dlysh2quv"},{value:"Option 2",id:"ygm3c9msn"},{value:"Option 3",id:"ygm4c9msn"},{value:"Option 4",id:"ygm5c9msn"},{value:"Option 5",id:"ygm6c9msn"}],multiple:!0,disabled:!1,label:"(Default) False",listLabel:"id-10221-(Default) False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},t={args:{default:"",options:[{value:"Option 1",id:"z445a00hf"},{value:"Option 2",id:"wji97jfsg"},{value:"Option 3",id:"wji96jfsg"},{value:"Option 4",id:"wji95jfsg"},{value:"Option 5",id:"wji94jfsg"}],disabled:!0,multiple:!0,label:"True",listLabel:"id-10222-True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'dlysh2quv'
    }, {
      value: 'Option 2',
      id: 'ygm3c9msn'
    }, {
      value: 'Option 3',
      id: 'ygm4c9msn'
    }, {
      value: 'Option 4',
      id: 'ygm5c9msn'
    }, {
      value: 'Option 5',
      id: 'ygm6c9msn'
    }],
    "multiple": true,
    "disabled": false,
    "label": "(Default) False",
    "listLabel": "id-10221-(Default) False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'z445a00hf'
    }, {
      value: 'Option 2',
      id: 'wji97jfsg'
    }, {
      value: 'Option 3',
      id: 'wji96jfsg'
    }, {
      value: 'Option 4',
      id: 'wji95jfsg'
    }, {
      value: 'Option 5',
      id: 'wji94jfsg'
    }],
    "disabled": true,
    "multiple": true,
    "label": "True",
    "listLabel": "id-10222-True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,t as True,x as __namedExportsOrder,v as default};
