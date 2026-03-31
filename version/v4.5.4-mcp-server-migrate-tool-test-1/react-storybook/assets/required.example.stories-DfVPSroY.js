import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-hibMKOcL.js";import"./index-D2E5Z_bU.js";import"./iframe-B17vDKiL.js";import"./preload-helper-B3mKHU88.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-BuuoWBiT.js";import"./infotext-C8DP_CpH.js";import"./input-BA_i8EQ1.js";import"./tag-BqmiQFUm.js";import"./tooltip-D6POI3ol.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Required",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) False",listLabel:"id-10219-(Default) False",options:[{value:"Option 1",id:"drpx8im88"},{value:"Option 2",id:"211e6zox5"},{value:"Option 3",id:"211e6zox4"},{value:"Option 4",id:"211e6zox3"},{value:"Option 5",id:"211e6zox2"}],multiple:!0,required:!1},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})},t={args:{label:"True",listLabel:"id-10220-True",options:[{value:"Option 1",id:"2v0zw8afc"},{value:"Option 2",id:"308308w5z"},{value:"Option 3",id:"308308w4z"},{value:"Option 4",id:"308308w3z"},{value:"Option 5",id:"308308w2z"}],required:!0,multiple:!0},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10219-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'drpx8im88'
    }, {
      value: 'Option 2',
      id: '211e6zox5'
    }, {
      value: 'Option 3',
      id: '211e6zox4'
    }, {
      value: 'Option 4',
      id: '211e6zox3'
    }, {
      value: 'Option 5',
      id: '211e6zox2'
    }],
    "multiple": true,
    "required": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "listLabel": "id-10220-True",
    "options": [{
      value: 'Option 1',
      id: '2v0zw8afc'
    }, {
      value: 'Option 2',
      id: '308308w5z'
    }, {
      value: 'Option 3',
      id: '308308w4z'
    }, {
      value: 'Option 4',
      id: '308308w3z'
    }, {
      value: 'Option 5',
      id: '308308w2z'
    }],
    "required": true,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{e as DefaultFalse,t as True,f as __namedExportsOrder,w as default};
