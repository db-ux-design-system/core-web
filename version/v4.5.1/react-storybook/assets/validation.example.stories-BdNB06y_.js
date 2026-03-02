import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-Bqg9eJyw.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./form-components-OaQ73I72.js";import"./button-DTf9InGf.js";import"./infotext-C4SWbymK.js";import"./input-Br3XDkR5.js";import"./tag-DvPX_ALl.js";import"./tooltip-CDF_xP-m.js";const{fn:q}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Validation",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{validation:"no-validation",label:"(Default) No Validation",listLabel:"id-102061-(Default) No Validation",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}]},render:t=>o.jsx("div",{style:{width:"200px"},children:o.jsx(a,{...t})})},l={args:{validation:"invalid",invalidMessage:"Invalid Message",label:"Invalid",listLabel:"id-102062-Invalid",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}]},render:t=>o.jsx("div",{style:{width:"200px"},children:o.jsx(a,{...t})})},i={args:{validation:"valid",invalidMessage:"Valid Message",label:"Valid",listLabel:"id-102063-Valid",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}]},render:t=>o.jsx("div",{style:{width:"200px"},children:o.jsx(a,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "no-validation",
    "label": "(Default) No Validation",
    "listLabel": "id-102061-(Default) No Validation",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "label": "Invalid",
    "listLabel": "id-102062-Invalid",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "valid",
    "invalidMessage": "Valid Message",
    "label": "Valid",
    "listLabel": "id-102063-Valid",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const w=["DefaultNoValidation","Invalid","Valid"];export{e as DefaultNoValidation,l as Invalid,i as Valid,w as __namedExportsOrder,f as default};
