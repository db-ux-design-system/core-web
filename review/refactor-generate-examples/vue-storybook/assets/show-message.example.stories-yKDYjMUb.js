import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBCustomSelect/Show Message",component:l,render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`
      <DBCustomSelect v-bind="args">
      ${o.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},e={args:{default:"",options:[{value:"Option 1",id:"m88qjifb3"},{value:"Option 2",id:"4et40d885"},{value:"Option 3",id:"4et40d884"},{value:"Option 4",id:"4et40d883"},{value:"Option 5",id:"4et40d882"}],showMessage:!1,message:"Helper Message",label:"(Default) False",listLabel:"id-10215-(Default) False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},t={args:{default:"",options:[{value:"Option 1",id:"tm65in30k"},{value:"Option 2",id:"hujnrn5vk"},{value:"Option 3",id:"hujnrn4vk"},{value:"Option 4",id:"hujnrn3vk"},{value:"Option 5",id:"hujnrn2vk"}],showMessage:!0,message:"Helper Message",label:"True",listLabel:"id-10216-True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'm88qjifb3'
    }, {
      value: 'Option 2',
      id: '4et40d885'
    }, {
      value: 'Option 3',
      id: '4et40d884'
    }, {
      value: 'Option 4',
      id: '4et40d883'
    }, {
      value: 'Option 5',
      id: '4et40d882'
    }],
    "showMessage": false,
    "message": "Helper Message",
    "label": "(Default) False",
    "listLabel": "id-10215-(Default) False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'tm65in30k'
    }, {
      value: 'Option 2',
      id: 'hujnrn5vk'
    }, {
      value: 'Option 3',
      id: 'hujnrn4vk'
    }, {
      value: 'Option 4',
      id: 'hujnrn3vk'
    }, {
      value: 'Option 5',
      id: 'hujnrn2vk'
    }],
    "showMessage": true,
    "message": "Helper Message",
    "label": "True",
    "listLabel": "id-10216-True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,t as True,h as __namedExportsOrder,v as default};
