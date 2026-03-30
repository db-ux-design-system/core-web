import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-TgjJdP5M.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-CiQt8FXn.js";import"./infotext-DrFHvgRy.js";import"./input-OE4kEwsx.js";import"./tag-DEw56KRi.js";import"./tooltip-BxEldRjs.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Show Loading",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{loadingText:"Loading",label:"(Default) False",listLabel:"id-10252-(Default) False",options:[{value:"Option 1",id:"glkscvbn5"},{value:"Option 2",id:"13cmgddkr"},{value:"Option 3",id:"14cmgddkr"},{value:"Option 4",id:"15cmgddkr"},{value:"Option 5",id:"16cmgddkr"}],showLoading:!1,multiple:!0},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})},t={args:{loadingText:"Loading",label:"True",listLabel:"id-10253-True",options:[{value:"Option 1",id:"e6wvfkv27"},{value:"Option 2",id:"afg1mqolj"},{value:"Option 3",id:"afg2mqolj"},{value:"Option 4",id:"afg3mqolj"},{value:"Option 5",id:"afg4mqolj"}],showLoading:!0,multiple:!0},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "loadingText": "Loading",
    "label": "(Default) False",
    "listLabel": "id-10252-(Default) False",
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "loadingText": "Loading",
    "label": "True",
    "listLabel": "id-10253-True",
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
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const T=["DefaultFalse","True"];export{e as DefaultFalse,t as True,T as __namedExportsOrder,O as default};
