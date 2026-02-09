import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCustomSelect/Show Loading",component:l,render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`
      <DBCustomSelect v-bind="args">
      ${e.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},o={args:{default:"",options:[{value:"Option 1",id:"glkscvbn5"},{value:"Option 2",id:"13cmgddkr"},{value:"Option 3",id:"14cmgddkr"},{value:"Option 4",id:"15cmgddkr"},{value:"Option 5",id:"16cmgddkr"}],showLoading:!1,multiple:!0,loadingText:"Loading",label:"(Default) False",listLabel:"id-10252-(Default) False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},t={args:{default:"",options:[{value:"Option 1",id:"e6wvfkv27"},{value:"Option 2",id:"afg1mqolj"},{value:"Option 3",id:"afg2mqolj"},{value:"Option 4",id:"afg3mqolj"},{value:"Option 5",id:"afg4mqolj"}],showLoading:!0,multiple:!0,loadingText:"Loading",label:"True",listLabel:"id-10253-True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'glkscvbn5'
    }, {
      value: 'Option 2',
      id: '13cmgddkr'
    }, {
      value: 'Option 3',
      id: '14cmgddkr'
    }, {
      value: 'Option 4',
      id: '15cmgddkr'
    }, {
      value: 'Option 5',
      id: '16cmgddkr'
    }],
    "showLoading": false,
    "multiple": true,
    "loadingText": "Loading",
    "label": "(Default) False",
    "listLabel": "id-10252-(Default) False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'e6wvfkv27'
    }, {
      value: 'Option 2',
      id: 'afg1mqolj'
    }, {
      value: 'Option 3',
      id: 'afg2mqolj'
    }, {
      value: 'Option 4',
      id: 'afg3mqolj'
    }, {
      value: 'Option 5',
      id: 'afg4mqolj'
    }],
    "showLoading": true,
    "multiple": true,
    "loadingText": "Loading",
    "label": "True",
    "listLabel": "id-10253-True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const v=["DefaultFalse","True"];export{o as DefaultFalse,t as True,v as __namedExportsOrder,g as default};
