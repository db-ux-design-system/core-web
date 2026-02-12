import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./custom-select-UQOz5BY-.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";import"./form-components-B5fJjToM.js";import"./button-DnZnbJNC.js";import"./infotext-CZi0xQss.js";import"./input-CZfMhmXc.js";import"./tag-Bwjb1ZJJ.js";import"./tooltip-COrPM-Vv.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Variant",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Above",listLabel:"id-10211-(Default) Above",options:[{value:"Option 1",id:"4lj8zr5b1"},{value:"Option 2",id:"uurfm7y2y"},{value:"Option 3",id:"uurfm7y3y"},{value:"Option 4",id:"uurfm7y4y"},{value:"Option 5",id:"uurfm7y5y"}]},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})},t={args:{variant:"floating",label:"Floating",listLabel:"id-10212-Floating",options:[{value:"Option 1",id:"otbjunoyx"},{value:"Option 2",id:"ju53v02yg"},{value:"Option 3",id:"ju53v03yg"},{value:"Option 4",id:"ju53v04yg"},{value:"Option 5",id:"ju53v05yg"}]},render:l=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Above",
    "listLabel": "id-10211-(Default) Above",
    "options": [{
      value: 'Option 1',
      id: '4lj8zr5b1'
    }, {
      value: 'Option 2',
      id: 'uurfm7y2y'
    }, {
      value: 'Option 3',
      id: 'uurfm7y3y'
    }, {
      value: 'Option 4',
      id: 'uurfm7y4y'
    }, {
      value: 'Option 5',
      id: 'uurfm7y5y'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "label": "Floating",
    "listLabel": "id-10212-Floating",
    "options": [{
      value: 'Option 1',
      id: 'otbjunoyx'
    }, {
      value: 'Option 2',
      id: 'ju53v02yg'
    }, {
      value: 'Option 3',
      id: 'ju53v03yg'
    }, {
      value: 'Option 4',
      id: 'ju53v04yg'
    }, {
      value: 'Option 5',
      id: 'ju53v05yg'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const h=["DefaultAbove","Floating"];export{o as DefaultAbove,t as Floating,h as __namedExportsOrder,O as default};
