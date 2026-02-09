import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBCustomSelect/Show Select All",component:l,render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`
      <DBCustomSelect v-bind="args">
      ${o.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},e={args:{default:"",options:[{value:"Option 1",id:"p6l2dpiea"},{value:"Option 2",id:"jh7pczno4"},{value:"Option 3",id:"jh7pczno5"},{value:"Option 4",id:"jh7pczno6"},{value:"Option 5",id:"jh7pczno7"},{value:"Option 6",id:"jh7pczno8"}],showSelectAll:!1,multiple:!0,selectAllLabel:"Select all",label:"(Default) False",listLabel:"id-10256-(Default) False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},t={args:{default:"",options:[{value:"Option 1",id:"zcim85pqg"},{value:"Option 2",id:"kg6gvbwru"},{value:"Option 3",id:"kg5gvbwru"},{value:"Option 4",id:"kg4gvbwru"},{value:"Option 5",id:"kg3gvbwru"}],showSelectAll:!0,multiple:!0,selectAllLabel:"Select all",label:"True",listLabel:"id-10257-True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'p6l2dpiea'
    }, {
      value: 'Option 2',
      id: 'jh7pczno4'
    }, {
      value: 'Option 3',
      id: 'jh7pczno5'
    }, {
      value: 'Option 4',
      id: 'jh7pczno6'
    }, {
      value: 'Option 5',
      id: 'jh7pczno7'
    }, {
      value: 'Option 6',
      id: 'jh7pczno8'
    }],
    "showSelectAll": false,
    "multiple": true,
    "selectAllLabel": "Select all",
    "label": "(Default) False",
    "listLabel": "id-10256-(Default) False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'zcim85pqg'
    }, {
      value: 'Option 2',
      id: 'kg6gvbwru'
    }, {
      value: 'Option 3',
      id: 'kg5gvbwru'
    }, {
      value: 'Option 4',
      id: 'kg4gvbwru'
    }, {
      value: 'Option 5',
      id: 'kg3gvbwru'
    }],
    "showSelectAll": true,
    "multiple": true,
    "selectAllLabel": "Select all",
    "label": "True",
    "listLabel": "id-10257-True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const b=["DefaultFalse","True"];export{e as DefaultFalse,t as True,b as __namedExportsOrder,v as default};
