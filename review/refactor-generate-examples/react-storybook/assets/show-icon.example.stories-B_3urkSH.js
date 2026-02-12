import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Show Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{icon:"x_placeholder",label:"(Default) False",listLabel:"id-10217-(Default) False",options:[{value:"Option 1",id:"637sjglg5"},{value:"Option 2",id:"s529jnpj0"},{value:"Option 3",id:"s429jnpj0"},{value:"Option 4",id:"s329jnpj0"},{value:"Option 5",id:"s229jnpj0"}],showIcon:!1},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(n,{...l})})},e={args:{icon:"x_placeholder",label:"True",listLabel:"id-10218-True",options:[{value:"Option 1",id:"0b998bbgw"},{value:"Option 2",id:"a37n10lfh"},{value:"Option 3",id:"a47n10lfh"},{value:"Option 4",id:"a57n10lfh"},{value:"Option 5",id:"a67n10lfh"}],showIcon:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(n,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,e as True,g as __namedExportsOrder,O as default};
