import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-DI3iW4sT.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-Cu1m3lzY.js";import"./infotext-CU95Uxoe.js";import"./input-VyrwQKeh.js";import"./tag-tdeJGuWp.js";import"./tooltip-CI3b2rGR.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Show Required Asterisk",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) True",listLabel:"id-1021s9-(Default) True",options:[{value:"Option 1",id:"drpxs8im88"},{value:"Option 2",id:"211ed6zox5"},{value:"Option 3",id:"211ed6zox4"},{value:"Option 4",id:"211ed6zox3"},{value:"Option 5",id:"211ed6zox2"}],multiple:!0,required:!0,showRequiredAsterisk:!0},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})},t={args:{label:"False",listLabel:"id-10s220-False",options:[{value:"Option 1",id:"2v0zfw8afc"},{value:"Option 2",id:"30830f8w5z"},{value:"Option 3",id:"30830f8w4z"},{value:"Option 4",id:"30830f8w3z"},{value:"Option 5",id:"30830f8w2z"}],required:!0,showRequiredAsterisk:!1,multiple:!0},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-1021s9-(Default) True",
    "options": [{
      value: 'Option 1',
      id: 'drpxs8im88'
    }, {
      value: 'Option 2',
      id: '211ed6zox5'
    }, {
      value: 'Option 3',
      id: '211ed6zox4'
    }, {
      value: 'Option 4',
      id: '211ed6zox3'
    }, {
      value: 'Option 5',
      id: '211ed6zox2'
    }],
    "multiple": true,
    "required": true,
    "showRequiredAsterisk": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10s220-False",
    "options": [{
      value: 'Option 1',
      id: '2v0zfw8afc'
    }, {
      value: 'Option 2',
      id: '30830f8w5z'
    }, {
      value: 'Option 3',
      id: '30830f8w4z'
    }, {
      value: 'Option 4',
      id: '30830f8w3z'
    }, {
      value: 'Option 5',
      id: '30830f8w2z'
    }],
    "required": true,
    "showRequiredAsterisk": false,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const g=["DefaultTrue","False"];export{e as DefaultTrue,t as False,g as __namedExportsOrder,O as default};
