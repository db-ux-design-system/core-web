import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Show Search",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) False",selectAllLabel:"Select all",searchLabel:"Search",listLabel:"id-10254-(Default) False",options:[{value:"Option 1",id:"09nure8co"},{value:"Option 2",id:"74n91hp14"},{value:"Option 3",id:"74n91hp15"},{value:"Option 4",id:"74n91hp16"},{value:"Option 5",id:"74n91hp17"},{value:"Option 6",id:"74n91hp18"},{value:"Option 7",id:"74n91hp19"},{value:"Option 8",id:"74n91hp24"},{value:"Option 9",id:"74n91hp34"},{value:"Option 10",id:"74n91hp44"}],showSearch:!1,multiple:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(a,{...l})})},o={args:{selectAllLabel:"Select all",searchLabel:"Search",label:"True",listLabel:"id-10255-True",options:[{value:"Option 1",id:"ktmbve0k2"},{value:"Option 2",id:"uf9wakkc1"},{value:"Option 3",id:"uf9wakkc2"},{value:"Option 4",id:"uf9wakkc3"},{value:"Option 5",id:"uf9wakkc4"}],showSearch:!0,multiple:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(a,{...l})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "selectAllLabel": "Select all",
    "searchLabel": "Search",
    "listLabel": "id-10254-(Default) False",
    "options": [{
      value: 'Option 1',
      id: '09nure8co'
    }, {
      value: 'Option 2',
      id: '74n91hp14'
    }, {
      value: 'Option 3',
      id: '74n91hp15'
    }, {
      value: 'Option 4',
      id: '74n91hp16'
    }, {
      value: 'Option 5',
      id: '74n91hp17'
    }, {
      value: 'Option 6',
      id: '74n91hp18'
    }, {
      value: 'Option 7',
      id: '74n91hp19'
    }, {
      value: 'Option 8',
      id: '74n91hp24'
    }, {
      value: 'Option 9',
      id: '74n91hp34'
    }, {
      value: 'Option 10',
      id: '74n91hp44'
    }],
    "showSearch": false,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "searchLabel": "Search",
    "label": "True",
    "listLabel": "id-10255-True",
    "options": [{
      value: 'Option 1',
      id: 'ktmbve0k2'
    }, {
      value: 'Option 2',
      id: 'uf9wakkc1'
    }, {
      value: 'Option 3',
      id: 'uf9wakkc2'
    }, {
      value: 'Option 4',
      id: 'uf9wakkc3'
    }, {
      value: 'Option 5',
      id: 'uf9wakkc4'
    }],
    "showSearch": true,
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const S=["DefaultFalse","True"];export{e as DefaultFalse,o as True,S as __namedExportsOrder,w as default};
