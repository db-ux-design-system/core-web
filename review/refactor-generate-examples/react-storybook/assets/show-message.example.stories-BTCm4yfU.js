import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Message",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{message:"Helper Message",label:"(Default) False",listLabel:"id-10215-(Default) False",options:[{value:"Option 1",id:"m88qjifb3"},{value:"Option 2",id:"4et40d885"},{value:"Option 3",id:"4et40d884"},{value:"Option 4",id:"4et40d883"},{value:"Option 5",id:"4et40d882"}],showMessage:!1},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})},o={args:{message:"Helper Message",label:"True",listLabel:"id-10216-True",options:[{value:"Option 1",id:"tm65in30k"},{value:"Option 2",id:"hujnrn5vk"},{value:"Option 3",id:"hujnrn4vk"},{value:"Option 4",id:"hujnrn3vk"},{value:"Option 5",id:"hujnrn2vk"}],showMessage:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "message": "Helper Message",
    "label": "(Default) False",
    "listLabel": "id-10215-(Default) False",
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
    "showMessage": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "message": "Helper Message",
    "label": "True",
    "listLabel": "id-10216-True",
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
    "showMessage": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const j=["DefaultFalse","True"];export{e as DefaultFalse,o as True,j as __namedExportsOrder,f as default};
