import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,j={title:"Components/DBCustomSelect/Disabled",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",listLabel:"id-10221-(Default) False",options:[{value:"Option 1",id:"dlysh2quv"},{value:"Option 2",id:"ygm3c9msn"},{value:"Option 3",id:"ygm4c9msn"},{value:"Option 4",id:"ygm5c9msn"},{value:"Option 5",id:"ygm6c9msn"}],multiple:!0,disabled:!1},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})},e={args:{label:"True",listLabel:"id-10222-True",options:[{value:"Option 1",id:"z445a00hf"},{value:"Option 2",id:"wji97jfsg"},{value:"Option 3",id:"wji96jfsg"},{value:"Option 4",id:"wji95jfsg"},{value:"Option 5",id:"wji94jfsg"}],disabled:!0,multiple:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10221-(Default) False",
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
    "disabled": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "listLabel": "id-10222-True",
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const O=["DefaultFalse","True"];export{o as DefaultFalse,e as True,O as __namedExportsOrder,j as default};
