import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBCustomSelect/Show Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) True",listLabel:"id-10213-(Default) True",options:[{value:"Option 1",id:"09a47p13k"},{value:"Option 2",id:"ya0ahf4od"},{value:"Option 3",id:"ya0ahf3od"},{value:"Option 4",id:"ya0ahf2od"},{value:"Option 5",id:"ya0ahf1od"}],showLabel:!0},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(a,{...l})})},e={args:{label:"False",listLabel:"id-10214-False",options:[{value:"Option 1",id:"h8apm2qse"},{value:"Option 2",id:"vop8vkb8q"},{value:"Option 3",id:"vop8vkb7q"},{value:"Option 4",id:"vop8vkb6q"},{value:"Option 5",id:"vop8vkb5q"}],showLabel:!1},render:l=>t.jsx("div",{style:{width:"200px"},children:t.jsx(a,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["DefaultTrue","False"];export{o as DefaultTrue,e as False,y as __namedExportsOrder,w as default};
