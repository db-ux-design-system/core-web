import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-TgjJdP5M.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-CiQt8FXn.js";import"./infotext-DrFHvgRy.js";import"./input-OE4kEwsx.js";import"./tag-DEw56KRi.js";import"./tooltip-BxEldRjs.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCustomSelect/Show Label",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) True",listLabel:"id-10213-(Default) True",options:[{value:"Option 1",id:"09a47p13k"},{value:"Option 2",id:"ya0ahf4od"},{value:"Option 3",id:"ya0ahf3od"},{value:"Option 4",id:"ya0ahf2od"},{value:"Option 5",id:"ya0ahf1od"}],showLabel:!0},render:a=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...a})})},t={args:{label:"False",listLabel:"id-10214-False",options:[{value:"Option 1",id:"h8apm2qse"},{value:"Option 2",id:"vop8vkb8q"},{value:"Option 3",id:"vop8vkb7q"},{value:"Option 4",id:"vop8vkb6q"},{value:"Option 5",id:"vop8vkb5q"}],showLabel:!1},render:a=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...a})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-10213-(Default) True",
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
    "showLabel": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10214-False",
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
    "showLabel": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const w=["DefaultTrue","False"];export{e as DefaultTrue,t as False,w as __namedExportsOrder,g as default};
