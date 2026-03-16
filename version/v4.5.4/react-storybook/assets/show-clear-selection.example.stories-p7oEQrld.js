import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-DI3iW4sT.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-Cu1m3lzY.js";import"./infotext-CU95Uxoe.js";import"./input-VyrwQKeh.js";import"./tag-tdeJGuWp.js";import"./tooltip-CI3b2rGR.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBCustomSelect/Show Clear Selection",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) True",listLabel:"id-10258-(Default) True",options:[{value:"Option 1",id:"9zfvu9noy"},{value:"Option 2",id:"cox90a0q8"},{value:"Option 3",id:"cox80a0q8"},{value:"Option 4",id:"cox70a0q8"},{value:"Option 5",id:"cox60a0q8"}],showClearSelection:!0,multiple:!0},render:a=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...a})})},t={args:{label:"False",listLabel:"id-10259-False",options:[{value:"Option 1",id:"ln9ms4fjy"},{value:"Option 2",id:"dta90rteq"},{value:"Option 3",id:"dta80rteq"},{value:"Option 4",id:"dta70rteq"},{value:"Option 5",id:"dta60rteq"}],showClearSelection:!1,multiple:!0},render:a=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...a})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["DefaultTrue","False"];export{e as DefaultTrue,t as False,f as __namedExportsOrder,S as default};
