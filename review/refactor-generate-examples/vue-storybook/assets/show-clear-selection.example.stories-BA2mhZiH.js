import{_ as l}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Show Clear Selection",component:l,render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`
      <DBCustomSelect v-bind="args">
      ${o.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{default:"",options:[{value:"Option 1",id:"9zfvu9noy"},{value:"Option 2",id:"cox90a0q8"},{value:"Option 3",id:"cox80a0q8"},{value:"Option 4",id:"cox70a0q8"},{value:"Option 5",id:"cox60a0q8"}],showClearSelection:!0,multiple:!0,label:"(Default) True",listLabel:"id-10258-(Default) True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",options:[{value:"Option 1",id:"ln9ms4fjy"},{value:"Option 2",id:"dta90rteq"},{value:"Option 3",id:"dta80rteq"},{value:"Option 4",id:"dta70rteq"},{value:"Option 5",id:"dta60rteq"}],showClearSelection:!1,multiple:!0,label:"False",listLabel:"id-10259-False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: '9zfvu9noy'
    }, {
      value: 'Option 2',
      id: 'cox90a0q8'
    }, {
      value: 'Option 3',
      id: 'cox80a0q8'
    }, {
      value: 'Option 4',
      id: 'cox70a0q8'
    }, {
      value: 'Option 5',
      id: 'cox60a0q8'
    }],
    "showClearSelection": true,
    "multiple": true,
    "label": "(Default) True",
    "listLabel": "id-10258-(Default) True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'ln9ms4fjy'
    }, {
      value: 'Option 2',
      id: 'dta90rteq'
    }, {
      value: 'Option 3',
      id: 'dta80rteq'
    }, {
      value: 'Option 4',
      id: 'dta70rteq'
    }, {
      value: 'Option 5',
      id: 'dta60rteq'
    }],
    "showClearSelection": false,
    "multiple": true,
    "label": "False",
    "listLabel": "id-10259-False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const v=["DefaultTrue","False"];export{t as DefaultTrue,e as False,v as __namedExportsOrder,x as default};
