import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-CbPNCFjy.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-B-LSsBs2.js";import"./infotext-DTRuL2Hl.js";import"./input-IRXaILc_.js";import"./tag-BOSvFPxM.js";import"./tooltip-DrU8665T.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBCustomSelect/Example tags",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{selectedType:"tag",label:"Tag grow",listLabel:"id-10271-Tag grow",options:[{value:"Option 1",id:"53xbfd1o6"},{value:"Option 2",id:"fq8ypeiz2"},{value:"Option 3",id:"jtd3wevz2"},{value:"Option 4",id:"srr1toi8f"},{value:"Option 5",id:"srr1toi7f"}],multiple:!0,removeTagsTexts:["Remove Option entry 1","Remove Option entry 2","Remove Option entry 3","Remove Option entry 4"]},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})},t={args:{selectedType:"tag",formFieldWidth:"auto",label:"Tag grow + auto",listLabel:"id-10272-Tag grow + auto",options:[{value:"Option 1",id:"jn3s5kl9t"},{value:"Option 2",id:"iesayujhy"},{value:"Option 3",id:"55kavoeem"},{value:"Option 4",id:"xi4qhrdg8"},{value:"Option 5",id:"xi4qhrdg7"}],multiple:!0},render:r=>l.jsx("div",{style:{width:"200px"},children:l.jsx(n,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "label": "Tag grow",
    "listLabel": "id-10271-Tag grow",
    "options": [{
      value: 'Option 1',
      id: '53xbfd1o6'
    }, {
      value: 'Option 2',
      id: 'fq8ypeiz2'
    }, {
      value: 'Option 3',
      id: 'jtd3wevz2'
    }, {
      value: 'Option 4',
      id: 'srr1toi8f'
    }, {
      value: 'Option 5',
      id: 'srr1toi7f'
    }],
    "multiple": true,
    "removeTagsTexts": ['Remove Option entry 1', 'Remove Option entry 2', 'Remove Option entry 3', 'Remove Option entry 4']
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "formFieldWidth": "auto",
    "label": "Tag grow + auto",
    "listLabel": "id-10272-Tag grow + auto",
    "options": [{
      value: 'Option 1',
      id: 'jn3s5kl9t'
    }, {
      value: 'Option 2',
      id: 'iesayujhy'
    }, {
      value: 'Option 3',
      id: '55kavoeem'
    }, {
      value: 'Option 4',
      id: 'xi4qhrdg8'
    }, {
      value: 'Option 5',
      id: 'xi4qhrdg7'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const w=["Taggrow","Taggrowauto"];export{e as Taggrow,t as Taggrowauto,w as __namedExportsOrder,T as default};
