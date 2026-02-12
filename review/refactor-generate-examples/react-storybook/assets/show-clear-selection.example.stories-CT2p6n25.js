import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Show Clear Selection",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) True",listLabel:"id-10258-(Default) True",options:[{value:"Option 1",id:"9zfvu9noy"},{value:"Option 2",id:"cox90a0q8"},{value:"Option 3",id:"cox80a0q8"},{value:"Option 4",id:"cox70a0q8"},{value:"Option 5",id:"cox60a0q8"}],showClearSelection:!0,multiple:!0},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})},t={args:{label:"False",listLabel:"id-10259-False",options:[{value:"Option 1",id:"ln9ms4fjy"},{value:"Option 2",id:"dta90rteq"},{value:"Option 3",id:"dta80rteq"},{value:"Option 4",id:"dta70rteq"},{value:"Option 5",id:"dta60rteq"}],showClearSelection:!1,multiple:!0},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-10258-(Default) True",
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10259-False",
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const q=["DefaultTrue","False"];export{o as DefaultTrue,t as False,q as __namedExportsOrder,w as default};
