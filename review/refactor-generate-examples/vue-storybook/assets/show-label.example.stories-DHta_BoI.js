import{_ as a}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCustomSelect/Show Label",component:a,render:t=>({components:{DBCustomSelect:a},setup(){return{args:t}},template:`
      <DBCustomSelect v-bind="args">
      ${t.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},o={args:{default:"",options:[{value:"Option 1",id:"09a47p13k"},{value:"Option 2",id:"ya0ahf4od"},{value:"Option 3",id:"ya0ahf3od"},{value:"Option 4",id:"ya0ahf2od"},{value:"Option 5",id:"ya0ahf1od"}],showLabel:!0,label:"(Default) True",listLabel:"id-10213-(Default) True"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",options:[{value:"Option 1",id:"h8apm2qse"},{value:"Option 2",id:"vop8vkb8q"},{value:"Option 3",id:"vop8vkb7q"},{value:"Option 4",id:"vop8vkb6q"},{value:"Option 5",id:"vop8vkb5q"}],showLabel:!1,label:"False",listLabel:"id-10214-False"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: '09a47p13k'
    }, {
      value: 'Option 2',
      id: 'ya0ahf4od'
    }, {
      value: 'Option 3',
      id: 'ya0ahf3od'
    }, {
      value: 'Option 4',
      id: 'ya0ahf2od'
    }, {
      value: 'Option 5',
      id: 'ya0ahf1od'
    }],
    "showLabel": true,
    "label": "(Default) True",
    "listLabel": "id-10213-(Default) True"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'h8apm2qse'
    }, {
      value: 'Option 2',
      id: 'vop8vkb8q'
    }, {
      value: 'Option 3',
      id: 'vop8vkb7q'
    }, {
      value: 'Option 4',
      id: 'vop8vkb6q'
    }, {
      value: 'Option 5',
      id: 'vop8vkb5q'
    }],
    "showLabel": false,
    "label": "False",
    "listLabel": "id-10214-False"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const b=["DefaultTrue","False"];export{o as DefaultTrue,e as False,b as __namedExportsOrder,m as default};
