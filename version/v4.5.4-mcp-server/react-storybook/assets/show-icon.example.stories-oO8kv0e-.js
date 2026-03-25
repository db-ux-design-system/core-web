import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-Ud2nME8E.js";import"./index-D2E5Z_bU.js";import"./iframe-BhiBouzR.js";import"./preload-helper-BHRuClfA.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-CMF91ZdE.js";import"./infotext-DSHjMQ4A.js";import"./input-Dr7Eha13.js";import"./tag-Bjw9ZujP.js";import"./tooltip-B2omE8Kk.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Icon",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{icon:"x_placeholder",label:"(Default) False",listLabel:"id-10217-(Default) False",options:[{value:"Option 1",id:"637sjglg5"},{value:"Option 2",id:"s529jnpj0"},{value:"Option 3",id:"s429jnpj0"},{value:"Option 4",id:"s329jnpj0"},{value:"Option 5",id:"s229jnpj0"}],showIcon:!1},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})},t={args:{icon:"x_placeholder",label:"True",listLabel:"id-10218-True",options:[{value:"Option 1",id:"0b998bbgw"},{value:"Option 2",id:"a37n10lfh"},{value:"Option 3",id:"a47n10lfh"},{value:"Option 4",id:"a57n10lfh"},{value:"Option 5",id:"a67n10lfh"}],showIcon:!0},render:n=>l.jsx("div",{style:{width:"200px"},children:l.jsx(a,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "label": "(Default) False",
    "listLabel": "id-10217-(Default) False",
    "options": [{
      value: 'Option 1',
      id: '637sjglg5'
    }, {
      value: 'Option 2',
      id: 's529jnpj0'
    }, {
      value: 'Option 3',
      id: 's429jnpj0'
    }, {
      value: 'Option 4',
      id: 's329jnpj0'
    }, {
      value: 'Option 5',
      id: 's229jnpj0'
    }],
    "showIcon": false
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "label": "True",
    "listLabel": "id-10218-True",
    "options": [{
      value: 'Option 1',
      id: '0b998bbgw'
    }, {
      value: 'Option 2',
      id: 'a37n10lfh'
    }, {
      value: 'Option 3',
      id: 'a47n10lfh'
    }, {
      value: 'Option 4',
      id: 'a57n10lfh'
    }, {
      value: 'Option 5',
      id: 'a67n10lfh'
    }],
    "showIcon": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const j=["DefaultFalse","True"];export{e as DefaultFalse,t as True,j as __namedExportsOrder,f as default};
