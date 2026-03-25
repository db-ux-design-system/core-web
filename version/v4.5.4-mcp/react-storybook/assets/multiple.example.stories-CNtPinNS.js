import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-Dg0eNUCm.js";import"./index-D2E5Z_bU.js";import"./iframe-DOGZb9UQ.js";import"./preload-helper-6AdaFMoN.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-BtsyxPWT.js";import"./infotext-Bpl9mnWN.js";import"./input-DmjmapHY.js";import"./tag-BMZOQGko.js";import"./tooltip-BIp9fc7B.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Multiple",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) False",listLabel:"id-10209-(Default) False",options:[{value:"Option 1",id:"ykzqfs8oa"},{value:"Option 2",id:"kcndx1xog"},{value:"Option 3",id:"kcndx2xog"},{value:"Option 4",id:"kcndx3xog"},{value:"Option 5",id:"kcndx4xog"}],multiple:!1},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})},t={args:{searchLabel:"Search",label:"True",listLabel:"id-10210-True",options:[{value:"Option 1",id:"34540enzm"},{value:"Option 2",id:"3a4ml34c8"},{value:"Option 3",id:"3a4ml34c7"},{value:"Option 4",id:"3a4ml34c6"},{value:"Option 5",id:"3a4ml34c5"}],multiple:!0},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10209-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'ykzqfs8oa'
    }, {
      value: 'Option 2',
      id: 'kcndx1xog'
    }, {
      value: 'Option 3',
      id: 'kcndx2xog'
    }, {
      value: 'Option 4',
      id: 'kcndx3xog'
    }, {
      value: 'Option 5',
      id: 'kcndx4xog'
    }],
    "multiple": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "searchLabel": "Search",
    "label": "True",
    "listLabel": "id-10210-True",
    "options": [{
      value: 'Option 1',
      id: '34540enzm'
    }, {
      value: 'Option 2',
      id: '3a4ml34c8'
    }, {
      value: 'Option 3',
      id: '3a4ml34c7'
    }, {
      value: 'Option 4',
      id: '3a4ml34c6'
    }, {
      value: 'Option 5',
      id: '3a4ml34c5'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const T=["DefaultFalse","True"];export{e as DefaultFalse,t as True,T as __namedExportsOrder,f as default};
